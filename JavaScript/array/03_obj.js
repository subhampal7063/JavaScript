//singleton
//object literals

const user = {
    name : "Subham Pal",
    age : 18,
    location: "Kolkata",
    college: "UEMK",
    email: "subhampal7063@gmail.com",
    mobile: "7063184686"
}
/*
console.log(user.name);
console.log(user["age"])

user.email = "subhampal7063@accenture.com";
console.log("Before freeze "+user.email);
Object.freeze(user)
user.email = "subhampal7063@accen.com";
console.log("After freeze and change"+user.email);
*/

user.greet = function() {
    console.log("Hello Users");
}

user.greetWithName = function(){
    console.log(`Hello ${this.name} welcome to out code`)
}
user.greet()
console.log(user.greetWithName())

console.log(user);
