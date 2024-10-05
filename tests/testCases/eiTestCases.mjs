import TestCase from '../testCase.mjs';

const FederalCreditRate_2024 = 0.15;
const NewfoundlandCreditRate_2024 = 0.087;
const PEICreditRate_2024 = 0.0965;
const NovaScotiaCreditRate_2024 = 0.0879;
const NewBrunswickCreditRate_2024 = 0.094;
const OntarioCreditRate_2024 = 0.0505;
const ManitobaCreditRate_2024 = 0.108;
const SaskatchewanCreditRate_2024 = 0.105;
const AlbertaCreditRate_2024 = 0.1;
const BCCreditRate_2024 = 0.0506;
const NorthwestTerritoriesCreditRate_2024 = 0.059;
const NunavutCreditRate_2024 = 0.04;
const YukonCreditRate_2024 = 0.064;


export const eiTestCases = {
    2024: {
        'Federal': [
            new TestCase ('EI Credit - Federal - 2024 - 10K', { grossIncome: 10*1000, region: 'Federal' }, 166 * FederalCreditRate_2024),
            new TestCase ('EI Credit - Federal - 2024 - 25K', { grossIncome: 25*1000, region: 'Federal' }, 415 * FederalCreditRate_2024),
            new TestCase ('EI Credit - Federal - 2024 - 50K', { grossIncome: 50*1000, region: 'Federal' }, 830 * FederalCreditRate_2024),
            new TestCase ('EI Credit - Federal - 2024 - 75K', { grossIncome: 75*1000, region: 'Federal' }, 1049 * FederalCreditRate_2024),
            new TestCase ('EI Credit - Federal - 2024 - 100K', { grossIncome: 100*1000, region: 'Federal' }, 1049 * FederalCreditRate_2024),
            new TestCase ('EI Credit - Federal - 2024 - 250K', { grossIncome: 250*1000, region: 'Federal' }, 1049 * FederalCreditRate_2024),
            new TestCase ('EI Credit - Federal - 2024 - 1M', { grossIncome: 1000*1000, region: 'Federal' }, 1049 * FederalCreditRate_2024)
        ],
        'Newfoundland and Labrador': [
            new TestCase ('EI Credit - Newfoundland and Labrador - 2024 - 10K', { taxableIncome: 10*1000, region: 'Newfoundland and Labrador' }, 166 * NewfoundlandCreditRate_2024),
            new TestCase ('EI Credit - Newfoundland and Labrador - 2024 - 50K', { taxableIncome: 50*1000, region: 'Newfoundland and Labrador' }, 830 * NewfoundlandCreditRate_2024),
            new TestCase ('EI Credit - Newfoundland and Labrador - 2024 - 100K', { taxableIncome: 100*1000, region: 'Newfoundland and Labrador' }, 1049 * NewfoundlandCreditRate_2024),
            new TestCase ('EI Credit - Newfoundland and Labrador - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Newfoundland and Labrador' }, 1049 * NewfoundlandCreditRate_2024),
        ],
        'Prince Edward Island': [
            new TestCase ('EI Credit - Prince Edward Island - 2024 - 10K', { taxableIncome: 10*1000, region: 'Prince Edward Island' }, 166 * PEICreditRate_2024),
            new TestCase ('EI Credit - Prince Edward Island - 2024 - 50K', { taxableIncome: 50*1000, region: 'Prince Edward Island' }, 830 * PEICreditRate_2024),
            new TestCase ('EI Credit - Prince Edward Island - 2024 - 100K', { taxableIncome: 100*1000, region: 'Prince Edward Island' }, 1049 * PEICreditRate_2024),
            new TestCase ('EI Credit - Prince Edward Island - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Prince Edward Island' }, 1049 * PEICreditRate_2024),
        ],
        'Nova Scotia': [
            new TestCase ('EI Credit - Nova Scotia - 2024 - 10K', { taxableIncome: 10*1000, region: 'Nova Scotia' }, 166 * NovaScotiaCreditRate_2024),
            new TestCase ('EI Credit - Nova Scotia - 2024 - 50K', { taxableIncome: 50*1000, region: 'Nova Scotia' }, 830 * NovaScotiaCreditRate_2024),
            new TestCase ('EI Credit - Nova Scotia - 2024 - 100K', { taxableIncome: 100*1000, region: 'Nova Scotia' }, 1049 * NovaScotiaCreditRate_2024),
            new TestCase ('EI Credit - Nova Scotia - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Nova Scotia' }, 1049 * NovaScotiaCreditRate_2024),
        ],
        'New Brunswick': [
            new TestCase ('EI Credit - New Brunswick - 2024 - 10K', { taxableIncome: 10*1000, region: 'New Brunswick' }, 166 * NewBrunswickCreditRate_2024),
            new TestCase ('EI Credit - New Brunswick - 2024 - 50K', { taxableIncome: 50*1000, region: 'New Brunswick' }, 830 * NewBrunswickCreditRate_2024),
            new TestCase ('EI Credit - New Brunswick - 2024 - 100K', { taxableIncome: 100*1000, region: 'New Brunswick' }, 1049 * NewBrunswickCreditRate_2024),
            new TestCase ('EI Credit - New Brunswick - 2024 - 1M', { taxableIncome: 1000*1000, region: 'New Brunswick' }, 1049 * NewBrunswickCreditRate_2024),
        ],
        'Ontario': [
            new TestCase ('EI Credit - Ontario - 2024 - 10K', { taxableIncome: 10*1000, region: 'Ontario' }, 166 * OntarioCreditRate_2024),
            new TestCase ('EI Credit - Ontario - 2024 - 50K', { taxableIncome: 50*1000, region: 'Ontario' }, 830 * OntarioCreditRate_2024),
            new TestCase ('EI Credit - Ontario - 2024 - 100K', { taxableIncome: 100*1000, region: 'Ontario' }, 1049 * OntarioCreditRate_2024),
            new TestCase ('EI Credit - Ontario - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Ontario' }, 1049 * OntarioCreditRate_2024)
        ],
        'Manitoba': [
            new TestCase ('EI Credit - Manitoba - 2024 - 10K', { taxableIncome: 10*1000, region: 'Manitoba' }, 166 * ManitobaCreditRate_2024),
            new TestCase ('EI Credit - Manitoba - 2024 - 50K', { taxableIncome: 50*1000, region: 'Manitoba' }, 830 * ManitobaCreditRate_2024),
            new TestCase ('EI Credit - Manitoba - 2024 - 100K', { taxableIncome: 100*1000, region: 'Manitoba' }, 1049 * ManitobaCreditRate_2024),
            new TestCase ('EI Credit - Manitoba - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Manitoba' }, 1049 * ManitobaCreditRate_2024)         
        ],
        'Saskatchewan': [
            new TestCase ('EI Credit - Saskatchewan - 2024 - 10K', { taxableIncome: 10*1000, region: 'Saskatchewan' }, 166 * SaskatchewanCreditRate_2024),
            new TestCase ('EI Credit - Saskatchewan - 2024 - 50K', { taxableIncome: 50*1000, region: 'Saskatchewan' }, 830 * SaskatchewanCreditRate_2024),
            new TestCase ('EI Credit - Saskatchewan - 2024 - 100K', { taxableIncome: 100*1000, region: 'Saskatchewan' }, 1049 * SaskatchewanCreditRate_2024),
            new TestCase ('EI Credit - Saskatchewan - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Saskatchewan' }, 1049 * SaskatchewanCreditRate_2024)           
        ],
        'Alberta': [
            new TestCase ('EI Credit - Alberta - 2024 - 10K', { taxableIncome: 10*1000, region: 'Alberta' }, 166 * AlbertaCreditRate_2024),
            new TestCase ('EI Credit - Alberta - 2024 - 50K', { taxableIncome: 50*1000, region: 'Alberta' }, 830 * AlbertaCreditRate_2024),
            new TestCase ('EI Credit - Alberta - 2024 - 100K', { taxableIncome: 100*1000, region: 'Alberta' }, 1049 * AlbertaCreditRate_2024),
            new TestCase ('EI Credit - Alberta - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Alberta' }, 1049 * AlbertaCreditRate_2024)        
        ],
        'British Columbia': [
            new TestCase ('EI Credit - British Columbia - 2024 - 10K', { taxableIncome: 10*1000, region: 'British Columbia' }, 166 * BCCreditRate_2024),
            new TestCase ('EI Credit - British Columbia - 2024 - 50K', { taxableIncome: 50*1000, region: 'British Columbia' }, 830 * BCCreditRate_2024),
            new TestCase ('EI Credit - British Columbia - 2024 - 100K', { taxableIncome: 100*1000, region: 'British Columbia' }, 1049 * BCCreditRate_2024),
            new TestCase ('EI Credit - British Columbia - 2024 - 1M', { taxableIncome: 1000*1000, region: 'British Columbia' }, 1049 * BCCreditRate_2024)          
        ],
        'Northwest Territories': [
            new TestCase ('EI Credit - Northwest Territories - 2024 - 10K', { taxableIncome: 10*1000, region: 'Northwest Territories' }, 166 * NorthwestTerritoriesCreditRate_2024),
            new TestCase ('EI Credit - Northwest Territories - 2024 - 50K', { taxableIncome: 50*1000, region: 'Northwest Territories' }, 830 * NorthwestTerritoriesCreditRate_2024),
            new TestCase ('EI Credit - Northwest Territories - 2024 - 100K', { taxableIncome: 100*1000, region: 'Northwest Territories' }, 1049 * NorthwestTerritoriesCreditRate_2024),
            new TestCase ('EI Credit - Northwest Territories - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Northwest Territories' }, 1049 * NorthwestTerritoriesCreditRate_2024)           
        ],
        'Nunavut': [
            new TestCase ('EI Credit - Nunavut - 2024 - 10K', { taxableIncome: 10*1000, region: 'Nunavut' }, 166 * NunavutCreditRate_2024),
            new TestCase ('EI Credit - Nunavut - 2024 - 50K', { taxableIncome: 50*1000, region: 'Nunavut' }, 830 * NunavutCreditRate_2024),
            new TestCase ('EI Credit - Nunavut - 2024 - 100K', { taxableIncome: 100*1000, region: 'Nunavut' }, 1049 * NunavutCreditRate_2024),
            new TestCase ('EI Credit - Nunavut - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Nunavut' }, 1049 * NunavutCreditRate_2024)        
        ],
        'Yukon': [
            new TestCase ('EI Credit - Yukon - 2024 - 10K', { taxableIncome: 10*1000, region: 'Yukon' }, 166 * YukonCreditRate_2024),
            new TestCase ('EI Credit - Yukon - 2024 - 50K', { taxableIncome: 50*1000, region: 'Yukon' }, 830 * YukonCreditRate_2024),
            new TestCase ('EI Credit - Yukon - 2024 - 100K', { taxableIncome: 100*1000, region: 'Yukon' }, 1049 * YukonCreditRate_2024),
            new TestCase ('EI Credit - Yukon - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Yukon' }, 1049 * YukonCreditRate_2024)
    ]
    }
}

export const qpipTestCases = {
    2024: {
        'Quebec': [
            new TestCase ('QPIP Credit - Quebec - 2024 - 10K', { grossIncome: 10*1000 }, 49  * FederalCreditRate_2024),
            new TestCase ('QPIP Credit - Quebec - 2024 - 25K', { grossIncome: 25*1000 }, 124 * FederalCreditRate_2024),
            new TestCase ('QPIP Credit - Quebec - 2024 - 50K', { grossIncome: 50*1000 }, 247 * FederalCreditRate_2024),
            new TestCase ('QPIP Credit - Quebec - 2024 - 75K', { grossIncome: 75*1000 }, 371 * FederalCreditRate_2024),
            new TestCase ('QPIP Credit - Quebec - 2024 - 100K', { grossIncome: 100*1000 }, 464 * FederalCreditRate_2024),
            new TestCase ('QPIP Credit - Quebec - 2024 - 250K', { grossIncome: 250*1000 }, 464 * FederalCreditRate_2024),
            new TestCase ('QPIP Credit - Quebec - 2024 - 1M', { grossIncome: 1000*1000 }, 464 * FederalCreditRate_2024)
        ]
    }
}