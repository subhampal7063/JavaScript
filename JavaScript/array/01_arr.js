//array

const myArr = [1,2,3,4,5];
console.log(myArr);
console.log(myArr[1]);
// PUSH = to push a element in the array.
myArr.push(6);
console.log(myArr);
//POP = to pop a element from the array.
myArr.pop();
console.log(myArr);
//includes
console.log(myArr.includes(3));
const bul = myArr.includes(3);
console.log(bul);
//indexOf
console.log(myArr.indexOf(7));
console.log(myArr.indexOf(3));

const newArr = myArr.join();
console.log(newArr);

//Slice && eSplice
console.log("Slice "+ myArr.slice(1,3));
console.log("After Slice "+myArr)

console.log("Splice "+ myArr.splice(1,3));
console.log("After Splice "+myArr)