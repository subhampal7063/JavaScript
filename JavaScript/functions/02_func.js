function calCart(...products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        sum+=products[i];
    }
    return sum
}

console.log(calCart(100,200,300));

const user = {
    username : "Subham",
    price : 299
}

function objecthandle(param){
    return param.price;
}

console.log(objecthandle(user));

console.log(objecthandle({
    username : "Lauda",
    price : 6000
}));
