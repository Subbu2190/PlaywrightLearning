function userProfile(name){
    return `Hello ${name}`
}
console.log(userProfile("Subramanian"));

const double = (number)=>{
return number*2;
}
console.log("The dobuled value is "+double(5));


setTimeout(function () {  
    console.log('This message is delayed by 2 seconds')  
}, 2000);


function getUserData(callback){
    let username='Subramanian';
    let age=34;
    console.log(callback(username, age));
}

function userDetails(username, age){
    return `Username: ${username}, Age: ${age}`;
}

setTimeout(function() {
    getUserData(userDetails);
},3000);

