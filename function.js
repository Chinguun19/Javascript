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

findDigitCount(2221, 2); 

function nNumber(number){
   number = n
    while(n === d){
        d = n - 1
        d+
        console.log(d)
    }
    }
nNumber(5)
