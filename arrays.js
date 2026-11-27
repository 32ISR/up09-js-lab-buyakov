const grades = [4, 5, 3, 5, 2, 4, 5, 3];

const sum = grades.reduce((acc, grade) => acc + grade, 0);
const average = sum / grades.length;
const roundedAverage = parseFloat(average.toFixed(2));
console.log(`Средний балл: ${roundedAverage}`);

//2
const upThree = grades.filter(num => num > 3);

const upThreeString = upThree.map(n => console.log( `Оценка: "${n}"`))

// 3
const fruits = ["банан", "яблоко", "вишня", "абрикос", "груша"];
const sortedFruits = [...fruits].sort(); // копия, чтобы не мутировать исходный массив
console.log("Фрукты по алфавиту:", sortedFruits.join(", "));

// 4
const products = [
  { name: "Ноутбук", price: 75000 },
  { name: "Мышь", price: 1500 },
  { name: "Монитор", price: 32000 },
  { name: "Клавиатура", price: 3500 },
  { name: "Наушники", price: 8000 }
];

//  товары дешевле 10 000 
const cheapProducts = products.filter(p => p.price < 10000);
console.log("\nТовары дешевле 10 000 ₽:");
console.log(cheapProducts);

// map 
const productNames = products.map(p => p.name);
console.log("\nНазвания товаров:", productNames);

// reduce 
const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
console.log("\nСуммарная стоимость:", totalPrice, "₽");

// 5
const numbers = [12, 45, 7, 33, 18];

const hasOver40 = numbers.some(n => n > 40);
const allOver5 = numbers.every(n => n > 5);

console.log("\nМассив:", numbers);
console.log("Есть ли число > 40?", hasOver40);
console.log("Все ли числа > 5?", allOver5);
