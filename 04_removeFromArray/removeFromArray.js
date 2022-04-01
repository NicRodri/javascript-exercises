const removeFromArray = function(array, ...removes) {
    let arr = array;
    for (let i =0; i< removes.length; i++){
        if (arr.includes(removes[i])){
            arr.splice(arr.indexOf(removes[i]),1);
        }
    }
    return arr;
}
console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
