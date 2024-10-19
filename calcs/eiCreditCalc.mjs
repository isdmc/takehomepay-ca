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
        return eiPremiums * regionalCreditRate;
    }

    calculateEIPremiums(grossIncome) {
        let insurableIncome = this.#calculateInsurableEarnings(grossIncome);
        let eiPremiums = insurableIncome * this.eiData.contributionRate;
        return eiPremiums;
    }

    // https://www.revenuquebec.ca/en/online-services/forms-and-publications/current-details/tp-1015-ta-v/
    calculateQPIPTaxCredit(grossIncome) {
        let insurableIncome = this.#calculateQPIPInsurableEarnings(grossIncome);
        let qpipContribution = insurableIncome * this.qpipData.contributionRate;
        return this.qpipData.creditRate * qpipContribution;
    }

    #calculateInsurableEarnings(grossIncome) {
        return Math.min(grossIncome, this.eiData.maxInsurableEarnings);
    }

    #calculateQPIPInsurableEarnings(grossIncome) {
        return Math.min(grossIncome, this.qpipData.maxInsurableEarnings);
    }

}