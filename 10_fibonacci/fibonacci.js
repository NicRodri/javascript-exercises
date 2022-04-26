const fibonacci = function(a) {

    let fib = 0;
    let fibn1 = 1;
    let fibn2 = 1;

    if(a == 1 || a == 2){
        return 1;
    }

    if(a < 0){
        return "OOPS";
    }


    for(let i=2; i<Number(a); i++){
        fib = fibn1 + fibn2;
        fibn2 = fibn1;
        fibn1 = fib;
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
