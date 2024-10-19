import taxData from './data/taxData.mjs';
import CalcFactory from './calcs/calcFactory.mjs';
import toDollarFormat from './util/toDollarFormat.mjs';

// Ref for deductions vs credits and other things: 
// https://www.canada.ca/en/revenue-agency/news/2023/05/the-canada-pension-plan-enhancement--businesses-individuals-and-self-employed-what-it-means-for-you.html

// Ref for detailed calculations:
// https://www.taxtips.ca/calculators/canadian-tax/canadian-tax-calculator.htm
export function calcMain() {
    let grossIncome = document.getElementById('grossPay').value;
    let year = document.getElementById('taxYear').value;
    let region = document.getElementById('region').value;

    let debug = true;
    let calcs = getCalculators(taxData, year, region);

    let results = {
        deductions: {},
        taxes: {},
        premiums: {},
        credits: {},
        netTaxes: {},
        netPay: 0
    };

    calculateDeductions(results, grossIncome, calcs);
    let taxableIncome = grossIncome - results.deductions.cppDeduction;

    calculateTaxes(results, taxableIncome, region, calcs);
    calculatePremiums(results, grossIncome, taxableIncome, region, calcs)
    calculateCredits(results, region, grossIncome, calcs);
    calculateNetTaxes(results, region, calcs);
    calculateNetPay(results, grossIncome);

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

function calculateNetTaxes(results, region, calcs)
{
    results.netTaxes.netTaxesFederal = results.taxes.federalTax - results.credits.federalCredits;
    let regionalSurtax = calcs.taxCalc.calculateRegionalSurtax(results.taxes.regionalTax - results.credits.regionalCredits, region);
    results.netTaxes.netTaxesRegional = (results.taxes.regionalTax - results.credits.regionalCredits) + regionalSurtax + results.premiums.ontarioHealthPremium;
    results.netTaxes.netTaxes = results.netTaxes.netTaxesFederal + results.netTaxes.netTaxesRegional;
}

function calculateNetPay(results, grossIncome)
{
    results.netPay = grossIncome - (results.netTaxes.netTaxes + results.premiums.totalPremiums);   
}

function displayResults(results)
{
    let federalTaxesElement = document.getElementById('federalTaxes');
    let regionalTaxesElement = document.getElementById('regionalTaxes');
    let totalTaxesElement = document.getElementById('totalTaxes');
    federalTaxesElement.textContent = toDollarFormat(results.netTaxes.netTaxesFederal);
    regionalTaxesElement.textContent = toDollarFormat(results.netTaxes.netTaxesRegional);
    totalTaxesElement.textContent = toDollarFormat(results.netTaxes.netTaxes);

    let cppDeductionElement = document.getElementById('CPPDeduction');
    cppDeductionElement.textContent = toDollarFormat(results.deductions.cppDeduction);

    let federalBasicPersonalAmountElement = document.getElementById('federalBasicPersonalAmountCredit');
    let regionalBasicPersonalAmountElement = document.getElementById('regionalBasicPersonalAmountCredit');
    let totalBasicPersonalAmountElement = document.getElementById('totalBasicPersonalAmountCredit');
    federalBasicPersonalAmountElement.textContent = toDollarFormat(results.credits.basicPersonalAmountCreditFederal);
    regionalBasicPersonalAmountElement.textContent = toDollarFormat(results.credits.basicPersonalAmountCreditRegional);
    totalBasicPersonalAmountElement.textContent = toDollarFormat(results.credits.basicPersonalAmountCreditFederal + results.credits.basicPersonalAmountCreditRegional);

    let federalCPPCreditElement = document.getElementById('federalCPPCredit');
    let regionalCPPCreditElement = document.getElementById('regionalCPPCredit');
    let totalCPPCreditElement = document.getElementById('totalCPPCredit');
    federalCPPCreditElement.textContent = toDollarFormat(results.credits.cppCreditFederal);
    regionalCPPCreditElement.textContent = toDollarFormat(results.credits.cppCreditRegional);
    totalCPPCreditElement.textContent = toDollarFormat(results.credits.cppCreditFederal + results.credits.cppCreditRegional);

    let federalEICreditElement = document.getElementById('federalEICredit');
    let regionalEICreditElement = document.getElementById('regionalEICredit');
    let totalEICreditElement = document.getElementById('totalEICredit');
    federalEICreditElement.textContent = toDollarFormat(results.credits.eiCreditFederal);
    regionalEICreditElement.textContent = toDollarFormat(results.credits.eiCreditRegional);
    totalEICreditElement.textContent = toDollarFormat(results.credits.eiCreditFederal + results.credits.eiCreditRegional);

    let federalEmploymentAmountCreditElement = document.getElementById('federalEmploymentAmountCredit');
    let regionalEmploymentAmountCreditElement = document.getElementById('regionalEmploymentAmountCredit');
    let totalEmploymentAmountCreditElement = document.getElementById('totalEmploymentAmountCredit');
    federalEmploymentAmountCreditElement.textContent = toDollarFormat(results.credits.employmentAmountCreditFederal);
    regionalEmploymentAmountCreditElement.textContent = toDollarFormat(results.credits.employmentAmountCreditRegional);
    totalEmploymentAmountCreditElement.textContent = toDollarFormat(results.credits.employmentAmountCreditFederal + results.credits.employmentAmountCreditRegional);

    let takehomepayElement = document.getElementById('takehomepay');
    takehomepayElement.textContent = toDollarFormat(results.netPay);
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
    console.log(`Net Pay: ${results.netPay}`);
}