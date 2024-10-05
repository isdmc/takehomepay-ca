import round from '../util/round.mjs';

// surtax: https://www.canada.ca/en/revenue-agency/services/forms-publications/payroll/t4032-payroll-deductions-tables/t4032on-jan/t4032on-january-general-information.html
export default class TaxCalc {

    constructor(taxInfoForYear) {
        this.taxData = taxInfoForYear;
    }

    calculateTaxes(taxableIncome, region) {
        return round(this.#calculateTotalAmountByTier(taxableIncome, this.taxData[region].brackets), 2);
    }

    calculateRegionalSurtax(regionalTaxLessCredits, region) {
        let surtaxBrackets = this.taxData[region].surtaxBrackets;

        if (!surtaxBrackets) {
            return 0;
        }

        return round(this.#calculateTotalAmountByTier(Math.max(regionalTaxLessCredits, 0), surtaxBrackets), 2);
    }
    
    #calculateTotalAmountByTier(amount, tierInfo) {
        let amountByTier = tierInfo.map(tier => this.#getAmountForTier(amount, tier.rangeMin, tier.rangeMax, tier.rate));
        let totalAmount = amountByTier.reduce((total, currentValue) => total + currentValue, 0);
        
        return totalAmount;
    }
    
    #getAmountForTier(amount, tierMin, tierMax, rate) {
        if (amount < tierMin) {
            return 0;
        }
        else if (amount > tierMax)
        {
            return (tierMax - tierMin) * rate;
        }
        else
        {
            return (amount - tierMin) * rate;
        }
    }
}