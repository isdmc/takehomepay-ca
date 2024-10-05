import TestCase from '../testCase.mjs';

const FederalCreditRate_2024 = 0.15;
const NewfoundlandCreditRate_2024 = 0.087;
const PEICreditRate_2024 = 0.0965;
const NovaScotiaCreditRate_2024 = 0.0879;
const NewBrunswickCreditRate_2024 = 0.094;
const QuebecCreditRate_2024 = 0.14;
const OntarioCreditRate_2024 = 0.0505;
const ManitobaCreditRate_2024 = 0.108;
const SaskatchewanCreditRate_2024 = 0.105;
const AlbertaCreditRate_2024 = 0.1;
const BCCreditRate_2024 = 0.0506;
const NorthwestTerritoriesCreditRate_2024 = 0.059;
const NunavutCreditRate_2024 = 0.04;
const YukonCreditRate_2024 = 0.064;

export const basicPersonalAmountTestCases = {
    2024: {
        'Federal': [
            new TestCase ('Basic Personal Amount - Federal - 2024 - 10K', { taxableIncome: 10*1000, region: 'Federal' }, 15705 * FederalCreditRate_2024),
            new TestCase ('Basic Personal Amount - Federal - 2024 - 50K', { taxableIncome: 50*1000, region: 'Federal' }, 15705 * FederalCreditRate_2024),
            new TestCase ('Basic Personal Amount - Federal - 2024 - 100K', { taxableIncome: 100*1000, region: 'Federal' }, 15705 * FederalCreditRate_2024),
            new TestCase ('Basic Personal Amount - Federal - 2024 - 175K', { taxableIncome: 175*1000, region: 'Federal' }, 15667 * FederalCreditRate_2024),
            new TestCase ('Basic Personal Amount - Federal - 2024 - 185K', { taxableIncome: 185*1000, region: 'Federal' }, 15457 * FederalCreditRate_2024),
            new TestCase ('Basic Personal Amount - Federal - 2024 - 190K', { taxableIncome: 190*1000, region: 'Federal' }, 15351 * FederalCreditRate_2024),
            new TestCase ('Basic Personal Amount - Federal - 2024 - 200K', { taxableIncome: 200*1000, region: 'Federal' }, 15141 * FederalCreditRate_2024),
            new TestCase ('Basic Personal Amount - Federal - 2024 - 250K', { taxableIncome: 250*1000, region: 'Federal' }, 14156 * FederalCreditRate_2024),
            new TestCase ('Basic Personal Amount - Federal - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Federal' }, 14156 * FederalCreditRate_2024)
        ],
        'Newfoundland and Labrador': [
            new TestCase ('Basic Personal Amount - Newfoundland and Labrador - 2024 - 10K', { taxableIncome: 10*1000, region: 'Newfoundland and Labrador' }, 10818 * NewfoundlandCreditRate_2024),
            new TestCase ('Basic Personal Amount - Newfoundland and Labrador - 2024 - 50K', { taxableIncome: 50*1000, region: 'Newfoundland and Labrador' }, 10818 * NewfoundlandCreditRate_2024),
            new TestCase ('Basic Personal Amount - Newfoundland and Labrador - 2024 - 100K', { taxableIncome: 100*1000, region: 'Newfoundland and Labrador' }, 10818 * NewfoundlandCreditRate_2024),
            new TestCase ('Basic Personal Amount - Newfoundland and Labrador - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Newfoundland and Labrador' }, 10818 * NewfoundlandCreditRate_2024),
        ],
        'Prince Edward Island': [
            new TestCase ('Basic Personal Amount - Prince Edward Island - 2024 - 10K', { taxableIncome: 10*1000, region: 'Prince Edward Island' }, 13500 * PEICreditRate_2024),
            new TestCase ('Basic Personal Amount - Prince Edward Island - 2024 - 50K', { taxableIncome: 50*1000, region: 'Prince Edward Island' }, 13500 * PEICreditRate_2024),
            new TestCase ('Basic Personal Amount - Prince Edward Island - 2024 - 100K', { taxableIncome: 100*1000, region: 'Prince Edward Island' }, 13500 * PEICreditRate_2024),
            new TestCase ('Basic Personal Amount - Prince Edward Island - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Prince Edward Island' }, 13500 * PEICreditRate_2024),
        ],
        'Nova Scotia': [
            new TestCase ('Basic Personal Amount - Nova Scotia - 2024 - 10K', { taxableIncome: 10*1000, region: 'Nova Scotia' }, 8481 * NovaScotiaCreditRate_2024),
            new TestCase ('Basic Personal Amount - Nova Scotia - 2024 - 50K', { taxableIncome: 50*1000, region: 'Nova Scotia' }, 8481 * NovaScotiaCreditRate_2024),
            new TestCase ('Basic Personal Amount - Nova Scotia - 2024 - 100K', { taxableIncome: 100*1000, region: 'Nova Scotia' }, 8481 * NovaScotiaCreditRate_2024),
            new TestCase ('Basic Personal Amount - Nova Scotia - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Nova Scotia' }, 8481 * NovaScotiaCreditRate_2024),
        ],
        'New Brunswick': [
            new TestCase ('Basic Personal Amount - New Brunswick - 2024 - 10K', { taxableIncome: 10*1000, region: 'New Brunswick' }, 13044 * NewBrunswickCreditRate_2024),
            new TestCase ('Basic Personal Amount - New Brunswick - 2024 - 50K', { taxableIncome: 50*1000, region: 'New Brunswick' }, 13044 * NewBrunswickCreditRate_2024),
            new TestCase ('Basic Personal Amount - New Brunswick - 2024 - 100K', { taxableIncome: 100*1000, region: 'New Brunswick' }, 13044 * NewBrunswickCreditRate_2024),
            new TestCase ('Basic Personal Amount - New Brunswick - 2024 - 1M', { taxableIncome: 1000*1000, region: 'New Brunswick' }, 13044 * NewBrunswickCreditRate_2024),
        ],
        'Quebec': [
            new TestCase ('Basic Personal Amount - Quebec- 2024 - 10K', { taxableIncome: 10*1000, region: 'Quebec' }, 18056 * QuebecCreditRate_2024),
            new TestCase ('Basic Personal Amount - Quebec - 2024 - 50K', { taxableIncome: 50*1000, region: 'Quebec' }, 18056 * QuebecCreditRate_2024),
            new TestCase ('Basic Personal Amount - Quebec - 2024 - 100K', { taxableIncome: 100*1000, region: 'Quebec' }, 18056 * QuebecCreditRate_2024),
            new TestCase ('Basic Personal Amount - Quebec - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Quebec' }, 18056 * QuebecCreditRate_2024),
        ],
        'Ontario': [
            new TestCase ('Basic Personal Amount - Ontario - 2024 - 10K', { taxableIncome: 10*1000, region: 'Ontario' }, 12399 * OntarioCreditRate_2024),
            new TestCase ('Basic Personal Amount - Ontario - 2024 - 50K', { taxableIncome: 50*1000, region: 'Ontario' }, 12399 * OntarioCreditRate_2024),
            new TestCase ('Basic Personal Amount - Ontario - 2024 - 100K', { taxableIncome: 100*1000, region: 'Ontario' }, 12399 * OntarioCreditRate_2024),
            new TestCase ('Basic Personal Amount - Ontario - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Ontario' }, 12399 * OntarioCreditRate_2024),
        ],
        'Manitoba': [
            new TestCase ('Basic Personal Amount - Manitoba - 2024 - 10K', { taxableIncome: 10*1000, region: 'Manitoba' }, 15780 * ManitobaCreditRate_2024),
            new TestCase ('Basic Personal Amount - Manitoba - 2024 - 50K', { taxableIncome: 50*1000, region: 'Manitoba' }, 15780 * ManitobaCreditRate_2024),
            new TestCase ('Basic Personal Amount - Manitoba - 2024 - 100K', { taxableIncome: 100*1000, region: 'Manitoba' }, 15780 * ManitobaCreditRate_2024),
            new TestCase ('Basic Personal Amount - Manitoba - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Manitoba' }, 15780 * ManitobaCreditRate_2024),           
        ],
        'Saskatchewan': [
            new TestCase ('Basic Personal Amount - Saskatchewan - 2024 - 10K', { taxableIncome: 10*1000, region: 'Saskatchewan' }, 18491 * SaskatchewanCreditRate_2024),
            new TestCase ('Basic Personal Amount - Saskatchewan - 2024 - 50K', { taxableIncome: 50*1000, region: 'Saskatchewan' }, 18491 * SaskatchewanCreditRate_2024),
            new TestCase ('Basic Personal Amount - Saskatchewan - 2024 - 100K', { taxableIncome: 100*1000, region: 'Saskatchewan' }, 18491 * SaskatchewanCreditRate_2024),
            new TestCase ('Basic Personal Amount - Saskatchewan - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Saskatchewan' }, 18491 * SaskatchewanCreditRate_2024),           
        ],
        'Alberta': [
            new TestCase ('Basic Personal Amount - Alberta - 2024 - 10K', { taxableIncome: 10*1000, region: 'Alberta' }, 21885 * AlbertaCreditRate_2024),
            new TestCase ('Basic Personal Amount - Alberta - 2024 - 50K', { taxableIncome: 50*1000, region: 'Alberta' }, 21885 * AlbertaCreditRate_2024),
            new TestCase ('Basic Personal Amount - Alberta - 2024 - 100K', { taxableIncome: 100*1000, region: 'Alberta' }, 21885 * AlbertaCreditRate_2024),
            new TestCase ('Basic Personal Amount - Alberta - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Alberta' }, 21885 * AlbertaCreditRate_2024),           
        ],
        'British Columbia': [
            new TestCase ('Basic Personal Amount - British Columbia - 2024 - 10K', { taxableIncome: 10*1000, region: 'British Columbia' }, 12580 * BCCreditRate_2024),
            new TestCase ('Basic Personal Amount - British Columbia - 2024 - 50K', { taxableIncome: 50*1000, region: 'British Columbia' }, 12580 * BCCreditRate_2024),
            new TestCase ('Basic Personal Amount - British Columbia - 2024 - 100K', { taxableIncome: 100*1000, region: 'British Columbia' }, 12580 * BCCreditRate_2024),
            new TestCase ('Basic Personal Amount - British Columbia - 2024 - 1M', { taxableIncome: 1000*1000, region: 'British Columbia' }, 12580 * BCCreditRate_2024),           
        ],
        'Northwest Territories': [
            new TestCase ('Basic Personal Amount - Northwest Territories - 2024 - 10K', { taxableIncome: 10*1000, region: 'Northwest Territories' }, 17373 * NorthwestTerritoriesCreditRate_2024),
            new TestCase ('Basic Personal Amount - Northwest Territories - 2024 - 50K', { taxableIncome: 50*1000, region: 'Northwest Territories' }, 17373 * NorthwestTerritoriesCreditRate_2024),
            new TestCase ('Basic Personal Amount - Northwest Territories - 2024 - 100K', { taxableIncome: 100*1000, region: 'Northwest Territories' }, 17373 * NorthwestTerritoriesCreditRate_2024),
            new TestCase ('Basic Personal Amount - Northwest Territories - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Northwest Territories' }, 17373 * NorthwestTerritoriesCreditRate_2024),           
        ],
        'Nunavut': [
            new TestCase ('Basic Personal Amount - Nunavut - 2024 - 10K', { taxableIncome: 10*1000, region: 'Nunavut' }, 18767 * NunavutCreditRate_2024),
            new TestCase ('Basic Personal Amount - Nunavut - 2024 - 50K', { taxableIncome: 50*1000, region: 'Nunavut' }, 18767 * NunavutCreditRate_2024),
            new TestCase ('Basic Personal Amount - Nunavut - 2024 - 100K', { taxableIncome: 100*1000, region: 'Nunavut' }, 18767 * NunavutCreditRate_2024),
            new TestCase ('Basic Personal Amount - Nunavut - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Nunavut' }, 18767 * NunavutCreditRate_2024),           
        ],
        'Yukon': [
            new TestCase ('Basic Personal Amount - Yukon - 2024 - 10K', { taxableIncome: 10*1000, region: 'Yukon' }, 15705 * YukonCreditRate_2024),
            new TestCase ('Basic Personal Amount - Yukon - 2024 - 50K', { taxableIncome: 50*1000, region: 'Yukon' }, 15705 * YukonCreditRate_2024),
            new TestCase ('Basic Personal Amount - Yukon - 2024 - 100K', { taxableIncome: 100*1000, region: 'Yukon' }, 15705 * YukonCreditRate_2024),
            new TestCase ('Basic Personal Amount - Yukon - 2024 - 175K', { taxableIncome: 175*1000, region: 'Yukon' }, 15667 * YukonCreditRate_2024),
            new TestCase ('Basic Personal Amount - Yukon - 2024 - 185K', { taxableIncome: 185*1000, region: 'Yukon' }, 15457 * YukonCreditRate_2024),
            new TestCase ('Basic Personal Amount - Yukon - 2024 - 190K', { taxableIncome: 190*1000, region: 'Yukon' }, 15351 * YukonCreditRate_2024),
            new TestCase ('Basic Personal Amount - Yukon - 2024 - 200K', { taxableIncome: 200*1000, region: 'Yukon' }, 15141 * YukonCreditRate_2024),
            new TestCase ('Basic Personal Amount - Yukon - 2024 - 250K', { taxableIncome: 250*1000, region: 'Yukon' }, 14156 * YukonCreditRate_2024),
            new TestCase ('Basic Personal Amount - Yukon - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Yukon' }, 14156 * YukonCreditRate_2024)
        ]
    }
}