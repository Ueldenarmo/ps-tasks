const numbers = [3, 7, 2, 9, 1];
const threshold = 10;

let found = false;
for (let i = 0; i < numbers.length; i++) {
    found = true;
    if (numbers[i] > threshold) {
        console.log(numbers[i]);
        break;
    }
}
if (!found) {
    console.log("Элемент не найден");
}
