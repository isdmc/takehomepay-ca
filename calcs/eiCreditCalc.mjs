import round from '../util/round.mjs';

export default class EICreditCalc {
    constructor(taxDataForYear, region) {
        this.eiData = taxDataForYear['Federal'].ei;
        this.qpipData = taxDataForYear['Quebec'].qpip;
        this.taxBracketsForRegion = taxDataForYear[region].brackets;
    }

    // https://kpu.pressbooks.pub/cdntax/chapter/what-are-cpp-and-ei-contributions-and-how-do-we-calculate-them/
    // https://seniuk.com/additional-canada-pension-plan-cpp-contributions-required-for-2024/
    calculateEITaxCredit(grossIncome, region) {
        let eiPremiums = this.calculateEIPremiums(grossIncome);
        let regionalCreditRate = region === 'Federal' ? this.eiData.creditRate : Math.min(...this.taxBracketsForRegion.map(bracket => bracket.rate));
        return round(eiPremiums * regionalCreditRate, 2);
    }

    calculateEIPremiums(grossIncome) {
        let insurableIncome = this.#calculateInsurableEarnings(grossIncome);
        let eiPremiums = insurableIncome * this.eiData.contributionRate;
        return round(eiPremiums, 2);
    }

    // https://www.revenuquebec.ca/en/online-services/forms-and-publications/current-details/tp-1015-ta-v/
    calculateQPIPTaxCredit(grossIncome) {
        let insurableIncome = this.#calculateQPIPInsurableEarnings(grossIncome);
        let qpipContribution = insurableIncome * this.qpipData.contributionRate;
        return round(this.qpipData.creditRate * qpipContribution, 2);
    }

    #calculateInsurableEarnings(grossIncome) {
        return Math.min(grossIncome, this.eiData.maxInsurableEarnings);
    }

    #calculateQPIPInsurableEarnings(grossIncome) {
        return Math.min(grossIncome, this.qpipData.maxInsurableEarnings);
    }

}