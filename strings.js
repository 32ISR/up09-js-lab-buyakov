let sentence = "  javascript - это просто!   ";
let cleanSentence = sentence.trim();
let result = cleanSentence[0].toUpperCase() + cleanSentence.slice(1);
console.log(result);

let name = "Иванов Иван";
let group = "ИСР-21";
let averageScore = 4.75;
let student = `Студент ${name}, группа ${group}, средний балл: ${averageScore}`;
console.log(student);


let date = "2025-03-15";
let parts = date.split("-");
let formattedDate = `${parts[2]}. ${parts[1]} . ${parts[0]}`;
console.log(formattedDate);



//4

const str = "Node.js разработчик";

const startsWithNode = str.startsWith("Node");
const endsWithDev = str.endsWith("разработчик");

console.log(`Строка: "${str}"`);
console.log(`Начинается с "Node": ${startsWithNode}`);
console.log(`Заканчивается на "разработчик": ${endsWithDev}`);

// 5
const accountNumber = 42;
const formatted = String(accountNumber).padStart(8, "0");

console.log(`\nИсходный номер: ${accountNumber}`);
console.log(`Отформатированный: "${formatted}"`);