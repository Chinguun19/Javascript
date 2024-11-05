let favoriteColors = ["Black","Yellow", "Blue", "Green", "White"];
favoriteColors[2] = "Purple";
console.log(favoriteColors)

let levelsCompleted = [true, true, true, true, true]
levelsCompleted.shift = true;
console.log(levelsCompleted)

let destinations = ["Ulaanbaatar", "Seoul", "Tokyo", "London", "Berlin"]
destinations.shift()
console.log(destinations)
destinations.unshift("New York")
console.log(destinations)

let ages = [18, 21, 22, 20, 23 ,36, 79,]
operation = ages.map (x => x += 5) 
console.log(operation)

let numbers = [2, 4, 5, 7, 12, 1, 8, 9, 21, 18, 14, 25, 30, 24, 27,]
let sum = 0;
for (let index = 0; index < numbers.length; index++){
    sum += numbers[index];
}
console.log(sum)

numbers.sort((a,b) => b - a);
let max = numbers[0]
let min = numbers[14]
console.log(max)
console.log(min)

numbers.unshift(99)
console.log(numbers)

numbers.push(999)
console.log(numbers)

let even = [];
let odd = [];
numbers.forEach((num) => {
    if (num % 2 === 1) {
        odd.push(num);

    } else {
        even.push(num)
    }
});
let length = odd.length
let length2 = even.length 
console.log("Odd:", length)
console.log("Even:", length2)

///console.log(odd);
///console.log(even)

let a = 0;
let b = 1;
c = a + b
console.log(c)