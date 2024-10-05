export default class UnitTestRunner {
    constructor () {}

    runUnitTests(tests) {
        let passed = [];
        let failed = [];
        
        console.log('');
        for (let test of tests) {
            process.stdout.write(`Running '${test.testCase.name}'...`);
            let result = test.run();
    
            if (result.passed) {
                process.stdout.write('passed!\n');
                passed.push(result);
            } else {
                process.stdout.write('failed.\n');
                failed.push(result);
            }
        }
    
        return {
            passed,
            failed
        }
    }
    
    reportResults(testResults) {
        let passedCount = testResults.passed.length;
        let failedCount = testResults.failed.length;
        let totalCount = passedCount + failedCount;
    
        console.log(`${passedCount}/${totalCount} tests passed\n`);
        if (testResults.failed.length > 0) {
            console.log('Test Failures');
            console.log('------------------------------------------------------');
            console.log(testResults.failed);
        }
    }
}