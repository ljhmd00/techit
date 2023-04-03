// const fruits = ["apple", "banana", "orange", "kiwi"];
// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//     return console.log(fruits[i]);
// }

// fruits.map((v, i) => {
//     console.log(`${i + 1}번째 과일:${v}`);
// });

// const array = [1, 2, 4, 8];

// const squareArray = array.map((v) => v * v);
// // console.log(squareArray);

// const squareArray2 = [];
// for (let i = 0; i < array.length; i++) {
//     squareArray2.push(array[i] * array[i]);
// }
// console.log(squareArray);
// console.log(squareArray2);

//삼항연산자
let age = 26;

let beverage = age >= 20 ? "Beer" : "Coke";
console.log(beverage);

if (age >= 20) {
    beverage = "Beer";
} else {
    beverage = "Coke";
}
console.log(beverage);
