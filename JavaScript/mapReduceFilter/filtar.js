const numbers = [1,2,3,4,5,6,7];
// const filterNum = numbers.filter((item) => {return item>4});
// console.log(filterNum);

const myNums = [];
numbers.forEach((item) => {
    if (item > 4) {
        myNums.push(item);
    }
})
console.log(myNums);