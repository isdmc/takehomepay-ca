import round from '../util/round.mjs';

export default class BasicPersonalAmountCreditCalc {

    constructor(taxInfoForYear) {
        this.taxInfoForYear = taxInfoForYear;
        this.BASIC_PERSONAL_AMOUNT_REDUCTION_START_TIER_INDEX = 3;
        this.BASIC_PERSONAL_AMOUNT_REDUCTION_END_TIER_INDEX = 4;
    }

    // https://www.fidelity.ca/en/insights/articles/personal-amount-tax-credit-guide/
    calculateBasicPersonalAmountTaxCredit = function(taxableIncome, region) {
        if (region == 'Federal' || region === 'Yukon') {
            return round(this.#calculateScaledBasicPersonalAmountCredit(taxableIncome, region), 2);
        } else {
            let regionalBasicPersonalAmountCreditRate = Math.min(...this.taxInfoForYear[region].brackets.map(bracket => bracket.rate));
            return round(this.taxInfoForYear[region].basicPersonalAmount * regionalBasicPersonalAmountCreditRate, 2);
        }
    }

    // https://www.taxtips.ca/filing/personal-amount-tax-credit.htm
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