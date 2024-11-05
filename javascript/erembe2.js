// let a = 1;
// sum = 0
//     while (a <= 20) {
//         sum = sum + a
//         a++
//         console.log(sum)
        
//     }


// let a = 1
// while (a < 20) {
//     if ( a % 2 == 1) {
//         console.log(a)
//     }
//     a++
// }

// let a = 10; 
// let factorial = 1;
// let i = 1;

// while (i <= a) {
//     factorial *= i;
//     i++;
// }

// console.log(a);

// let a = 3;
// let b = 1;
// let c;

// while (b <= 10) {
//     c = a * b;  
//     console.log(`${a} * ${b} = ${c}`); 
//     b++;
// }

document.getElementById("checkButton").onclick = function(){

let num1 = document.getElementById("numberInput").value;
let reversed = "";
num1 = Number(num1)
if (isNaN(num1)) {
    document.getElementById("result").textContent = "Too oruulna uu!";
    
}



while (num1 > 0) {
    let lastDigit = ( num1 % 10);  
    reversed = (reversed + lastDigit);  
    num1 = Math.floor(num1 / 10);  
}

 document.getElementById("result").textContent = reversed
}
