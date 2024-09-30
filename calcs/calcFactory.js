const TaxCalc = require('./taxCalc');
const BasicPersonalAmountCalc = require('./basicPersonalAmountCalc');
const CPPCalc = require('./cppCalc');
const EICreditCalc = require('./eiCreditCalc');
const EmploymentAmountCreditCalc = require('./canadaEmploymentCreditCalc');
const OntarioHealthPremiumAmountCalc = require('./ontarioHealthPremiumCalc');

module.exports = class CalcFactory {
    constructor(taxData) {
        this.taxData = taxData;
    }

    get(year, region, calcType) {
        switch(calcType) {
            case 'Tax':
                return new TaxCalc(this.taxData[year]);
            case 'BasicPersonalAmount':
                return new BasicPersonalAmountCalc(this.taxData[year]);
            case 'CPP':
                return new CPPCalc(this.taxData[year], region);
            case 'EI':
                return new EICreditCalc(this.taxData[year], region);
            case 'EmploymentAmount':
                return new EmploymentAmountCreditCalc(this.taxData[year], region);
            case 'OntarioHealthPremium':
                return new OntarioHealthPremiumAmountCalc(this.taxData[year]);
            default:
                throw new Error(`Invalid calc type '${calcType}'`);
        }
    }
}