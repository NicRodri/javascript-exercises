const repeatString = function(word, repeats) {
    let str = "";
    for(let i = 0; i< repeats; i++){
        str = str + word;
    }
    if (repeats <0){
        return "ERROR";
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
