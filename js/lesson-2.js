// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// console.log(styles);
// console.log(styles.indexOf("blues"));
// styles[1] = "classic";
// console.log(styles);

// function logItems(array, startFrom = 1) {
//   let count = startFrom;
//   for (const item of array) {
//     console.log(`${count} - ${item}`);
//     count++;
//   }
// }
// logItems(styles);

//!========================================================================
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   let userName = prompt("Введіть імʼя");
//   if (array.includes(userName)) {
//     return alert(`Welcome, ${userName}!`);
//   }
//   return alert(`User not found`);
// }
// checkLogin(logins);
//!========================================================================
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function calculateAverage(...args) {
//   for (let arg of args) {
//     if (typeof arg !== "number") {
//       return "Error: All arguments must be numbers";
//     }
//   }

//   let sum = 0;
//   for (let arg of args) {
//     sum += arg;
//   }

//   return sum / args.length;
// }

// function calculateAverage(...args) {
//   if (!args.every((arg) => typeof arg === "number")) {
//     return "Error: All arguments must be numbers";
//   }
//   const sum = args.reduce((acc, num) => (acc += num), 0);
//   return sum / args.length;
// }

// console.log(calculateAverage(10, 14, 15)); // 13
// console.log(calculateAverage(5, 10, 15, 20)); // 12.5
// console.log(calculateAverage(100)); // 100
// console.log(calculateAverage(10, "test", 15)); // Error або false
// console.log(calculateAverage()); // NaN або Error
//!========================================================================
// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// console.log(someArr);

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// function calculateTotal(someArr) {
//   const newArray = [];
//   for (let i = 0; i < someArr.length - 1; i++) {
//     const sum = (someArr[i] += someArr[i + 1]);
// console.log(i);
// console.log(sum);
//     newArray.push(sum);
//   }
//   return newArray;
// }
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// const result = calculateTotal(someArr);
// console.log(result);
// [33, 45, 39, 17, 25, 27, 29] ✅

// console.log(calculateTotal([1, 2, 3])); // [3, 5]
// console.log(calculateTotal([10, 20])); // [30]
// console.log(calculateTotal([5])); // []
// console.log(calculateTotal([1, 1, 1, 1, 1])); // [2, 2, 2, 2]

// calculateTotal(someArr);

//!========================================================================
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(numbers) {
//   let minNum = Array.isArray(numbers)
//     ? Math.min(...numbers)
//     : `Sory, it is not an array!`;
//   return minNum;
// }

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// const result = findSmallestNumber(numbers);
// console.log(result);
//!========================================================================
// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

function findLongestWord(string) {
  let word = string.split(" ");
  // console.log(word);
  let long = "";

  for (let i = 0; i < word.length; i++) {
    if (long.length < word[i].length) {
      long = word[i];
    }
  }
  return long;
}
console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'
//!========================================================================
// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };
//!========================================================================
// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };
//!========================================================================
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'
//!========================================================================
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
//   ];
//!========================================================================
