// 1
const book = {
  title: "Мастер и Маргарита",
  author: "Булгаков М.А.",
  year: 1967,
  pages: 480,
  available: true,
  info() {
    return `«${this.title}», ${this.author}, ${this.year} г., ${this.pages} стр.`;
  }
};

console.log("Инфо о книге:", book.info());

// 2
const { title, author, rating = 0 } = book;
console.log("\nДеструктуризация:");
console.log(`title: "${title}"`);
console.log(`author: "${author}"`);
console.log(`rating: ${rating}`); // 0, т.к. поля rating в объекте нет

// 3
const students = [
  { name: "Анна", grade: 4.8, passed: true },
  { name: "Борис", grade: 2.9, passed: false },
  { name: "Вера", grade: 3.5, passed: true },
  { name: "Григорий", grade: 4.1, passed: true },
  { name: "Дарья", grade: 2.5, passed: false },
];

//  Имена сдавших 
const passedNames = students
  .filter(s => s.passed)
  .map(s => s.name);
console.log("\nСдали экзамен:", passedNames.join(", "));

//  выше 4.5
const topStudent = students.find(s => s.grade > 4.5);
console.log("Лучший студент:", topStudent);

//  Средний балл 
const averageGrade = students.reduce((sum, s) => sum + s.grade, 0) / students.length;
console.log("Средний балл группы:", averageGrade.toFixed(2));

// 4
function mergeUsers(user1, user2) {
  return { ...user1, ...user2 }; // user2 перезаписывает совпадающие ключи
}

const u1 = { name: "Иван", age: 20, city: "Казань" };
const u2 = { name: "Иван Петров", email: "ivan@mail.ru", city: "Москва" };
const merged = mergeUsers(u1, u2);
console.log("\nОбъединённый пользователь:", merged);

// 5
function countByField(arr, field) {
  return arr.reduce((acc, obj) => {
    const value = obj[field];
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

const passedCounts = countByField(students, "passed");
console.log("\nСчётчик по полю 'passed':", passedCounts);