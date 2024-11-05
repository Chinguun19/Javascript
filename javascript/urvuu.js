let num1 = 120;
let result = "";
let isLeadingZero = true;

while (num1 > 0) {
    let lastDigit = num1 % 10;  
    if (lastDigit !== 0 || !isLeadingZero) { 
        result += lastDigit; 
        isLeadingZero = false;  
    } else if (lastDigit === 0 && result !== "") {
        result += lastDigit;  
    }
    num1 = Math.floor(num1 / 10);  1
}

console.log(result === "" ? "0" : result);  
