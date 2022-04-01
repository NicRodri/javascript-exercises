const reverseString = function(words) {
    let str = words.split("");
    let reverseStr = str.reverse();
    let joinArray = reverseStr.join("");
    return joinArray;

};

// Do not edit below this line
module.exports = reverseString;
