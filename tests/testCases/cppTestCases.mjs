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

export const cppDeductionTestCases = {
    2024: {
        'Federal': [
            new TestCase ('CPP Deduction - Federal - 2024 - 10K', { grossIncome: 10*1000 }, 65),
            new TestCase ('CPP Deduction - Federal - 2024 - 25K', { grossIncome: 25*1000 }, 215),
            new TestCase ('CPP Deduction - Federal - 2024 - 50K', { grossIncome: 50*1000 }, 465),
            new TestCase ('CPP Deduction - Federal - 2024 - 65K', { grossIncome: 65*1000 }, 615),
            new TestCase ('CPP Deduction - Federal - 2024 - 100K', { grossIncome: 100*1000 }, 838),
            new TestCase ('CPP Deduction - Federal - 2024 - 250K', { grossIncome: 250*1000 }, 838),
            new TestCase ('CPP Deduction - Federal - 2024 - 1M', { grossIncome: 1000*1000 }, 838)
        ],
        'Quebec': [
            new TestCase ('QPP Deduction - Quebec - 2024 - 10K', { grossIncome: 10*1000 }, 65),
            new TestCase ('QPP Deduction - Quebec - 2024 - 25K', { grossIncome: 25*1000 }, 215),
            new TestCase ('QPP Deduction - Quebec - 2024 - 50K', { grossIncome: 50*1000 }, 465),
            new TestCase ('QPP Deduction - Quebec - 2024 - 65K', { grossIncome: 65*1000 }, 615),
            new TestCase ('QPP Deduction - Quebec - 2024 - 100K', { grossIncome: 100*1000 }, 838),
            new TestCase ('QPP Deduction - Quebec - 2024 - 250K', { grossIncome: 250*1000 }, 838),
            new TestCase ('QPP Deduction - Quebec - 2024 - 1M', { grossIncome: 1000*1000 }, 838)
        ]
    },
    2023: {
        'Federal': [],
    }
}

export const cppCreditTestCases = {
    2024: {
        'Federal': [
            new TestCase ('CPP Credit - Federal - 2024 - 10K', { grossIncome: (10*1000), region: 'Federal' }, 322 * FederalCreditRate_2024),
            new TestCase ('CPP Credit - Federal - 2024 - 25K', { grossIncome: (25*1000), region: 'Federal' }, 1064 * FederalCreditRate_2024),
            new TestCase ('CPP Credit - Federal - 2024 - 50K', { grossIncome: (50*1000), region: 'Federal' }, 2302 * FederalCreditRate_2024),
            new TestCase ('CPP Credit - Federal - 2024 - 65K', { grossIncome: (65*1000), region: 'Federal' }, 3044 * FederalCreditRate_2024),
            new TestCase ('CPP Credit - Federal - 2024 - 75K', { grossIncome: (75*1000), region: 'Federal' }, 3218 * FederalCreditRate_2024),
            new TestCase ('CPP Credit - Federal - 2024 - 100K', { grossIncome: (100*1000), region: 'Federal' }, 3218 * FederalCreditRate_2024),
            new TestCase ('CPP Credit - Federal - 2024 - 250K', { grossIncome: (250*1000), region: 'Federal' }, 3218 * FederalCreditRate_2024),
            new TestCase ('CPP Credit - Federal - 2024 - 1M', { grossIncome: (1000*1000), region: 'Federal' }, 3218 * FederalCreditRate_2024)
        ],
        'Newfoundland and Labrador': [
            new TestCase ('CPP Credit - Newfoundland and Labrador - 2024 - 10K', { taxableIncome: 10*1000, region: 'Newfoundland and Labrador' }, 322 * NewfoundlandCreditRate_2024),
            new TestCase ('CPP Credit - Newfoundland and Labrador - 2024 - 50K', { taxableIncome: 50*1000, region: 'Newfoundland and Labrador' }, 2302 * NewfoundlandCreditRate_2024),
            new TestCase ('CPP Credit - Newfoundland and Labrador - 2024 - 100K', { taxableIncome: 100*1000, region: 'Newfoundland and Labrador' }, 3218 * NewfoundlandCreditRate_2024),
            new TestCase ('CPP Credit - Newfoundland and Labrador - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Newfoundland and Labrador' }, 3218 * NewfoundlandCreditRate_2024),
        ],
        'Prince Edward Island': [
            new TestCase ('CPP Credit - Prince Edward Island - 2024 - 10K', { taxableIncome: 10*1000, region: 'Prince Edward Island' }, 322 * PEICreditRate_2024),
            new TestCase ('CPP Credit - Prince Edward Island - 2024 - 50K', { taxableIncome: 50*1000, region: 'Prince Edward Island' }, 2302 * PEICreditRate_2024),
            new TestCase ('CPP Credit - Prince Edward Island - 2024 - 100K', { taxableIncome: 100*1000, region: 'Prince Edward Island' }, 3218 * PEICreditRate_2024),
            new TestCase ('CPP Credit - Prince Edward Island - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Prince Edward Island' }, 3218 * PEICreditRate_2024),
        ],
        'Nova Scotia': [
            new TestCase ('CPP Credit - Nova Scotia - 2024 - 10K', { taxableIncome: 10*1000, region: 'Nova Scotia' }, 322 * NovaScotiaCreditRate_2024),
            new TestCase ('CPP Credit - Nova Scotia - 2024 - 50K', { taxableIncome: 50*1000, region: 'Nova Scotia' }, 2302 * NovaScotiaCreditRate_2024),
            new TestCase ('CPP Credit - Nova Scotia - 2024 - 100K', { taxableIncome: 100*1000, region: 'Nova Scotia' }, 3218 * NovaScotiaCreditRate_2024),
            new TestCase ('CPP Credit - Nova Scotia - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Nova Scotia' }, 3218 * NovaScotiaCreditRate_2024),
        ],
        'New Brunswick': [
            new TestCase ('CPP Credit - New Brunswick - 2024 - 10K', { taxableIncome: 10*1000, region: 'New Brunswick' }, 322 * NewBrunswickCreditRate_2024),
            new TestCase ('CPP Credit - New Brunswick - 2024 - 50K', { taxableIncome: 50*1000, region: 'New Brunswick' }, 2302 * NewBrunswickCreditRate_2024),
            new TestCase ('CPP Credit - New Brunswick - 2024 - 100K', { taxableIncome: 100*1000, region: 'New Brunswick' }, 3218 * NewBrunswickCreditRate_2024),
            new TestCase ('CPP Credit - New Brunswick - 2024 - 1M', { taxableIncome: 1000*1000, region: 'New Brunswick' }, 3218 * NewBrunswickCreditRate_2024),
        ],
        'Quebec': [
            new TestCase ('QPP Credit - Quebec - 2024 - 10K', { grossIncome: (10*1000), region: 'Quebec' }, 351 * FederalCreditRate_2024),
            new TestCase ('QPP Credit - Quebec - 2024 - 25K', { grossIncome: (25*1000), region: 'Quebec' }, 1161 * FederalCreditRate_2024),
            new TestCase ('QPP Credit - Quebec - 2024 - 50K', { grossIncome: (50*1000), region: 'Quebec' }, 2511 * FederalCreditRate_2024),
            new TestCase ('QPP Credit - Quebec - 2024 - 65K', { grossIncome: (65*1000), region: 'Quebec' }, 3321 * FederalCreditRate_2024),
            new TestCase ('QPP Credit - Quebec - 2024 - 75K', { grossIncome: (75*1000), region: 'Quebec' }, 3510 * FederalCreditRate_2024),
            new TestCase ('QPP Credit - Quebec - 2024 - 100K', { grossIncome: (100*1000), region: 'Quebec' }, 3510 * FederalCreditRate_2024),
            new TestCase ('QPP Credit - Quebec - 2024 - 250K', { grossIncome: (250*1000), region: 'Quebec' }, 3510 * FederalCreditRate_2024),
            new TestCase ('QPP Credit - Quebec - 2024 - 1M', { grossIncome: (1000*1000), region: 'Quebec' }, 3510 * FederalCreditRate_2024)
        ],
        'Ontario': [
            new TestCase ('CPP Credit - Ontario - 2024 - 10K', { taxableIncome: 10*1000, region: 'Ontario' }, 322 * OntarioCreditRate_2024),
            new TestCase ('CPP Credit - Ontario - 2024 - 50K', { taxableIncome: 50*1000, region: 'Ontario' }, 2302 * OntarioCreditRate_2024),
            new TestCase ('CPP Credit - Ontario - 2024 - 100K', { taxableIncome: 100*1000, region: 'Ontario' }, 3218 * OntarioCreditRate_2024),
            new TestCase ('CPP Credit - Ontario - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Ontario' }, 3218 * OntarioCreditRate_2024)
        ],
        'Manitoba': [
            new TestCase ('CPP Credit - Manitoba - 2024 - 10K', { taxableIncome: 10*1000, region: 'Manitoba' }, 322 * ManitobaCreditRate_2024),
            new TestCase ('CPP Credit - Manitoba - 2024 - 50K', { taxableIncome: 50*1000, region: 'Manitoba' }, 2302 * ManitobaCreditRate_2024),
            new TestCase ('CPP Credit - Manitoba - 2024 - 100K', { taxableIncome: 100*1000, region: 'Manitoba' }, 3218 * ManitobaCreditRate_2024),
            new TestCase ('CPP Credit - Manitoba - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Manitoba' }, 3218 * ManitobaCreditRate_2024)         
        ],
        'Saskatchewan': [
            new TestCase ('CPP Credit - Saskatchewan - 2024 - 10K', { taxableIncome: 10*1000, region: 'Saskatchewan' }, 322 * SaskatchewanCreditRate_2024),
            new TestCase ('CPP Credit - Saskatchewan - 2024 - 50K', { taxableIncome: 50*1000, region: 'Saskatchewan' }, 2302 * SaskatchewanCreditRate_2024),
            new TestCase ('CPP Credit - Saskatchewan - 2024 - 100K', { taxableIncome: 100*1000, region: 'Saskatchewan' }, 3218 * SaskatchewanCreditRate_2024),
            new TestCase ('CPP Credit - Saskatchewan - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Saskatchewan' }, 3218 * SaskatchewanCreditRate_2024)           
        ],
        'Alberta': [
            new TestCase ('CPP Credit - Alberta - 2024 - 10K', { taxableIncome: 10*1000, region: 'Alberta' }, 322 * AlbertaCreditRate_2024),
            new TestCase ('CPP Credit - Alberta - 2024 - 50K', { taxableIncome: 50*1000, region: 'Alberta' }, 2302 * AlbertaCreditRate_2024),
            new TestCase ('CPP Credit - Alberta - 2024 - 100K', { taxableIncome: 100*1000, region: 'Alberta' }, 3218 * AlbertaCreditRate_2024),
            new TestCase ('CPP Credit - Alberta - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Alberta' }, 3218 * AlbertaCreditRate_2024)        
        ],
        'British Columbia': [
            new TestCase ('CPP Credit - British Columbia - 2024 - 10K', { taxableIncome: 10*1000, region: 'British Columbia' }, 322 * BCCreditRate_2024),
            new TestCase ('CPP Credit - British Columbia - 2024 - 50K', { taxableIncome: 50*1000, region: 'British Columbia' }, 2302 * BCCreditRate_2024),
            new TestCase ('CPP Credit - British Columbia - 2024 - 100K', { taxableIncome: 100*1000, region: 'British Columbia' }, 3218 * BCCreditRate_2024),
            new TestCase ('CPP Credit - British Columbia - 2024 - 1M', { taxableIncome: 1000*1000, region: 'British Columbia' }, 3218 * BCCreditRate_2024)          
        ],
        'Northwest Territories': [
            new TestCase ('CPP Credit - Northwest Territories - 2024 - 10K', { taxableIncome: 10*1000, region: 'Northwest Territories' }, 322 * NorthwestTerritoriesCreditRate_2024),
            new TestCase ('CPP Credit - Northwest Territories - 2024 - 50K', { taxableIncome: 50*1000, region: 'Northwest Territories' }, 2302 * NorthwestTerritoriesCreditRate_2024),
            new TestCase ('CPP Credit - Northwest Territories - 2024 - 100K', { taxableIncome: 100*1000, region: 'Northwest Territories' }, 3218 * NorthwestTerritoriesCreditRate_2024),
            new TestCase ('CPP Credit - Northwest Territories - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Northwest Territories' }, 3218 * NorthwestTerritoriesCreditRate_2024)           
        ],
        'Nunavut': [
            new TestCase ('CPP Credit - Nunavut - 2024 - 10K', { taxableIncome: 10*1000, region: 'Nunavut' }, 322 * NunavutCreditRate_2024),
            new TestCase ('CPP Credit - Nunavut - 2024 - 50K', { taxableIncome: 50*1000, region: 'Nunavut' }, 2302 * NunavutCreditRate_2024),
            new TestCase ('CPP Credit - Nunavut - 2024 - 100K', { taxableIncome: 100*1000, region: 'Nunavut' }, 3218 * NunavutCreditRate_2024),
            new TestCase ('CPP Credit - Nunavut - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Nunavut' }, 3218 * NunavutCreditRate_2024)        
        ],
        'Yukon': [
            new TestCase ('CPP Credit - Yukon - 2024 - 10K', { taxableIncome: 10*1000, region: 'Yukon' }, 322 * YukonCreditRate_2024),
            new TestCase ('CPP Credit - Yukon - 2024 - 50K', { taxableIncome: 50*1000, region: 'Yukon' }, 2302 * YukonCreditRate_2024),
            new TestCase ('CPP Credit - Yukon - 2024 - 100K', { taxableIncome: 100*1000, region: 'Yukon' }, 3218 * YukonCreditRate_2024),
            new TestCase ('CPP Credit - Yukon - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Yukon' }, 3218 * YukonCreditRate_2024)
        ]
    }      
}