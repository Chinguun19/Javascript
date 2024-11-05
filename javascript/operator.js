let a = 4;
let b = 3;
let c = "4"
let d = 10 
let e = 12
console.log(a > b);
console.log(b > a);
console.log(a >= b) && (b >= a);
console.log(a == a);
console.log(a === a);
console.log(a == a);
console.log(a != c);
console.log(a === c);
console.log(a == c);
console.log(a > b) && (d < e);
console.log(a > b) && (d > e);
console.log(a > b) || (d < e);
console.log(a > b) || (d > e);
console.log(a < b) || (d > e);
console.log(!(4 > 3)) // False
console.log(!(4 < 3)) // True
console.log(!(4 > 3 && 10 < 12)); // False
console.log(!(4 > 3 && 10 > 12)) // True
console.log(!(4 === "4")) // True