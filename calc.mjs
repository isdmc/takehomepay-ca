import taxData from './data/taxData.mjs';
import payFrequencyMap from './data/payFrequencyMap.mjs';
import CalcFactory from './calcs/calcFactory.mjs';
import toDollarFormat from './util/toDollarFormat.mjs';

export default function calcMain(grossIncome, year, region, payFrequency) {
    let payFrequencyDivisor = payFrequencyMap[payFrequency];

    let debug = false;
    let calcs = getCalculators(taxData, year, region);

    let results = {
        deductions: {},
        taxes: {},
        premiums: {},
        credits: {},
        netTaxes: {},
        netPay: {}
    };

    calculateDeductions(results, grossIncome, calcs);
    let taxableIncome = grossIncome - results.deductions.cppDeduction;

    calculateTaxes(results, taxableIncome, region, calcs);
    calculatePremiums(results, grossIncome, taxableIncome, region, calcs)
    calculateCredits(results, region, grossIncome, calcs);
    calculateNetTaxes(results, region, calcs);
    calculateNetPay(results, grossIncome, payFrequencyDivisor);

    displayResults(results);

    if (debug) {
        printDebug(year, region, grossIncome, results);
    }
}

function getCalculators(taxData, year, region) {
    let factory = new CalcFactory(taxData);
    let taxCalc = factory.get(year, null, 'Tax');
    let basicPersonalAmountCalc = factory.get(year, region, 'BasicPersonalAmount');
    let cppCalc = factory.get(year, region, 'CPP');
    let eiCalc = factory.get(year, region, 'EI');
    let employmentAmountCalc = factory.get(year, region, 'EmploymentAmount');
    let ontarioHealthPremiumAmountCalc = factory.get(year, region, 'OntarioHealthPremium');

    return {
        taxCalc,
        basicPersonalAmountCalc,
        cppCalc,
        eiCalc,
        employmentAmountCalc,
        ontarioHealthPremiumAmountCalc
    };
}

function calculateTaxes(results, taxableIncome, region, calcs)
{
    results.taxes.federalTax = calcs.taxCalc.calculateTaxes(taxableIncome, 'Federal');
    results.taxes.regionalTax = calcs.taxCalc.calculateTaxes(taxableIncome, region);
}

function calculatePremiums(results, grossIncome, taxableIncome, region, calcs)
{
    let ontarioHealthPremium = 0;
    if (region === 'Ontario') {
        ontarioHealthPremium = calcs.ontarioHealthPremiumAmountCalc.calculateOntarioHealthPremium(taxableIncome);
    }

    results.premiums.ontarioHealthPremium = ontarioHealthPremium;
    results.premiums.cppPremiums = calcs.cppCalc.calculateCPPPremiums(taxableIncome) + calcs.cppCalc.calculateCPPEnhancedPremiums(grossIncome);
    results.premiums.eiPremiums = calcs.eiCalc.calculateEIPremiums(grossIncome);
    results.premiums.totalPremiums = results.premiums.cppPremiums + results.premiums.eiPremiums;
}

function calculateDeductions(results, grossIncome, calcs)
{
    results.deductions.cppDeduction = calcs.cppCalc.calculateCPPTaxDeduction(grossIncome);
}

function calculateCredits(results, region, grossIncome, calcs)
{
    results.credits.basicPersonalAmountCreditFederal = calcs.basicPersonalAmountCalc.calculateBasicPersonalAmountTaxCredit(grossIncome, 'Federal');
    results.credits.basicPersonalAmountCreditRegional = calcs.basicPersonalAmountCalc.calculateBasicPersonalAmountTaxCredit(grossIncome, region);
    results.credits.cppCreditFederal = calcs.cppCalc.calculateCPPTaxCredit(grossIncome, 'Federal');
    results.credits.cppCreditRegional = calcs.cppCalc.calculateCPPTaxCredit(grossIncome, region);
    results.credits.eiCreditFederal = calcs.eiCalc.calculateEITaxCredit(grossIncome, 'Federal');
    if (region === 'Quebec') {
        results.credits.eiCreditRegional = calcs.eiCalc.calculateQPIPTaxCredit(grossIncome);
    } 
    else {
        results.credits.eiCreditRegional = calcs.eiCalc.calculateEITaxCredit(grossIncome, region);
    }
    
    results.credits.employmentAmountCreditFederal = calcs.employmentAmountCalc.calculateEmploymentAmountTaxCredit(grossIncome, 'Federal');
    results.credits.employmentAmountCreditRegional = calcs.employmentAmountCalc.calculateEmploymentAmountTaxCredit(grossIncome, region);
    
    results.credits.federalCredits = (results.credits.basicPersonalAmountCreditFederal + results.credits.cppCreditFederal + results.credits.eiCreditFederal + results.credits.employmentAmountCreditFederal);
    results.credits.regionalCredits = (results.credits.basicPersonalAmountCreditRegional + results.credits.cppCreditRegional + results.credits.eiCreditRegional + results.credits.employmentAmountCreditRegional);
    results.credits.totalCredits = results.credits.federalCredits + results.credits.regionalCredits;
}

// Taxes and Premiums?
function calculateNetTaxes(results, region, calcs)
{
    results.netTaxes.netTaxesFederal = results.taxes.federalTax - results.credits.federalCredits;
    results.taxes.regionalSurtax = calcs.taxCalc.calculateRegionalSurtax(results.taxes.regionalTax - results.credits.regionalCredits, region);
    results.netTaxes.netTaxesRegional = (results.taxes.regionalTax - results.credits.regionalCredits) + results.taxes.regionalSurtax + results.premiums.ontarioHealthPremium;
    results.netTaxes.netTaxes = results.netTaxes.netTaxesFederal + results.netTaxes.netTaxesRegional;
}

function calculateNetPay(results, grossIncome, payFrequencyDivisor)
{
    results.netPay.total = grossIncome - (results.netTaxes.netTaxes + results.premiums.cppPremiums + results.premiums.eiPremiums);
    results.netPay.perPayCheck = results.netPay.total / payFrequencyDivisor;   
}

function displayResults(results)
{
    let federalTaxesElement = document.getElementById('federalTaxes');
    let regionalTaxesElement = document.getElementById('regionalTaxes');
    let surtaxElement = document.getElementById('surtax');
    let ontarioHealthPremium = document.getElementById('ontarioHealthPremium');
    federalTaxesElement.textContent = toDollarFormat(results.taxes.federalTax);
    regionalTaxesElement.textContent = toDollarFormat(results.taxes.regionalTax);
    surtaxElement.textContent = toDollarFormat(results.taxes.regionalSurtax);
    ontarioHealthPremium.textContent = toDollarFormat(results.premiums.ontarioHealthPremium);

    let cppPremiumsElement = document.getElementById('cppPremiums');
    let eiPremiumsElement = document.getElementById('eiPremiums');
    cppPremiumsElement.textContent = toDollarFormat(results.premiums.cppPremiums);
    eiPremiumsElement.textContent = toDollarFormat(results.premiums.eiPremiums);

    let cppDeductionElement = document.getElementById('cpp2Deduction');
    cppDeductionElement.textContent = toDollarFormat(results.deductions.cppDeduction);

    let federalBasicPersonalAmountElement = document.getElementById('federalBasicPersonalAmountCredit');
    let regionalBasicPersonalAmountElement = document.getElementById('regionalBasicPersonalAmountCredit');
    federalBasicPersonalAmountElement.textContent = toDollarFormat(results.credits.basicPersonalAmountCreditFederal);
    regionalBasicPersonalAmountElement.textContent = toDollarFormat(results.credits.basicPersonalAmountCreditRegional);

    let federalCPPCreditElement = document.getElementById('federalCPPCredit');
    let regionalCPPCreditElement = document.getElementById('regionalCPPCredit');
    federalCPPCreditElement.textContent = toDollarFormat(results.credits.cppCreditFederal);
    regionalCPPCreditElement.textContent = toDollarFormat(results.credits.cppCreditRegional);

    let federalEICreditElement = document.getElementById('federalEICredit');
    let regionalEICreditElement = document.getElementById('regionalEICredit');
    federalEICreditElement.textContent = toDollarFormat(results.credits.eiCreditFederal);
    regionalEICreditElement.textContent = toDollarFormat(results.credits.eiCreditRegional);

    let federalEmploymentAmountCreditElement = document.getElementById('federalEmploymentAmountCredit');
    let regionalEmploymentAmountCreditElement = document.getElementById('regionalEmploymentAmountCredit');
    federalEmploymentAmountCreditElement.textContent = toDollarFormat(results.credits.employmentAmountCreditFederal);
    regionalEmploymentAmountCreditElement.textContent = toDollarFormat(results.credits.employmentAmountCreditRegional);

    let netFederalTaxesElement = document.getElementById('netTaxesFederal');
    let netRegionalTaxesElement = document.getElementById('netTaxesRegional');
    netFederalTaxesElement.textContent = toDollarFormat(results.netTaxes.netTaxesFederal);
    netRegionalTaxesElement.textContent = toDollarFormat(results.netTaxes.netTaxesRegional);

    let takehomePayElement = document.getElementById('takehomePay');
    takehomePayElement.textContent = toDollarFormat(results.netPay.total);
    let takehomePayPerPaycheckElement = document.getElementById('takehomePayPerPaycheck');
    takehomePayPerPaycheckElement.textContent = toDollarFormat(results.netPay.perPayCheck);
}

function printDebug(year, region, grossIncome, results)
{
    console.log('----------------- INPUTS --------------------');
    console.log(`Year: ${year}`);
    console.log(`Region: ${region}`);
    console.log(`Income: ${grossIncome}`);
    console.log('\n----------------- TAX --------------------');
    console.log(`Federal Tax: ${results.taxes.federalTax}`);
    console.log(`Regional Tax: ${results.taxes.regionalTax}`);
    console.log(`Total Tax: ${results.taxes.federalTax + results.taxes.regionalTax}`);
    console.log('\n----------------- PREMIUMS --------------------');
    console.log(`CPP/QPP Premiums: ${results.premiums.cppPremiums}`);
    console.log(`EI Premiums: ${results.eiPremiums}`);
    console.log(`Ontario Health Premium: ${results.premiums.ontarioHealthPremium}`);
    console.log('\n----------------- CREDITS --------------------');
    console.log(`Basic Personal Income Credits Federal: ${results.credits.basicPersonalAmountCreditFederal}`);
    console.log(`Basic Personal Income Credits Regional: ${results.credits.basicPersonalAmountCreditRegional}`);
    console.log(`CPP Credits Federal: ${results.credits.cppCreditFederal}`);
    console.log(`CPP Credits Regional: ${results.credits.cppCreditRegional}`);
    console.log(`EI Credits Federal: ${results.credits.eiCreditFederal}`);
    console.log(`EI/QPIP Credits Regional: ${results.credits.eiCreditRegional}`);
    console.log(`Employment Amount Credits Federal: ${results.credits.employmentAmountCreditFederal}`);
    console.log(`Employment Amount Credits Regional: ${results.credits.employmentAmountCreditRegional}`);
    console.log(`Total Credits: ${results.credits.totalCredits}`);
    console.log('\n----------------- NET TAX --------------------');
    console.log(`Regional Surtax: ${results.taxes.regionalSurtax}`);
    console.log(`Net Federal Taxes: ${results.netTaxes.netTaxesFederal}`);
    console.log(`Net Regional Taxes: ${results.netTaxes.netTaxesRegional}`);
    console.log(`Net Taxes: ${results.netTaxes.netTaxes}`);
    console.log(`Total Taxes and Premiums: ${results.netTaxes.netTaxes + results.premiums.totalPremiums}`);
    console.log('\n----------------- NET PAY  --------------------');
    console.log(`Net Pay: ${results.netPay.total}`);
}