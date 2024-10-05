import TestCase from '../testCase.mjs';

export const ontarioHealthPremiumTestCases = {
    '2024': {
        'Ontario':
        [
            new TestCase('Ontario Health Premium - 2024 - 10K', { taxableIncome: 10 * 1000 }, 0),
            new TestCase('Ontario Health Premium - 2024 - 25K', { taxableIncome: 25 * 1000 }, 300),
            new TestCase('Ontario Health Premium - 2024 - 45k', { taxableIncome: 45 * 1000 }, 450),
            new TestCase('Ontario Health Premium - 2024 - 50K', { taxableIncome: 70 * 1000 }, 600),
            new TestCase('Ontario Health Premium - 2024 - 100K', { taxableIncome: 100 * 1000 }, 750),
            new TestCase('Ontario Health Premium - 2024 - 150K', { taxableIncome: 150 * 1000 }, 750),
            new TestCase('Ontario Health Premium - 2024 - 300K', { taxableIncome: 300 * 1000 }, 900)
        ]
    }
}