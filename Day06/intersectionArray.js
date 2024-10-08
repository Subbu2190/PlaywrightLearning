let newarray =  (firstarray, secondArray)=>{

    let intersectArray = [];

    for (i=0;i<firstarray.length;i++){
        for(j=0;j<secondArray.length;j++){
            if(firstarray[i]===secondArray[j]&&!intersectArray.includes(firstarray[i])){
                intersectArray.push(firstarray[i])
            }
        }
    }

    return intersectArray;

}

let firstarray = [1,2,3,4]

let secondArray = [2,3,4,5,6]

console.log(newarray(firstarray,secondArray));
