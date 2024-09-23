/* Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement to assess score ranges. */
function studentGrade() {

    const score = 69;

    switch (true) {
        case (score > 90 && score <= 100):
            console.log("You got A+");
            break;

        case (score > 80 && score <= 90):
            console.log("You got A");
            break;

        case (score > 70 && score <= 80):
            console.log("You got B");
            break;

        case (score > 60 && score <= 70):
            console.log("You got C");
            break;

        case (score >= 50 && score <= 60):
            console.log("You got E");
            break;

        case (score >= 0 && score < 50):
            console.log("You got F");
            break;

        case (score > 100):
            console.log("Invalid Entry");
            break;

        default:
            console.log("Grade not found");
            break;
    }

}

studentGrade();