export default class TaxCalc {

    constructor(taxInfoForYear) {
        this.taxData = taxInfoForYear;
    }

    calculateTaxes(taxableIncome, region) {
        return this.#calculateTotalAmountByTier(taxableIncome, this.taxData[region].brackets);
    }

    calculateRegionalSurtax(regionalTaxLessCredits, region) {
        let surtaxBrackets = this.taxData[region].surtaxBrackets;

        if (!surtaxBrackets) {
            return 0;
        }

        return this.#calculateTotalAmountByTier(Math.max(regionalTaxLessCredits, 0), surtaxBrackets);
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