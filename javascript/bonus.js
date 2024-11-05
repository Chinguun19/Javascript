// let loop_num = 0;

// while (loop_num <= 100) {
//     if (loop_num === 50) {
//         console.log("Half way there!");
//     } else if (loop_num === 100) {
//         console.log("You made it!");
//     } else if (loop_num % 10 === 0) {
//         console.log("Checkpoint!", loop_num);
//     }
//     loop_num += 10;
// }

// console.log("All done!");


// let day = 1;
// let loop_num = 0;

// while (loop_num <= 100) {
//     if (loop_num >= 70 && loop_num < 100) {
//         console.log("Таны нийт зардал 100$ руу ойртож байна шүү");
//     } else if (loop_num === 100) {
//         console.log("Та зардлын хязгаарт хүрлээ!");
//         break;  
//     }

//     if (day > 5) {
//         loop_num += 25;
//     } else {
//         loop_num += 10;
//     }
//     console.log(day, loop_num);  


//     if (day >= 7) {
//         day = 1;
//     } else {
//         day++;
//     }
// }



// Худалдан авсан кофены тоогоор ажиллах давталт үүсгээрэй.
// Худалдан авалт бүрт ç  гэж хэвлэ.
// 3 дахь удаагийн худалдан авалт бүрийн дараа  "Танд үнэгүй бялуу бэлэглжу байна” гэж хэвлэ.
// 10 дахь худалдан авалтанд "Баяр хүргэе! Та үнэгүй кофе авлаа!" гэж хэвлэ.
// Давталт дууссаны дараа: "Урамшууллын карт дууслаа!" гэж хэвлэ.
 




// let loop_num = 1;

// while (loop_num <= 10) {
//     console.log("Та", loop_num ,"дахь кофегоо худалдан авлаа")
//     if (loop_num % 3 === 0) {
//         console.log("Танд үнэгүй бялуу бэлэглжу байна");
//     } else if(loop_num==10) {
//         console.log("Баяр хүргэе! Та үнэгүй кофе авлаа!")
//     }
//     loop_num ++;
// }
// console.log("Урамшууллын карт дууслаа!");

// let a = 107
// let b = 101
// let c = 102
// let d = 100

// if (a >= b && b > c && c > d) {
//     console.log(b);
// } else if (b >= a && a >= c && c > d ) {
//     console.log(a);
// } else if (c >= a && a >= d && d > b ) {
//     console.log(a);
// } else if (a >= d && d >= b && b > c ) {
//     console.log(d);
// } else if (d >= b && b >= c && c > a ) {
//     console.log(b);
// } else if (c >= a && a >= b && b > d) {
//     console.log(a);
// } else if (a >= c && c >= b && b > d) {
//     console.log(c);
// } else if (a >= d && d >= c && c > b) {
//     console.log(d);
// } else if (c >= b && b >= a && a > d) {
//     console.log(b);
// } else if (b >= c && c >= a && a > d) {
//     console.log(c);
// } else if (d >= a && a >= b && b > c) {
//     console.log(a);
// } else if (d >= c && c >= a && a > b) {
//     console.log(c);
// } else if (d >= a && a >= c && c > b) {
//     console.log(a);
// } else if (c >= d && d >= a && a > b) {
//     console.log(d);
// } else if (b >= c && c >= d && d > a) {
//     console.log(c);
// } else if (a >= c && c >= d && d > b) {
//     console.log(c);
// } else if (b >= d && d >= a && a > c) {
//     console.log(d);
// } else if (c >= b && b >= d && d > a) {
//     console.log(b);
// } else if (b == c && c == d && d == a) {
//     console.log("Tentsuu");
// } else {  
//     console.log("Tentsuu");
// }

// const a = 3; 
// const l = 999; 
// const d = 3; 

// const n = ((l - a) / d) + 1; 
// const sum = (n / 2) * (a + l); 

// console.log(sum); 

let scores = [168, 175, 175, 172, 174, 175, 190, 200, 184, 186];
let average2;
let average3;


let total = scores.reduce((acc, score) => acc + score, 0);
let average = Math.floor(total / scores.length);
console.log("Average:", average);


scores.sort((a, b) => a - b);
console.log("Sorted Scores:", scores);
average2 = average - 4;
average3 = average + 4;

let categorizedScores = scores.map(score => {
    if (score >= average2 && score <= average3) {
        return { score: score, category: "1r egnee" };
    } else if (score > average3) {
        return { score: score, category: "2r egnee" };
    } else {
        return { score: score, category: "3r egnee" };
    }
});


console.log("Categorized Scores:", categorizedScores);


