const { error } = require("console")
const { resolve } = require("path")

let conditionalPromise = new Promise((resolve, reject)=>{
    if(Math.random()>0.5){
        resolve(`Resolved - The number is > 0.5`)
    }
    else{
        reject(`Rejected - The number is <= 0.5`)
    }
})

conditionalPromise
.then(result =>{console.log(result)})
.catch(error=>{console.log(error);
})