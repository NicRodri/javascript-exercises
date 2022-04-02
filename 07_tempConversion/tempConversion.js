const ftoc = function(tempF) {
    let tempC = (tempF-32)*(5/9);
    let roundedTempC = Math.round(tempC*10)/10;
    return roundedTempC;
};

const ctof = function(tempC) {
    let tempF = (tempC*1.8) +32;
    let roundedTempF = Math.round(tempF*10)/10;
    return roundedTempF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
