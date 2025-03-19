const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({
                username: "subham",
                gmail: "subhampal7063@gmail.com"
            })
        }else{
            reject("ERROR: Something went wrong");
        }
    }, 1000);
})

promisefour.then(function(user){
    console.log(user.username);
}).catch(function (error) {
    console.log(error);
}).finally(function() {
    console.log("The promise is resolve / rejected");
})