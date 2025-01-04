export default class CPPCalc {
    constructor(taxDataForYear, region) {
        let cppRegion = region === 'Quebec' ? 'Quebec' : 'Federal';
        this.cppData = taxDataForYear[cppRegion].CPP_QPP;
        this.taxBracketsForRegion = taxDataForYear[region].brackets;
    }

    calculateCPPPremiums(taxableIncome) {
        let eligibleIncome = this.#calculateEligibleIncome(taxableIncome);
        let cppPremiums = eligibleIncome * this.cppData.baseContributionRate;
        return cppPremiums;
    }

    calculateCPPEnhancedPremiums(grossIncome) {
        let cppAdditionalAmountPremium = this.#calculateFirstAdditionalCPPDeduction(grossIncome);
        let cpp2Premium = this.#calculateCPP2Deduction(grossIncome);

        return cppAdditionalAmountPremium + cpp2Premium;
    }

    calculateCPPTaxCredit(taxableIncome, region) {
        let cppPremiums = this.calculateCPPPremiums(taxableIncome);
        let regionalCreditRate = (region === 'Quebec' || region === 'Federal') ? this.cppData.creditRate : Math.min(...this.taxBracketsForRegion.map(bracket => bracket.rate));

        return regionalCreditRate * cppPremiums;
    }

    calculateCPPTaxDeduction(grossIncome) {
        return this.calculateCPPEnhancedPremiums(grossIncome);
    }

    #calculateFirstAdditionalCPPDeduction(grossIncome) {
        let eligibleIncome = this.#calculateEligibleIncome(grossIncome);
        let deduction = eligibleIncome * this.cppData.additionalContributionRate;
        return deduction;
    }

    #calculateCPP2Deduction(grossIncome) {
        let capPensionableEarnings = this.#capPensionableIncome(grossIncome);
        let capEnhancedPensionableEarnings = this.#capEnhancedPensionableIncome(grossIncome);
        let enhancedEarningsAmount = Math.max(0, capEnhancedPensionableEarnings - capPensionableEarnings);
        return enhancedEarningsAmount * this.cppData.CPP_QPP2ContributionRate;
    }

    #calculateEligibleIncome(income) {
        let pensionableEarnings = this.#capPensionableIncome(income);
        return this.#deductExemptAmount(pensionableEarnings);
    }

    #capPensionableIncome(income) {
        return Math.min(income, this.cppData.maxPensionableEarnings);
    }

    #capEnhancedPensionableIncome(grossIncome) {
        return Math.min(grossIncome, this.cppData.maxAdditionalPensionableEarnings);
    }

    #deductExemptAmount(pensionableEarnings) {
        return Math.max(0, (pensionableEarnings - this.cppData.exemptionAmount));
    }
}