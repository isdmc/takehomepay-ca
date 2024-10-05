import round from '../util/round.mjs';

// https://seniuk.com/additional-canada-pension-plan-cpp-contributions-required-for-2024/
// https://www.canada.ca/en/revenue-agency/news/2023/05/the-canada-pension-plan-enhancement--businesses-individuals-and-self-employed-what-it-means-for-you.html
export default class CPPCalc {
    constructor(taxDataForYear, region) {        
        let cppRegion = region === 'Quebec' ? 'Quebec' : 'Federal';
        this.cppData = taxDataForYear[cppRegion].CPP_QPP;
        this.taxBracketsForRegion = taxDataForYear[region].brackets;
    }

    calculateCPPPremiums(taxableIncome) {
        let eligibleIncome = this.#calculateEligibleIncome(taxableIncome);
        let cppPremiums = eligibleIncome * this.cppData.baseContributionRate;
        return round(cppPremiums, 2);
    }

    calculateCPPEnhancedPremiums(grossIncome) {
        let cppAdditionalAmountPremium = this.#calculateFirstAdditionalCPPDeduction(grossIncome);
        let cpp2Premium = this.#calculateCPP2Deduction(grossIncome);

        return round(cppAdditionalAmountPremium + cpp2Premium, 2);
    }

    // This amount is a tax credit (i.e subtracted from taxes owed)
    calculateCPPTaxCredit(taxableIncome, region) {
        let cppPremiums = this.calculateCPPPremiums(taxableIncome);
        let regionalCreditRate = (region === 'Quebec' || region === 'Federal') ? this.cppData.creditRate : Math.min(...this.taxBracketsForRegion.map(bracket => bracket.rate));

        return round(regionalCreditRate * cppPremiums, 2);
    }

    calculateCPPTaxDeduction(grossIncome) {
        return this.calculateCPPEnhancedPremiums(grossIncome);
    }

    // This amount a tax deduction (i.e subtracted directly from taxable income)
    #calculateFirstAdditionalCPPDeduction(grossIncome) {
        let eligibleIncome = this.#calculateEligibleIncome(grossIncome);
        let deduction = eligibleIncome * this.cppData.additionalContributionRate;
        return deduction;
    }

    // This amount a tax deduction (i.e subtracted directly from taxable income)
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

