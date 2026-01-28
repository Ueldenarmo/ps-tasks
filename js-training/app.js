// function createDivider(divisor) {
//     if (divisor !== 0) {
//         return function doDivide(value) {
//             return value / divisor;
//         };
//     }
//     console.error(`Делитель не должен быть равен нулю`);
// }

// Тестирование
// const divideByTwo = createDivider(0);
// console.log(divideByTwo(10)); // 5

// const divideByFour = createDivider(4);
// console.log(divideByFour(20)); // 5

function calculate(x, y, operation) {
    return operation(x, y);
}

function createPower(power) {
    return function doPower(value) {
        return value ** power;
    };
}
