const round = require('../util/round');

// https://www.canada.ca/en/revenue-agency/services/forms-publications/payroll/t4032-payroll-deductions-tables/t4032on-jan/t4032on-january-general-information.html#_Toc333578512
module.exports = class OntarioHealthPremiumCalc {
    constructor(taxDataForYear) {
        this.ontarioHealthPremiumBrackets = taxDataForYear['Ontario'].healthPremiumBrackets;
    }

    calculateOntarioHealthPremium(taxableIncome) {
        if (taxableIncome <= 0) {
            return 0;
        }

        for (var bracket of this.ontarioHealthPremiumBrackets) {
            if (taxableIncome > bracket.rangeMin && taxableIncome <= bracket.rangeMax) {
                let baseAmount = bracket.baseAmount;
                let scaledAmount = bracket.previousBaseAmount + (taxableIncome - bracket.rangeMin) * bracket.rate;
                return round(Math.min(baseAmount, scaledAmount), 2);
            }
        }
    }
}