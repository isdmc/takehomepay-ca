export default class CanadaEmploymentCreditCalc {

    constructor(taxDataForYear) {
        this.taxDataForYear = taxDataForYear;
    }

    calculateEmploymentAmountTaxCredit(grossIncome, region) {
        if (region === 'Federal' || region === 'Yukon') {
            let canadaEmploymentAmountCreditMax = this.taxDataForYear[region].canadaEmploymentCreditAmount; 
            let regionalCreditRate = Math.min(...this.taxDataForYear[region].brackets.map(bracket => bracket.rate));
            let employmentCreditAmount = Math.min(canadaEmploymentAmountCreditMax, grossIncome);
            return employmentCreditAmount * regionalCreditRate;
        } else {
            return 0;
        }
    }
}