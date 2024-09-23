/* Create a JavaScript function that determines if a number is positive, negative, or zero and returns a corresponding string indicating the type. */

function numberCheck(number){
    // number = -22.5;

    if (number>0){
        console.log("The give value "+number+" is a Positive Number");
    }

    else if (number<0){
        console.log("The give value "+number+" is a Negative Number");
    }
    else if (number==0){
        console.log("The give value "+number+" is ZERO");
    }
}
// numberCheck();
numberCheck(50);