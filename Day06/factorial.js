function factorial(number) {

    if (number === 0) {
        console.log("Please Enter a Positive value");
    } 

    else if (number > 0) {

        let fact = 1;

        for (i = 1; i <= number; i++) {
            fact = fact * i;
        }

        console.log(`The factorial of the given ${number} is ${fact}`);
    }
    else {
        console.log (`Please Enter a Valid number`);
    }

}

factorial(-5);