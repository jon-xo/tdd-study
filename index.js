// Function that accepts int and outputs roman numeral string

// Red / Green / Refactor

const intToRomanNumeral = (int) => {
    if(Number.isInteger(int)){        
        return "I";
    } else {
        throw new Error("Parameter not a number");
    }
};

module.exports = intToRomanNumeral;