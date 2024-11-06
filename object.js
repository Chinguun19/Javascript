// const car = {
//     manufacturer: "Automobili Lamborghini",
//     model: "Lamborghini Huracan",
//     color: "Yellow",
//     fuelType: "Petrol",
//     seatingCapacity: 2,
//     bodyType: "Coupe",
//     engineType: "V Type Petrol Engine",
//     price: 250000,
// }
// console.log(car)




function filterBooksByYear(date){
const books = [{ title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },   { title: "1984", author: "George Orwell", year: 1949 },   { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },   { title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", year: 1967 },   { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }]
let filteredBooks = [];

for(let i = 0; i<books.length; i++){
if(books[i].year >= date ){
    filteredBooks = [...filteredBooks, books[i]];

}
}
console.log(filteredBooks);
}
filterBooksByYear(1960)