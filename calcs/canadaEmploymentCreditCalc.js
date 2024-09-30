const round = require('../util/round');

// https://support.hrblock.ca/en-ca/Content/Employed/WhatIsCanadaEmploymentAmount.htm
module.exports = class CanadaEmploymentCreditCalc {

    constructor(taxDataForYear) {
        this.taxDataForYear = taxDataForYear;
    }

    calculateEmploymentAmountTaxCredit(grossIncome, region) {
        if (region === 'Federal' || region === 'Yukon') {
            let canadaEmploymentAmountCreditMax = this.taxDataForYear[region].canadaEmploymentCreditAmount; 
            let regionalCreditRate = Math.min(...this.taxDataForYear[region].brackets.map(bracket => bracket.rate));
            let employmentCreditAmount = Math.min(canadaEmploymentAmountCreditMax, grossIncome);
            return round(employmentCreditAmount * regionalCreditRate, 2);
        } else {
            return 0;
        }
    }
}