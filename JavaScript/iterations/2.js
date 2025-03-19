const strval = "abcba";

function palindrom(str) {
    let newstr = "";
    for (let i = str.length-1; i >=0; i--) {
        newstr = newstr + str[i];
    }

    if (newstr === str) {
        return true;
    } else {
        return false;
    }
}

console.log(palindrom(strval));