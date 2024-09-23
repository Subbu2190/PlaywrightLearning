const browserName ="chrome";

console.log("The assigned browser name is "+browserName);

function getBrowserVersion(){

    var browserVName="chromeglobal";

    //  var browserVName="chromeglobal";

    let browserVersion =128.1;

    if(browserName.startsWith('chrome')){
        console.log("The browesr is chrome");

        // var browserVName="chromeletif";
        
        let browserVName="chromeletif";

        let browserVersion =130.1;

        console.log("Inside the if block using var "+browserVName);

        console.log("Inside the if block using let is "+browserVersion);
        
    }

    else{
        console.log("The browesr is not chrome");

        var browserVName="chromeletelse";

        // let browserVName="chromeletelse";

        let browserVersion =140.1;

        console.log("Inside the else block using var "+browserVName);

        console.log("Inside the else block using let is "+browserVersion);
    }

    console.log("Outside the if block using var "+browserVName);

    console.log("Outside the if block using let is "+browserVersion);

    console.log("Inside the function block using var "+browserVName);

    console.log("Inside the function block using let is "+browserVersion);   
}

// console.log("Outside the function block using var "+browserVName);


//Calling the function
getBrowserVersion();