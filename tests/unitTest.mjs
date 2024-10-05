export default class UnitTest {    
    constructor(testCase, testFn) {
        this.testCase = testCase;
        this.testFn = testFn;
    }

    run() {
        let actual = this.testFn(...Object.values(this.testCase.params));

        return {
            passed: Math.abs(this.testCase.expectedResult - actual) <= this.testCase.tolerance,
            name: this.testCase.name,
            params: this.testCase.params,
            expectedRange: [this.testCase.expectedResult - this.testCase.tolerance, this.testCase.expectedResult + this.testCase.tolerance],
            actual: actual
        }
    }
}