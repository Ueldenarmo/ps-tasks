"use strict";

const number = 42;
const person = { name: "Alice" };

console.log(`Значение числа: ${number}`);
console.log(`Имя до изменения: ${person.name}`);

person.name = "Bob";

console.log(`Имя после изменения: ${person.name}`);
