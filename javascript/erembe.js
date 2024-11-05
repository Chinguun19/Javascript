


let a = 500, b = 500, c = 503;

if (a >= b && b > c) {
    console.log(a, b, c);
} else if (b >= a && a > c) {
    console.log(b, a, c);
} else if (c >= a && a > b) {
    console.log(c, a, b);
} else if (a >= c && c > b) {
    console.log(a, c, b);
} else if (c >= b && b > a) {
    console.log(c, b, a);
} else if (b >= c && c > a) {
    console.log(b, c, a);
} else {  
    console.log("Tentsuu");
}
