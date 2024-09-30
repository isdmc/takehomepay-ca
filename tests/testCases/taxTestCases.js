const TestCase = require('../testCase');

module.exports = {
    tax: {
        2024: {
            'Federal': [
                new TestCase ('Tax - Federal - 2024 - 10K', { taxableIncome: 10*1000, region: 'Federal' }, 1500),
                new TestCase ('Tax - Federal - 2024 - 50K', { taxableIncome: 50*1000, region: 'Federal' }, 7500),
                new TestCase ('Tax - Federal - 2024 - 100K', { taxableIncome: 100*1000, region: 'Federal' }, 17427),
                new TestCase ('Tax - Federal - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Federal' }, 305716)
            ],
            'Newfoundland and Labrador': [
                new TestCase ('Tax - Newfoundland and Labrador - 2024 - 10K', { taxableIncome: 10*1000, region: 'Newfoundland and Labrador' }, 870),
                new TestCase ('Tax - Newfoundland and Labrador - 2024 - 50K', { taxableIncome: 50*1000, region: 'Newfoundland and Labrador' }, 4745),
                new TestCase ('Tax - Newfoundland and Labrador - 2024 - 100K', { taxableIncome: 100*1000, region: 'Newfoundland and Labrador' }, 12171),
                new TestCase ('Tax - Newfoundland and Labrador - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Newfoundland and Labrador' }, 196450),
            ],
            'Prince Edward Island': [
                new TestCase ('Tax - Prince Edward Island - 2024 - 10K', { taxableIncome: 10*1000, region: 'Prince Edward Island' }, 965),
                new TestCase ('Tax - Prince Edward Island - 2024 - 50K', { taxableIncome: 50*1000, region: 'Prince Edward Island' }, 5515),
                new TestCase ('Tax - Prince Edward Island - 2024 - 100K', { taxableIncome: 100*1000, region: 'Prince Edward Island' }, 13408),
                new TestCase ('Tax - Prince Edward Island - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Prince Edward Island' }, 181791),
            ],
            'Nova Scotia': [
                new TestCase ('Tax - Nova Scotia - 2024 - 10K', { taxableIncome: 10*1000, region: 'Nova Scotia' }, 879),
                new TestCase ('Tax - Nova Scotia - 2024 - 50K', { taxableIncome: 50*1000, region: 'Nova Scotia' }, 5652),
                new TestCase ('Tax - Nova Scotia - 2024 - 100K', { taxableIncome: 100*1000, region: 'Nova Scotia' }, 13887),
                new TestCase ('Tax - Nova Scotia - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Nova Scotia' }, 201137),
            ],
            'New Brunswick': [
                new TestCase ('Tax - New Brunswick - 2024 - 10K', { taxableIncome: 10*1000, region: 'New Brunswick' }, 940),
                new TestCase ('Tax - New Brunswick - 2024 - 50K', { taxableIncome: 50*1000, region: 'New Brunswick' }, 4702),
                new TestCase ('Tax - New Brunswick - 2024 - 100K', { taxableIncome: 100*1000, region: 'New Brunswick' }, 11704),
                new TestCase ('Tax - New Brunswick - 2024 - 1M', { taxableIncome: 1000*1000, region: 'New Brunswick' }, 184226),
            ],
            'Quebec': [
                new TestCase ('Tax - Quebec - 2024 - 10K', { taxableIncome: (10*1000), region: 'Quebec' }, 1400),
                new TestCase ('Tax - Quebec - 2024 - 50K', { taxableIncome: (50*1000), region: 'Quebec' }, 7000),
                new TestCase ('Tax - Quebec - 2024 - 100K', { taxableIncome: (100*1000), region: 'Quebec' }, 16411),
                new TestCase ('Tax - Quebec - 2024 - 1M', { taxableIncome: (1000*1000), region: 'Quebec' }, 247529)
            ],
            'Ontario': [
                new TestCase ('Tax - Ontario - 2024 - 10K', { taxableIncome: 10*1000, region: 'Ontario' }, 505),
                new TestCase ('Tax - Ontario - 2024 - 50K', { taxableIncome: 50*1000, region: 'Ontario' }, 2525),
                new TestCase ('Tax - Ontario - 2024 - 100K', { taxableIncome: 100*1000, region: 'Ontario' }, 7041),
                new TestCase ('Tax - Ontario - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Ontario' }, 123723)
            ],
            'Manitoba': [
                new TestCase ('Tax - Manitoba - 2024 - 10K', { taxableIncome: 10*1000, region: 'Manitoba' }, 1080),
                new TestCase ('Tax - Manitoba - 2024 - 50K', { taxableIncome: 50*1000, region: 'Manitoba' }, 5459),
                new TestCase ('Tax - Manitoba - 2024 - 100K', { taxableIncome: 100*1000, region: 'Manitoba' }, 11834),
                new TestCase ('Tax - Manitoba - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Manitoba' }, 168434)
            ],
            'Saskatchewan': [
                new TestCase ('Tax - Saskatchewan - 2024 - 10K', { taxableIncome: 10*1000, region: 'Saskatchewan' }, 1050),
                new TestCase ('Tax - Saskatchewan - 2024 - 50K', { taxableIncome: 50*1000, region: 'Saskatchewan' }, 5250),
                new TestCase ('Tax - Saskatchewan - 2024 - 100K', { taxableIncome: 100*1000, region: 'Saskatchewan' }, 11459),
                new TestCase ('Tax - Saskatchewan - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Saskatchewan' }, 140984)
            ],
            'Alberta': [
                new TestCase ('Tax - Alberta - 2024 - 10K', { taxableIncome: 10*1000, region: 'Alberta' }, 1000),
                new TestCase ('Tax - Alberta - 2024 - 50K', { taxableIncome: 50*1000, region: 'Alberta' }, 5000),
                new TestCase ('Tax - Alberta - 2024 - 100K', { taxableIncome: 100*1000, region: 'Alberta' }, 10000),
                new TestCase ('Tax - Alberta - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Alberta' }, 139325)
            ],
            'British Columbia': [
                new TestCase ('Tax - British Columbia - 2024 - 10K', { taxableIncome: 10*1000, region: 'British Columbia' }, 506),
                new TestCase ('Tax - British Columbia - 2024 - 50K', { taxableIncome: 50*1000, region: 'British Columbia' }, 2584),
                new TestCase ('Tax - British Columbia - 2024 - 100K', { taxableIncome: 100*1000, region: 'British Columbia' }, 6550),
                new TestCase ('Tax - British Columbia - 2024 - 1M', { taxableIncome: 1000*1000, region: 'British Columbia' }, 182701)
            ],
            'Northwest Territories': [
                new TestCase ('Tax - Northwest Territories - 2024 - 10K', { taxableIncome: 10*1000, region: 'Northwest Territories' }, 590),
                new TestCase ('Tax - Northwest Territories - 2024 - 50K', { taxableIncome: 50*1000, region: 'Northwest Territories' }, 2950),
                new TestCase ('Tax - Northwest Territories - 2024 - 100K', { taxableIncome: 100*1000, region: 'Northwest Territories' }, 7234),
                new TestCase ('Tax - Northwest Territories - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Northwest Territories' }, 132447)
            ],
            'Nunavut': [
                new TestCase ('Tax - Nunavut - 2024 - 10K', { taxableIncome: 10*1000, region: 'Nunavut' }, 400),
                new TestCase ('Tax - Nunavut - 2024 - 50K', { taxableIncome: 50*1000, region: 'Nunavut' }, 2000),
                new TestCase ('Tax - Nunavut - 2024 - 100K', { taxableIncome: 100*1000, region: 'Nunavut' }, 5402),
                new TestCase ('Tax - Nunavut - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Nunavut' }, 106941)
            ],
            'Yukon': [
                new TestCase ('Tax - Yukon - 2024 - 10K', { taxableIncome: 10*1000, region: 'Yukon' }, 640),
                new TestCase ('Tax - Yukon - 2024 - 50K', { taxableIncome: 50*1000, region: 'Yukon' }, 3200),
                new TestCase ('Tax - Yukon - 2024 - 100K', { taxableIncome: 100*1000, region: 'Yukon' }, 7547),
                new TestCase ('Tax - Yukon - 2024 - 1M', { taxableIncome: 1000*1000, region: 'Yukon' }, 132134)
            ]
        }
    },
    surtax: {
        2024: {
            'Ontario': [
                new TestCase ('Surtax - Ontario - 2024 - 2.5K Provincial Tax', { netRegionalTax: 2500, region: 'Ontario' }, 0), 
                new TestCase ('Surtax - Ontario - 2024 - 6.5K Provincial Tax', { netRegionalTax: 6500, region: 'Ontario' }, 189.2),
                new TestCase ('Surtax - Ontario - 2024 - 10K Provincial Tax', { netRegionalTax: 10000, region: 'Ontario' }, 1351.92),
            ]
        }
    }
}