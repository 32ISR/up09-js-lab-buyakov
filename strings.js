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