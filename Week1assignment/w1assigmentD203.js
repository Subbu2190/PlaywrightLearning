/* Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and `runTests` with `switch` for test type messages. */

function launchBrowser(browser){

    // let browser="CHrome";

    if (browser.toLowerCase()==="chrome"){
        console.log("Chrome browser is launched");
    }
    else{
        console.log("Different browser is launched");
    }
}

// launchBrowser();

launchBrowser("CHROME");

function runTests(testType){

    // testType="smoke";

    switch (testType.toLowerCase()) {
        case 'smoke':
            console.log("Smoke test cases executed");
            break;
        case 'sanity':
             console.log("Sanity test cases executed");
            break;
        case 'regression':
            console.log("Regression test cases executed");
             break;
        default:
            console.log("Smoke test cases executed");
            break;
    }
}

runTests("Regression");
// runTests();


