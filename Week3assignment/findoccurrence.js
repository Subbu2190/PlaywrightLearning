function findOccurences() {
    let numbers = [2, 4, 5, 2, 1, 2];

    const count = {};

    for (i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (count[element]) {
            count[element] += 1;
        }

        else {
            count[element] = 1;
        }

    }

    return count;

}
console.log(findOccurences());