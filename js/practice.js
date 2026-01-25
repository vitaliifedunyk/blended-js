// ============================================================================
// МОДУЛЬ 1-2: ЗМІННІ, ТИПИ ДАНИХ, РЯДКИ, ОПЕРАТОРИ, ФУНКЦІЇ, РОЗГАЛУЖЕННЯ, ЦИКЛИ
// ============================================================================

// Завдання 1: Змінні та типи даних
// Створіть змінні різних типів: string, number, boolean, undefined, null.
// Напишіть функцію, яка виводить тип кожної змінної.

// function showTypes() {
//     let userName = 'Hello';
//     let age = 52;
//     let isAdult = true;
//     let typeUndefined = undefined;
//     let typeNull = null;

//     console.log("userName:", typeof userName);
//     console.log("age:", typeof age);
//     console.log("isAdult:", typeof isAdult);
//     console.log("typeUndefined:", typeof typeUndefined);
//     console.log("typeNull:", typeof typeNull);
// }

// Тести:
// console.log("Завдання 1:");
// showTypes();
// console.log("\n");

// !============================================================================

// Завдання 2: Оператори порівняння
// Напишіть функцію, яка приймає два числа і повертає true, якщо перше число
// більше за друге, інакше false.

// function isGreater(a, b) {
//     return res = a > b ? true : false;
// }

// Тести:
// console.log("Завдання 2:");
// console.log(isGreater(10, 5)); // Очікується: true
// console.log(isGreater(3, 7)); // Очікується: false
// console.log(isGreater(5, 5)); // Очікується: false
// console.log("\n");

//  !============================================================================

// Завдання 3: Рядки - конкатенація
// Напишіть функцію, яка приймає ім'я та прізвище і повертає повне ім'я.

// function getFullName(firstName, lastName) {
//     return `${firstName} ${lastName}`
// }

// Тести:
// console.log("Завдання 3:");
// console.log(getFullName("Іван", "Петренко")); // Очікується: "Іван Петренко"
// console.log(getFullName("Марія", "Коваленко")); // Очікується: "Марія Коваленко"
// console.log("\n");

// !============================================================================

// Завдання 4: Методи рядків - toLowerCase/toUpperCase
// Напишіть функцію, яка приймає рядок і повертає його у верхньому регістрі.

// function toUpperCase(str) {
//     return str.toUpperCase()
// }

// Тести:
// console.log("Завдання 4:");
// console.log(toUpperCase("hello")); // Очікується: "HELLO"
// console.log(toUpperCase("JavaScript")); // Очікується: "JAVASCRIPT"
// console.log("\n");

// !============================================================================

// Завдання 5: Методи рядків - length
// Напишіть функцію, яка перевіряє, чи довжина рядка більша за 10 символів.

// function isLongString(str) {
//     return res = str.length > 10 ? true : false;
// }

// Тести:
// console.log("Завдання 5:");
// console.log(isLongString("Hello")); // Очікується: false
// console.log(isLongString("Hello World!")); // Очікується: true
// console.log("\n");

// !============================================================================

// Завдання 6: Методи рядків - includes
// Напишіть функцію, яка перевіряє, чи містить рядок підрядок "JavaScript".

// function hasJavaScript(str) {
//     return str.includes("JavaScript")
// }

// Тести:
// console.log("Завдання 6:");
// console.log(hasJavaScript("I love JavaScript")); // Очікується: true
// console.log(hasJavaScript("I love Python")); // Очікується: false
// console.log("\n");

// !============================================================================

// Завдання 7: Розгалуження - if/else
// Напишіть функцію, яка перевіряє, чи число парне чи непарне.
// Поверніть "парне" або "непарне".

// function checkEvenOdd(num) {
//     return isPair = num % 2 === 0
//         ? `парне`
//         : `непарне`;
// }

// Тести:
// console.log("Завдання 7:");
// console.log(checkEvenOdd(4)); // Очікується: "парне"
// console.log(checkEvenOdd(7)); // Очікується: "непарне"
// console.log(checkEvenOdd(0)); // Очікується: "парне"
// console.log("\n");

// !============================================================================

// Завдання 8: Логічні оператори - &&
// Напишіть функцію, яка перевіряє, чи число знаходиться в діапазоні від 10 до 20.

// function isInRange(num) {
//     let range = num < 20 && num > 10
//     return range
// }

// Тести:
// console.log("Завдання 8:");
// console.log(isInRange(15)); // Очікується: true
// console.log(isInRange(5)); // Очікується: false
// console.log(isInRange(25)); // Очікується: false
// console.log(isInRange(11)); // Очікується: true
// console.log("\n");

// !============================================================================

// Завдання 9: Логічні оператори - ||
// Напишіть функцію, яка перевіряє, чи рядок дорівнює "так" або "yes".

// function isPositiveAnswer(answer) {
//     const isConfirmed = answer === 'так' || answer === 'yes';
//     return res = isConfirmed ? true : false
// }

// Тести:
// console.log("Завдання 9:");
// console.log(isPositiveAnswer("так")); // Очікується: true
// console.log(isPositiveAnswer("yes")); // Очікується: true
// console.log(isPositiveAnswer("ні")); // Очікується: false
// console.log("\n");

// !============================================================================

// Завдання 10: Цикл for - сума чисел
// Напишіть функцію, яка обчислює суму чисел від 1 до n.

// function sumToN(n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum += i
//     }
//     return sum
// }

// Тести:
// console.log("Завдання 10:");
// console.log(sumToN(5)); // Очікується: 15 (1+2+3+4+5)
// console.log(sumToN(10)); // Очікується: 55
// console.log(sumToN(1)); // Очікується: 1
// console.log("\n");

// !============================================================================

// Завдання 11: Цикл for - виведення парних чисел
// Напишіть функцію, яка виводить всі парні числа від 1 до n.

// function printEvenNumbers(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }

// Тести:
// console.log("Завдання 11:");
// printEvenNumbers(10); // Очікується: 2, 4, 6, 8, 10
// console.log("\n");

// !============================================================================

// Завдання 12: Цикл while - підрахунок
// Напишіть функцію, яка підраховує, скільки разів потрібно поділити число на 2,
// щоб отримати число менше 1.

// function countDivisions(num) {
//     let count = 0;
//     while (num >= 1) {
//         num = num / 2
//         count++
//     }
//     return count

// }

// Тести:
// console.log("Завдання 12:");
// console.log(countDivisions(16)); // Очікується: 5 (16->8->4->2->1->0.5)
// console.log(countDivisions(8)); // Очікується: 4
// console.log("\n");

// !============================================================================

// Завдання 13: Методи рядків - slice
// Напишіть функцію, яка повертає перші 3 символи рядка.

// function getFirstThree(str) {
//     return str.slice(0, 3)
// }

// Тести:
// console.log("Завдання 13:");
// console.log(getFirstThree("JavaScript")); // Очікується: "Jav"
// console.log(getFirstThree("Hello")); // Очікується: "Hel"
// console.log("\n");

// !============================================================================

// Завдання 14: Тернарний оператор
// Напишіть функцію, яка повертає "повнолітній", якщо вік >= 18, інакше "неповнолітній".
// Використайте тернарний оператор.

// function checkAge(age) {
//     return isAdult = age >= 18 ? `повнолітній` : `неповнолітній`;
// }

// Тести:
// console.log("Завдання 14:");
// console.log(checkAge(20)); // Очікується: "повнолітній"
// console.log(checkAge(16)); // Очікується: "неповнолітній"
// console.log("\n");

// !============================================================================

// Завдання 15: Функція з параметрами за замовчуванням
// Напишіть функцію привітання, яка приймає ім'я. Якщо ім'я не передано,
// використовуйте "Гість".

// function greet(name = "Гість") {
//     return `Привіт, ${name}`
// }

// Тести:
// console.log("Завдання 15:");
// console.log(greet("Іван")); // Очікується: "Привіт, Іван!"
// console.log(greet()); // Очікується: "Привіт, Гість!"
// console.log("\n");

// ============================================================================
// МОДУЛЬ 3-4: МАСИВИ, ФУНКЦІЇ (2), ОБ'ЄКТИ, МЕТОДИ, SPREAD/REST
// ============================================================================

// Завдання 16: Створення масиву
// Створіть масив з 5 чисел і напишіть функцію, яка повертає цей масив.

// function createNumberArray() {
//     const arr = [3, 4, 5, 6, 7];
//     return arr
// }

// Тести:
// console.log("Завдання 16:");
// console.log(createNumberArray()); // Очікується: масив з 5 чисел
// console.log("\n");

// !============================================================================

// Завдання 17: Доступ до елементів масиву
// Напишіть функцію, яка повертає перший і останній елемент масиву.

// function getFirstAndLast(arr) {
//     let lastElem = arr.length - 1
//     return { first: arr[0], last: arr[lastElem] }
// }

// Тести:
// console.log("Завдання 17:");
// console.log(getFirstAndLast([1, 2, 3, 4, 5])); // Очікується: { first: 1, last: 5 }
// console.log(getFirstAndLast(["a", "b", "c"])); // Очікується: { first: "a", last: "c" }
// console.log("\n");

// !============================================================================

// Завдання 18: Метод push
// Напишіть функцію, яка додає елемент в кінець масиву.

// function addToEnd(arr, element) {
//     let newArr = [...arr]
//     newArr.push(element)
//     return newArr
// }

// Тести:
// console.log("Завдання 18:");
// console.log(addToEnd([1, 2, 3], 4)); // Очікується: [1, 2, 3, 4]
// console.log(addToEnd(["a", "b"], "c")); // Очікується: ["a", "b", "c"]
// console.log("\n");

// !============================================================================

// Завдання 19: Метод pop
// Напишіть функцію, яка видаляє останній елемент з масиву і повертає його.

// function removeFromEnd(arr) {
//     return arr.pop();
// }

// Тести:
// console.log("Завдання 19:");
// const arr1 = [1, 2, 3, 4];
// console.log(removeFromEnd(arr1)); // Очікується: 4
// console.log(arr1); // Очікується: [1, 2, 3]
// console.log("\n");

// !============================================================================

// Завдання 20: Ітерація по масиву - for
// Напишіть функцію, яка виводить кожен елемент масиву.

// function printArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);

//     }
// }

// Тести:
// console.log("Завдання 20:");
// printArray([1, 2, 3, 4, 5]);
// console.log("\n");

// !============================================================================

// Завдання 21: Ітерація по масиву - for...of
// Напишіть функцію, яка обчислює суму всіх елементів масиву, використовуючи for...of.

// function sumArray(arr) {
//     let totalSum = 0;
//     for (const elem of arr) {
//         totalSum += elem
//     }
//     return totalSum
// }

// Тести:
// console.log("Завдання 21:");
// console.log(sumArray([1, 2, 3, 4, 5])); // Очікується: 15
// console.log(sumArray([10, 20, 30])); // Очікується: 60
// console.log("\n");

// !============================================================================

// Завдання 22: Методи масиву - includes
// Напишіть функцію, яка перевіряє, чи містить масив певний елемент.

// function hasElement(arr, element) {
//     return arr.includes(element)
// }

// Тести:
// console.log("Завдання 22:");
// console.log(hasElement([1, 2, 3, 4], 3)); // Очікується: true
// console.log(hasElement([1, 2, 3, 4], 5)); // Очікується: false
// console.log("\n");

// !============================================================================

// Завдання 23: Методи масиву - join
// Напишіть функцію, яка об'єднує елементи масиву в рядок через кому.

// function joinArray(arr) {
//     return arr.join(', ')
// }

// Тести:
// console.log("Завдання 23:");
// console.log(joinArray(["apple", "banana", "orange"])); // Очікується: "apple, banana, orange"
// console.log(joinArray([1, 2, 3])); // Очікується: "1, 2, 3"
// console.log("\n");

// !============================================================================

// Завдання 24: Методи масиву - split
// Напишіть функцію, яка розділяє рядок на масив слів.

// function splitString(str) {
//     return str.split(' ')
// }

// Тести:
// console.log("Завдання 24:");
// console.log(splitString("Hello World")); // Очікується: ["Hello", "World"]
// console.log(splitString("one two three")); // Очікується: ["one", "two", "three"]
// console.log("\n");

// !============================================================================

// Завдання 25: Створення об'єкта
// Створіть об'єкт "book" з властивостями: title, author, pages.

// function createBook(title, author, pages) {
//     let book = { title, author, pages }
//     return book
// }

// Тести:
// console.log("Завдання 25:");
// console.log(createBook("1984", "George Orwell", 328)); // Очікується: { title: "1984", author: "George Orwell", pages: 328 }
// console.log("\n");

// !============================================================================

// Завдання 26: Доступ до властивостей об'єкта
// Напишіть функцію, яка повертає значення властивості об'єкта за ключем.

// function getProperty(obj, key) {
//     return obj[key]
// }

// Тести:
// console.log("Завдання 26:");
// const person = { name: "Іван", age: 25, city: "Київ" };
// console.log(getProperty(person, "name")); // Очікується: "Іван"
// console.log(getProperty(person, "age")); // Очікується: 25
// console.log("\n");

// !============================================================================

// Завдання 27: Зміна властивостей об'єкта
// Напишіть функцію, яка змінює значення властивості об'єкта.

// function updateProperty(obj, key, value) {
//     obj[key] = value
//     return obj
// }

// Тести:
// console.log("Завдання 27:");
// const user = { name: "Іван", age: 25 };
// console.log(updateProperty(user, "age", 26)); // Очікується: { name: "Іван", age: 26 }
// console.log("\n");

// !============================================================================

// Завдання 28: Перебір об'єкта - for...in
// Напишіть функцію, яка виводить всі ключі об'єкта.

// function printKeys(obj) {
//     for (const key in obj) {
//         console.log(key);

//     }
// }

// Тести:
// console.log("Завдання 28:");
// printKeys({ name: "Іван", age: 25, city: "Київ" }); // Очікується: виведення: name, age, city
// console.log("\n");

// !============================================================================

// Завдання 29: Методи об'єкта
// Створіть об'єкт "calculator" з методами add і subtract.

// const calculator = {
//     add(a, b) {

//         return a += b
//     },
//     subtract(a, b) {
//         return a -= b
//     }
// };

// Тести:
// console.log("Завдання 29:");
// console.log(calculator.add(5, 3)); // Очікується: 8
// console.log(calculator.subtract(10, 4)); // Очікується: 6
// console.log("\n");

// !============================================================================

// Завдання 30: Масив об'єктів
// Створіть масив об'єктів "students" з властивостями name і grade.
// Напишіть функцію, яка виводить імена всіх студентів.

// function printStudentNames(students) {
// for (const elem of students) {
//     console.log(elem.name);
// }
//     students.forEach(student => {
//         console.log(student.name);
//     });
// }

// Тести:
// console.log("Завдання 30:");
// const students = [
//     { name: "Іван", grade: 90 },
//     { name: "Марія", grade: 85 },
//     { name: "Петро", grade: 92 }
// ];
// printStudentNames(students); // Очікується: Іван, Марія, Петро
// console.log("\n");

// !============================================================================

// Завдання 31: Пошук в масиві об'єктів
// Напишіть функцію, яка знаходить студента з найвищою оцінкою.

// function findTopStudent(students) {
//     let res = students[0];
//     for (const student of students) {
//         if (student.grade > res.grade) {
//             res = student

//         }
//     }
//     return res

// }

// Тести:
// console.log("Завдання 31:");
// const students = [
//     { name: "Іван", grade: 90 },
//     { name: "Марія", grade: 85 },
//     { name: "Петро", grade: 92 }
// ];
// console.log(findTopStudent(students));
// Очікується: { name: "Петро", grade: 92 }
// console.log("\n");

// !============================================================================

// Завдання 32: Spread оператор - копіювання масиву
// Напишіть функцію, яка створює копію масиву використовуючи spread.

// function copyArray(arr) {
//     return [...arr]
// }

// Тести:
// console.log("Завдання 32:");
// const original = [1, 2, 3];
// const copy = copyArray(original);
// copy.push(4);
// console.log(original); // Очікується: [1, 2, 3] (без змін)
// console.log(copy); // Очікується: [1, 2, 3, 4]
// console.log("\n");

// !============================================================================

// Завдання 33: Spread оператор - об'єднання масивів
// Напишіть функцію, яка об'єднує два масиви використовуючи spread.

// function mergeArrays(arr1, arr2) {
//     return [...arr1, ...arr2]
// }

// Тести:
// console.log("Завдання 33:");
// console.log(mergeArrays([1, 2], [3, 4])); // Очікується: [1, 2, 3, 4]
// console.log(mergeArrays(["a"], ["b", "c"])); // Очікується: ["a", "b", "c"]
// console.log("\n");

// !============================================================================

// Завдання 34: Spread оператор - копіювання об'єкта
// Напишіть функцію, яка створює копію об'єкта використовуючи spread.

// function copyObject(obj) {
//     return { ...obj }

// }

// Тести:
// console.log("Завдання 34:");
// const originalObj = { name: "Іван", age: 25 };
// const copyObj = copyObject(originalObj);
// copyObj.age = 26;
// console.log(originalObj); // Очікується: { name: "Іван", age: 25 } (без змін)
// console.log(copyObj); // Очікується: { name: "Іван", age: 26 }
// console.log("\n");

// !============================================================================

// Завдання 35: Rest параметр
// Напишіть функцію, яка приймає будь-яку кількість чисел і повертає їх суму.

// function sum(...numbers) {
//     let totalSum = 0;
//     for (const num of numbers) {
//         totalSum += num;
//     }
//     return totalSum
// }

// Тести:
// console.log("Завдання 35:");
// console.log(sum(1, 2, 3)); // Очікується: 6
// console.log(sum(10, 20, 30, 40)); // Очікується: 100
// console.log(sum(5)); // Очікується: 5
// console.log("\n");

// !============================================================================

// Завдання 36: Деструктуризація масиву
// Напишіть функцію, яка приймає масив з 3 елементів і повертає об'єкт
// з властивостями first, second, third.

// function destructureArray(arr) {
//     return {
//         first: arr[0], second: arr[1], third: arr[2]
//     }
// }

// Тести:
// console.log("Завдання 36:");
// console.log(destructureArray([1, 2, 3])); // Очікується: { first: 1, second: 2, third: 3 }
// console.log("\n");

// !============================================================================

// Завдання 37: Деструктуризація об'єкта
// Напишіть функцію, яка приймає об'єкт user і виводить його name та age
// використовуючи деструктуризацію.

// function printUser(user) {
//     console.log(`Ім'я: ${user.name}, Вік: ${user.age}`);

// }

// Тести:
// console.log("Завдання 37:");
// printUser({ name: "Іван", age: 25, city: "Київ" }); // Очікується: "Ім'я: Іван, Вік: 25"
// console.log("\n");

// !============================================================================

// Завдання 38: Методи масиву - indexOf
// Напишіть функцію, яка знаходить індекс елемента в масиві.

// function findIndex(arr, element) {
//     return arr.indexOf(element)
// }

// Тести:
// console.log("Завдання 38:");
// console.log(findIndex([10, 20, 30, 40], 30)); // Очікується: 2
// console.log(findIndex(["a", "b", "c"], "b")); // Очікується: 1
// console.log(findIndex([1, 2, 3], 5)); // Очікується: -1
// console.log("\n");

// !============================================================================

// Завдання 39: Методи масиву - slice
// Напишіть функцію, яка повертає частину масиву від start до end.

// function getSlice(arr, start, end) {
//     return arr.slice(start, end)
// }

// Тести:
// console.log("Завдання 39:");
// console.log(getSlice([1, 2, 3, 4, 5], 1, 4)); // Очікується: [2, 3, 4]
// console.log(getSlice(["a", "b", "c", "d"], 0, 2)); // Очікується: ["a", "b"]
// console.log("\n");

// !============================================================================

// Завдання 40: Комплексне завдання
// Створіть масив об'єктів "products" з властивостями: name, price, inStock.
// Напишіть функцію, яка:
// 1. Фільтрує товари, які є в наявності (inStock: true)
// 2. Повертає масив з назвами цих товарів

// function getAvailableProducts(products) {
//     let inStock = [];
//     for (const product of products) {
//         if (product.inStock) {
//             inStock.push(product.name)
//         }
//     }
//     return inStock
// }

// Тести:
// console.log("Завдання 40:");
// const products = [
//     { name: "Ноутбук", price: 25000, inStock: true },
//     { name: "Телефон", price: 15000, inStock: false },
//     { name: "Планшет", price: 10000, inStock: true },
//     { name: "Монітор", price: 8000, inStock: false }
// ];
// console.log(getAvailableProducts(products));// Очікується: ["Ноутбук", "Планшет"]

//!========================================================================

// Завдання 1: Робота з кошиком товарів
// Напишіть функцію getCartTotal(items), яка приймає масив об'єктів товарів
// Кожен товар має структуру: { name: 'Apple', price: 30, quantity: 2 }
// Функція повинна повертати загальну суму всіх товарів у кошику.
// Використайте цикл for...of.


// function getCartTotal(items) {
//     let totalSum = 0;
//     for (const item of items) {
//         let multiplay = item.price * item.quantity
//         totalSum += multiplay;
//     }
//     return totalSum

// }
// const cart = [
//     { name: "Laptop", price: 20000, quantity: 1 },
//     { name: "Mouse", price: 500, quantity: 2 },
//     { name: "Keyboard", price: 1200, quantity: 1 },
// ];

// console.log(getCartTotal(cart));
//!========================================================================

// Завдання 2: Пошук користувача за email
// Напишіть функцію findUserByEmail(users, email), яка:
// Приймає масив об'єктів користувачів та рядок з email.
// Повертає об'єкт користувача, якщо email збігається.
// Якщо користувача не знайдено — повертає рядок 'User not found'.

// function findUserByEmail(users, email) {
//     for (const user of users) {
//         if (user.email === email) {
//             return user
//         }
//     }
//     return `User not found`
// }

// const users = [
//     { id: 1, name: "Oleg", email: "oleg@gmail.com" },
//     { id: 2, name: "Anna", email: "ann.smart@ukr.net" },
//     { id: 3, name: "Igor", email: "igor_dev@outlook.com" },
// ];
// console.log(findUserByEmail(users, 'ann.smart@ukr.net'));

// //!========================================================================

// Завдання 3: Фільтрація за ціною
// Напишіть функцію filterProductsByPrice(products, minPrice), яка:
// Приймає масив товарів і мінімальну ціну.
// Повертає новий масив товарів, ціна яких більша або дорівнює minPrice.

// function filterProductsByPrice(products, minPrice) {
//     const newArr = [];
//     for (const product of products) {
//         if (product.price >= minPrice) {
//             newArr.push(product)
//         }
//     }
//     return newArr
// }

// const electronics = [
//     { name: "Phone", price: 8000 },
//     { name: "Tablet", price: 12000 },
//     { name: "Watch", price: 3000 },
// ];

// console.log(filterProductsByPrice(electronics, 9000));


// //!========================================================================

// Завдання 4: Оновлення статусу онлайн
// Напишіть функцію setOnlineStatus(users, namesArray), яка:
// Приймає масив всіх користувачів та масив імен тих, хто зайшов у мережу.
// Для кожного користувача, чиє ім'я є в namesArray, змініть status на 'online'.
// Іншим залиште або встановіть 'offline'. Поверніть змінений масив.

// function setOnlineStatus(users, namesArray) {
//     const newArr = users.map(user => ({ ...user }))
//     for (const user of newArr) {
//         if (namesArray.includes(user.name)) {
//             user.status = 'online'
// console.log(user.name);
//         } else {
//             user.status = 'offline'
//         }

//     }
//     return newArr

// }

// const allUsers = [
//     { name: "Ivan", status: "online" },
//     { name: "Maria", status: "offline" },
//     { name: "Petro", status: "offline" },
//     { name: "Vitalii", status: "online" },
//     { name: "Ninok", status: "online" },
// ];
// const onlineNames = ["Maria", "Petro"];
// console.log(setOnlineStatus(allUsers, onlineNames));


// //!========================================================================

// Завдання 5: Пошук найдорожчого товару
// Напишіть функцію getMostExpensiveProduct(products), яка:
// Приймає масив об'єктів { name, price }.
// Повертає назву (тільки рядок) найдорожчого товару.
// Якщо масив порожній, поверніть null.

// function getMostExpensiveProduct(products) {
//     if (products.length === 0) {
//         return null
//     }

//     let mostExpensive = products[0];

//     for (const product of products) {
//         if (product.price > mostExpensive.price) {
//             mostExpensive = product
//         }
//     }
//     return mostExpensive
// }

// const inventory = [
//     { name: "Bicycle", price: 15000 },
//     { name: "Helmet", price: 1200 },
//     { name: "Gloves", price: 18000 },
// ];
// console.log(getMostExpensiveProduct(inventory));


// //!========================================================================

// Завдання 6: Список імен певного віку
// Напишіть функцію getNamesByAge(people, ageLimit), яка:
// Приймає масив об'єктів людей { name: "Ivan", age: 25 }.
// Повертає масив імен (тільки рядки) тих людей, чий вік старше за ageLimit.

// function getNamesByAge(people, ageLimit) {
//     if (people.length === 0) {
//         return null
//     }
//     const newArr = [];
//     for (const element of people) {
//         if (element.age > ageLimit) {
//             newArr.push(element.name)
//         }
//     }
//     return newArr
// }

// const friends = [
//     { name: "Victor", age: 21 },
//     { name: "Gulia", age: 26 },
//     { name: "Denis", age: 18 },
//     { name: "Vitalii", age: 28 },
//     { name: "Ninok", age: 23 },
// ];

// console.log(getNamesByAge(friends, 21));


// //!========================================================================

// Завдання 7: Перевірка наявності навичок
// Напишіть функцію checkSkill(developers, skillName), яка:
// Приймає масив розробників. У кожного є властивість skills (масив рядків).
// Повертає масив імен розробників, які володіють навичкою skillName.

// function checkSkill(developers, skillName) {
//     if (developers.length === 0) {
//         return null

//     }
//     const haveSkill = [];

//     for (const developer of developers) {
//         const checkSkill = developer.skills
//         if (checkSkill.includes(skillName)) {
//             haveSkill.push(developer.name)
//         }
//     }
//     return haveSkill
// }

// const team = [
//     { name: "Alex", skills: ["HTML", "CSS", "JS"] },
//     { name: "Olga", skills: ["JS", "React"] },
//     { name: "Stas", skills: ["Python", "Django"] },
//     { name: "Helen", skills: ["JS", "Django"] },
//     { name: "Andrew", skills: ["Python", "JS"] },
//     { name: "Mark", skills: ["Python", "Django"] },
// ];

// console.log(checkSkill(team, "JS"));


// //!========================================================================

// Завдання 8: Розрахунок середнього балу
// Напишіть функцію getAverageGrade(students), яка:
// Приймає масив студентів { name: "Ann", grade: 95 }.
// Повертає середній бал усіх студентів.
// Додайте перевірку: якщо масив порожній, поверніть 0.

// function getAverageGrade(students) {
//     if (students.length === 0) {
//         return 0
//     }

//     let mediumGrade = 0;

//     for (const student of students) {
//         mediumGrade += student.grade
//     }

//     return mediumGrade / students.length
// }

// const students = [
//     { name: "Taras", grade: 80 },
//     { name: "Svitlana", grade: 92 },
//     { name: "Andriy", grade: 74 },
// ];

// console.log(getAverageGrade(students));


// //!========================================================================

// // Завдання 9: Групування за категорією
// // Напишіть функцію countByCategory(items, categoryName), яка:
// // Приймає масив об'єктів { title: "...", category: "..." }.
// // Повертає кількість (число) елементів, що належать до вказаної категорії.

// const library = [
//     { title: "The Hobbit", category: "Fantasy" },
//     { title: "1984", category: "Dystopian" },
//     { title: "Harry Potter", category: "Fantasy" },
// ];

// //!========================================================================

// // Завдання 10: Створення об'єкта статистики
// // Напишіть функцію getSalaryStats(employees), яка:
// // Приймає масив працівників { name: "John", salary: 1000 }.
// // Повертає об'єкт з трьома властивостями:
// // { total: загальна_сума, min: мінімальна, max: максимальна }
// // Якщо масив порожній, поверніть повідомлення "No data".

// const employees = [
//     { name: "Manager", salary: 2500 },
//     { name: "Developer", salary: 4000 },
//     { name: "Designer", salary: 2100 },
// ];