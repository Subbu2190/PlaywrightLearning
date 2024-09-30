/* Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement to assess score ranges. */
function studentGrade(score) {

    // const score = 69;

    switch (true) {
        case (score > 90 && score <= 100):
            return "You got A+";
            break;

        case (score > 80 && score <= 90):
            return "You got A";
            break;

        case (score > 70 && score <= 80):
            return "You got B";
            break;

        case (score > 60 && score <= 70):
            return "You got C";
            break;

        case (score > 50 && score <= 60):
            return "You got D";
            break;

        case (score > 40 && score <= 50):
            return "You got E";
            break;

        case (score > 0 && score <= 40):
            return "You got F";
            break;

        case (score > 100 || score <= 0):
            return "Invalid Entry";
            break;

        default:
            return "Grade not found";
    }

}

console.log(studentGrade(+56));