const palindromes = function (a) {
    let splitString = a.split("");
    function letter(char){
        let letter = ['.', '?' , '!', ' ', ','];
        for(let i =0; i<letter.length; i++){
            if(letter[i]== char){
                return false;
            }
        }
        return true;
    }
    let onlyLetters = splitString.filter(letter).join("").toLowerCase(); 
    function reverseString(str){
        if(str === ""){
            return "";
        }
        else {
            return reverseString(str.substr(1)) + str.charAt(0);
        }
    }
    return (onlyLetters == reverseString(onlyLetters));
   
    
};



// Do not edit below this line
module.exports = palindromes;
