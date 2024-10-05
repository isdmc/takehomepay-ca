export default class TestCase {
    constructor(name, params, expectedResult, tolerance = 1) {
        this.name = name;
        this.params = params;
        this.expectedResult = expectedResult;
        this.tolerance = tolerance;
    }
}