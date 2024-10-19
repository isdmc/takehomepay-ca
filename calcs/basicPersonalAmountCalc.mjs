export default class BasicPersonalAmountCreditCalc {

    constructor(taxInfoForYear) {
        this.taxInfoForYear = taxInfoForYear;
        this.BASIC_PERSONAL_AMOUNT_REDUCTION_START_TIER_INDEX = 3;
        this.BASIC_PERSONAL_AMOUNT_REDUCTION_END_TIER_INDEX = 4;
    }

    calculateBasicPersonalAmountTaxCredit = function(taxableIncome, region) {
        if (region == 'Federal' || region === 'Yukon') {
            return this.#calculateScaledBasicPersonalAmountCredit(taxableIncome, region);
        } else {
            let regionalBasicPersonalAmountCreditRate = Math.min(...this.taxInfoForYear[region].brackets.map(bracket => bracket.rate));
            return this.taxInfoForYear[region].basicPersonalAmount * regionalBasicPersonalAmountCreditRate;
        }
    }

    #calculateScaledBasicPersonalAmountCredit = function(taxableIncome, region) {
        // YT uses the same "reduction range" as Federal
        let reductionStart = this.taxInfoForYear['Federal'].brackets[this.BASIC_PERSONAL_AMOUNT_REDUCTION_START_TIER_INDEX].rangeMin;
        let reductionEnd = this.taxInfoForYear['Federal'].brackets[this.BASIC_PERSONAL_AMOUNT_REDUCTION_END_TIER_INDEX].rangeMin; 

        let basicPersonalAmount;
        if (taxableIncome < reductionStart) {
            basicPersonalAmount = this.taxInfoForYear[region].basicPersonalAmount + this.taxInfoForYear[region].additionalBasicPersonalAmount;
        } else if (taxableIncome >= reductionEnd) {
            basicPersonalAmount = this.taxInfoForYear[region].basicPersonalAmount;
        } else {
            let reductionPct = this.taxInfoForYear[region].additionalBasicPersonalAmount / (reductionEnd - reductionStart);
            let reducedAdditionalAmount = this.taxInfoForYear[region].additionalBasicPersonalAmount - reductionPct * (taxableIncome - reductionStart);
            basicPersonalAmount = this.taxInfoForYear[region].basicPersonalAmount + reducedAdditionalAmount; 
        }

        let basicPersonalAmountCreditRate = Math.min(...this.taxInfoForYear[region].brackets.map(bracket => bracket.rate));
        return basicPersonalAmount * basicPersonalAmountCreditRate;
    }

}