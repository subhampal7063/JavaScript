const marvel = ["Loki", "Ironman" , "Spiderman"];
const dc = ["Batman","Superman","Flash"];

//marvel.push(dc)
console.log(marvel);
//console.log(marvel[3])
//console.log(marvel[3][1])

console.log(marvel.concat(dc));


const numArr = [1,2,3,[4,5,6],7,[8,9,[10,11]]];
const flatArr = numArr.flat(Infinity);
console.log(flatArr);


const name = "Subham";
console.log(Array.isArray(name));
console.log(Array.from(name));
console.log(Array.from({name: "subham"}));