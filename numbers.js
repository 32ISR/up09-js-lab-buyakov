let temperature = 36.6789;
console.log("Температура:", temperature.toFixed(1));

let a = 17;
let b = 5;
console.log("Целочисленное деление:", Math.floor(a/b));
console.log("Остаток от деления:", a % b);

let randNumber = Math.floor(Math.random() * 10) + 1;
console.log("Случайное число:", randNumber);

console.log('Проверка "100" / 5: ', isNaN("100" / 5));
console.log('Проверка "сто" / 5: ', isNaN("сто" / 5));


let numbers =  [14, -3, 77, 0, -100, 42];
console.log("Макс число:", Math.max(...numbers));
console.log("Мин число:", Math.min(...numbers));
