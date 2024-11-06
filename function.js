function calculateProblems(){
    totalHours = 3
    problemsPerHour = totalHours / 2;
    console.log(`I study for ${totalHours} hours to solve ${problemsPerHour} problems.`);

}
calculateProblems()

function printFavoriteFood(name,food){
    console.log(` ${name} loves to eat ${food}.`)
}
printFavoriteFood("Sara", "Pizza")

function printWeather(cityName, weather) {
    console.log(`${cityName} хотод ${weather}°C байна.`)
}
printWeather("Chicago", 32)

function printBookDetails(title, author, yearPublished){
    console.log(`${author} wrote ${title} in ${yearPublished}`)
}
printBookDetails("Harry Potter", "J.K. Rowling", 1987);

function calculateArea (width, height){
    let area;
    area = width * height;
    console.log("Area:" + area)
}
calculateArea(10, 20);

function calculateVolume(width, length, depth) {
    let volume;
    volume = length * width * depth;
    console.log(`Volume: ${volume}`)
}
calculateVolume(10,20,30)

function prinTicketInfo (eventName, ticketPrice, discount){
    console.log(`even`)
}

function findDigitCount(number, digit) {
    let count = 0;
    while (number > 0) {
        if (number % 10 === digit) {
            count++;
        }
        number = Math.floor(number / 10);
    }
    console.log(count);
    return count;
}

findDigitCount(212, 2); 

function nNumber(n) {
    for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += j + " ";
      }
      console.log(row);
    }
  }
  

  nNumber(5);
  
  function OrgilYrool(Input) {
    Input.shift(); 
    Input.pop(); 

    for (let indexF = 0, indexS = 1, indexL = 2, count = 0; indexL < Input.length; indexF ++, indexS ++, indexL ++, count++) {
        let firstN = Input[indexF];
        let secondN = Input[indexS];
        let thirdN = Input[indexL];
        
        if (firstN < secondN && secondN > thirdN) {
            console.log("Orgil")
            console.log(firstN, secondN, thirdN);
        }
    }
    for (let indexF = 0, indexS = 1, indexL = 2, count = 0; indexL < Input.length; indexF ++, indexS ++, indexL ++, count++) {
        let firstN = Input[indexF];
        let secondN = Input[indexS];
        let thirdN = Input[indexL];
        
        if (firstN > secondN && secondN < thirdN) {
            console.log("Yrool")
            console.log(firstN, secondN, thirdN);
        }
    }
}



OrgilYrool([1, 2, 5, 4, 1, 9, 6, 5, 3, 4, 1, -2]);


function findSecondIncreasingNumber(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            return arr[i + 1]; 
        }
    }
    return null; 
}

const result = findSecondIncreasingNumber([1, 2, 5, 3, 7, 6]);
console.log(result); 
