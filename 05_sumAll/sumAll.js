const sumAll = function(num1, num2) {
    if (num1 <0 || num2 <0){
        return "ERROR";
    }
    else if (typeof num1 != "number"|| typeof num2 != "number"){
        return "ERROR";
    }

    let sum =0;
    for (let i=0;i<=Math.abs(num1 - num2); i++){
        if(sum == 0 && num1<num2){
            sum = num1;
        }
        else if (sum == 0 && num1>num2) {
            sum = num2;
        }
        else if(sum>0 && num1<num2){
            sum= sum + (num1 + i);
        }
        else if(sum>0 && num1>num2){
            sum = sum + (num2 +i);
        }
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
