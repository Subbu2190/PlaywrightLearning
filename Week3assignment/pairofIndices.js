function pairOfIndices() {
    const nums = [2, 4, 7, 8, 11, 14];
    const target = 18;
    let results = [];


    for (i = 0; i < nums.length; i++) {
        for (j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {

                results.push(i, j);

                // console.log("Target equals " + (nums[i] + "+" + nums[j]) + ", " + ("(" + i + "," + j + ")"));

                console.log(`Target equals ${nums[i]}+${nums[j]}(${i},${j})`);

            }

        }

    }

    return results;

}

pairOfIndices();
