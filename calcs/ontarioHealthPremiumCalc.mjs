export default class OntarioHealthPremiumCalc {
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
                return Math.min(baseAmount, scaledAmount);
            }
        }
    }
}