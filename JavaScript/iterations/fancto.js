function fact(value) {
    if(value == 0 || value ==1){
        return 1;
    }
    else{
    return value * fact(value-1);
    }
}

console.log(fact(4));
