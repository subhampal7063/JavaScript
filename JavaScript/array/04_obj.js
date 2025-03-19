// const macuser = new Object()
const macUser = {}
macUser.id = "A1"
macUser.name = "Subham Pal"
macUser.isloggedIn = false
//console.log(macUser)
const appleUser = {
    email: "subhampal7063@gmail.com",
    fullname: {
        userfullname:{
            firstname:"SUBHAM",
            lastname:"PAL"
        }
    }
}
console.log(appleUser.fullname.userfullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {4:"e", 5:"f"}

const obj4 = {...obj1,...obj2,...obj3}
console.log(obj4);

console.log(Object.keys(macUser));
console.log(Object.values(macUser));
console.log(Object.entries(macUser));

console.log(macUser.hasOwnProperty("isloggedIn"));
