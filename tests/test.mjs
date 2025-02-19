import taxData from '../data/taxData.mjs';
import UnitTest from './unitTest.mjs';
import UnitTestRunner from './unitTestRunner.mjs';
import CalcFactory from '../calcs/calcFactory.mjs';
import { taxTestCases, surtaxTestCases } from './testCases/taxTestCases.mjs';
import { eiTestCases, qpipTestCases } from './testCases/eiTestCases.mjs';
import { cppDeductionTestCases, cppCreditTestCases } from './testCases/cppTestCases.mjs';
import { basicPersonalAmountTestCases } from './testCases/basicPersonalAmountTestCases.mjs';
import { ontarioHealthPremiumTestCases } from './testCases/ontarioHealthPremiumTestCases.mjs';

var testRunner = new UnitTestRunner();
let calcFactory = new CalcFactory(taxData);

var years = [2024];
var regions = ['Federal', 'Newfoundland and Labrador', 'Prince Edward Island', 'Nova Scotia', 'New Brunswick', 'Quebec', 'Ontario', 'Manitoba', 'Saskatchewan', 'Alberta', 'British Columbia', 'Northwest Territories', 'Nunavut', 'Yukon'];

var testsToRun = [];

for (let year of years) {
    for (let region of regions) {
        let basicPersonalAmountCalc = calcFactory.get(year, region, 'BasicPersonalAmount');
        let basicPersonalAmountUnitTests = basicPersonalAmountTestCases[year][region];

        if (basicPersonalAmountUnitTests?.length > 0) {
            for (let test of basicPersonalAmountUnitTests) {
                testsToRun.push(new UnitTest(test, (taxableIncome, region) => basicPersonalAmountCalc.calculateBasicPersonalAmountTaxCredit(taxableIncome, region)));
            }
        }

        let cppCalc = calcFactory.get(year, region, 'CPP');
        let eiCalc = calcFactory.get(year, region, 'EI');        

        let cppDeductionUnitTests = [];
        let cppCreditUnitTests = [];
        let eiUnitTests = [];
        let qpipUnitTests = [];
        
        if (region === 'Federal') {
            cppDeductionUnitTests = cppDeductionTestCases[year][region];
        }

        if (region === 'Quebec') {
            qpipUnitTests = qpipTestCases[year][region];
        }

        eiUnitTests = eiTestCases[year][region];        
        cppCreditUnitTests = cppCreditTestCases[year][region];

        if (cppCalc && cppDeductionUnitTests?.length > 0) {
            for (let test of cppDeductionUnitTests) {
                testsToRun.push(new UnitTest(test, (grossIncome) => cppCalc.calculateCPPTaxDeduction(grossIncome)))
            }
        }

        if (cppCalc && cppCreditUnitTests?.length > 0) {
            for (let test of cppCreditUnitTests) {
                testsToRun.push(new UnitTest(test, (grossIncome, region) => cppCalc.calculateCPPTaxCredit(grossIncome, region)))
            }
        }

        if (eiCalc && eiUnitTests?.length > 0) {
            for (let test of eiUnitTests) {
                testsToRun.push(new UnitTest(test, (grossIncome, region) => eiCalc.calculateEITaxCredit(grossIncome, region)));
            }
        }

        if (eiCalc && qpipUnitTests?.length > 0) {
            for (let test of qpipUnitTests) {
                testsToRun.push(new UnitTest(test, (grossIncome) => eiCalc.calculateQPIPTaxCredit(grossIncome)));
            }
        }

        let taxCalc = calcFactory.get(year, region, 'Tax');
        let taxUnitTests = taxTestCases[year][region];
        let surtaxUnitTests = surtaxTestCases[year][region];
        
        if (taxCalc && taxUnitTests) {
            for (let test of taxUnitTests) {
                testsToRun.push(new UnitTest(test, (taxableIncome, region) => taxCalc.calculateTaxes(taxableIncome, region)));
            }
        }

        if (taxCalc && surtaxUnitTests) {
            for (let test of surtaxUnitTests) {
                testsToRun.push(new UnitTest(test, (netRegionalTaxes, region) => taxCalc.calculateRegionalSurtax(netRegionalTaxes, region)));
            }
        }

        let ontarioHealthPremiumCalc = calcFactory.get(year, region, 'OntarioHealthPremium');
        let ontarioHealthPremiumUnitTests = ontarioHealthPremiumTestCases[year][region];

        if (ontarioHealthPremiumCalc && ontarioHealthPremiumUnitTests) {
            for (let test of ontarioHealthPremiumUnitTests) {
                testsToRun.push(new UnitTest(test, (taxableIncome) => ontarioHealthPremiumCalc.calculateOntarioHealthPremium(taxableIncome)));
            }
        }
    }
}

var results = testRunner.runUnitTests(testsToRun);
testRunner.reportResults(results);