const promise1 = new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Async task is completed");
        resolve();
    }, 1000);
})
promise1.then(function () {
    console.log("Promise consumed");
})
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Task 2 run");  
        resolve();
    },1000);
}).then(function () {
    console.log("Task 2 resolve");
})
const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username: "subham7063",
            email: "subhampal7063@gmail.com",
            phone: "100"
        })
    }, 1000);
})
promise3.then(function(user){
    console.log(
        `username is ${user.username}`,
        `email is ${user.email}`,
        `Phone is ${user.phone}`
    );
})