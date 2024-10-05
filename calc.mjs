import taxData from './data/taxData.mjs';
import CalcFactory from './calcs/calcFactory.mjs';
import round from './util/round.mjs';

// Ref for deductions vs credits and other things: 
// https://www.canada.ca/en/revenue-agency/news/2023/05/the-canada-pension-plan-enhancement--businesses-individuals-and-self-employed-what-it-means-for-you.html

// Ref for detailed calculations:
// https://www.taxtips.ca/calculators/canadian-tax/canadian-tax-calculator.htm
export function calcMain() {
    var grossIncome = document.getElementById('grossPay').value;
    var year = document.getElementById('taxYear').value;
    var region = document.getElementById('region').value;
    // let year = 2024;
    // let region = 'Newfoundland and Labrador';
    // let grossIncome = 93 * 1000;
    let debug = true;

    // Intialize Calcs
    let factory = new CalcFactory(taxData);
    let taxCalc = factory.get(year, null, 'Tax');
    let basicPersonalAmountCalc = factory.get(year, region, 'BasicPersonalAmount');
    let cppCalc = factory.get(year, region, 'CPP');
    let eiCalc = factory.get(year, region, 'EI');
    let employmentAmountCalc = factory.get(year, region, 'EmploymentAmount');

    // Calc Deductions
    let cppDeduction = cppCalc.calculateCPPTaxDeduction(grossIncome);

    // Calc Taxes
    let taxableIncome = grossIncome - cppDeduction;
    let federalTax = taxCalc.calculateTaxes(taxableIncome, 'Federal');
    let regionalTax = taxCalc.calculateTaxes(taxableIncome, region);

    // Ontario Health Premium
    let ontarioHealthPremium = 0;
    if (region === 'Ontario') {
        let ontarioHealthPremiumAmountCalc = factory.get(year, region, 'OntarioHealthPremium');
        ontarioHealthPremium = ontarioHealthPremiumAmountCalc.calculateOntarioHealthPremium(taxableIncome);
    }

    // Calc CPP Premiums
    let cppPremiums = cppCalc.calculateCPPPremiums(taxableIncome) + cppCalc.calculateCPPEnhancedPremiums(grossIncome);

    // Calc EI Premiums
    let eiPremiums = eiCalc.calculateEIPremiums(grossIncome);

    let totalPremiums = cppPremiums + eiPremiums;

    // Calc Credits
    let basicPersonalAmountCreditFederal = basicPersonalAmountCalc.calculateBasicPersonalAmountTaxCredit(grossIncome, 'Federal');
    let basicPersonalAmountCreditRegional = basicPersonalAmountCalc.calculateBasicPersonalAmountTaxCredit(grossIncome, region);
    let cppCreditFederal = cppCalc.calculateCPPTaxCredit(grossIncome, 'Federal');
    let cppCreditRegional = cppCalc.calculateCPPTaxCredit(grossIncome, region);
    let eiCreditFederal = eiCalc.calculateEITaxCredit(grossIncome, 'Federal');
    let eiCreditRegional;
    if (region === 'Quebec') {
        eiCreditRegional = eiCalc.calculateQPIPTaxCredit(grossIncome);
    } 
    else {
        eiCreditRegional = eiCalc.calculateEITaxCredit(grossIncome, region);
    }
    
    let employmentAmountCreditFederal = employmentAmountCalc.calculateEmploymentAmountTaxCredit(grossIncome, 'Federal');
    let employmentAmountCreditRegional = employmentAmountCalc.calculateEmploymentAmountTaxCredit(grossIncome, region);
    
    let federalCredits = (basicPersonalAmountCreditFederal + cppCreditFederal + eiCreditFederal + employmentAmountCreditFederal);
    let regionalCredits = (basicPersonalAmountCreditRegional + cppCreditRegional + eiCreditRegional + employmentAmountCreditRegional);
    let totalCredits = round(federalCredits + regionalCredits, 2);

    // Calc Net Taxes
    let netTaxesFederal = federalTax - federalCredits;
    let regionalSurtax = taxCalc.calculateRegionalSurtax(regionalTax - regionalCredits, region);
    let netTaxesRegional = round((regionalTax - regionalCredits) + regionalSurtax + ontarioHealthPremium, 2);
    let netTaxes = round(netTaxesFederal + netTaxesRegional, 2);

    let netPay = grossIncome - (netTaxes + totalPremiums);

    if (debug) {
        console.log('----------------- INPUTS --------------------');
        console.log(`Year: ${year}`);
        console.log(`Region: ${region}`);
        console.log(`Income: ${grossIncome}`);
        console.log('\n----------------- GROSS TAX --------------------');
        console.log(`Federal Tax: ${federalTax}`);
        console.log(`Regional Tax: ${regionalTax}`);
        console.log(`Total Tax: ${federalTax + regionalTax}`);
        console.log(`Ontario Health Premium: ${ontarioHealthPremium}`);
        console.log('\n----------------- CPP AND EI PREMIUMS --------------------');
        console.log(`CPP Premiums: ${cppPremiums}`);
        console.log(`EI Premiums: ${eiPremiums}`);
        console.log('\n----------------- CREDITS --------------------');
        console.log(`Basic Personal Income Credits Federal: ${basicPersonalAmountCreditFederal}`);
        console.log(`Basic Personal Income Credits Regional: ${basicPersonalAmountCreditRegional}`);
        console.log(`CPP Credits Federal: ${cppCreditFederal}`);
        console.log(`CPP Credits Regional: ${cppCreditRegional}`);
        console.log(`EI Credits Federal: ${eiCreditFederal}`);
        console.log(`EI Credits Regional: ${eiCreditRegional}`);
        console.log(`Employment Amount Credits Federal: ${employmentAmountCreditFederal}`);
        console.log(`Employment Amount Credits Regional: ${employmentAmountCreditRegional}`);
        console.log(`Total Credits: ${totalCredits}`);
        console.log('\n----------------- NET TAX --------------------');
        console.log(`Regional Surtax: ${regionalSurtax}`);
        console.log(`Net Federal Taxes: ${netTaxesFederal}`);
        console.log(`Net Regional Taxes: ${netTaxesRegional}`);
        console.log(`Net Taxes: ${netTaxes}`);
        console.log(`Total Taxes and Premiums: ${netTaxes + totalPremiums}`);
        console.log('\n----------------- NET PAY  --------------------');
        console.log(`Net Pay: ${netPay}`);
    }

    // var netAnnualPay = document.getElementById('netAnnualPay');
    // netAnnualPay.value = netPay;
}