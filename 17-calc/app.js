// переменные инпутов
let inputOne = document.querySelector(".firstInput");
let inputTwo = document.querySelector(".secondInput");
let resultField = document.querySelector(".result");

// переменные кнопок операций
let plusOperation = document.querySelector(".buttonForAddition");
let minusOperation = document.querySelector(".buttonForSubtraction");
let multiplyOperation = document.querySelector(".buttonForMultiplication");
let divideOperation = document.querySelector(".buttonForDivision");

// обработчик сложения
plusOperation.addEventListener("click", function () {
	let val1 = Number(inputOne.value);
	let val2 = Number(inputTwo.value);

	let sum = val1 + val2;

	resultField.innerText = sum;
	inputOne.value = "";
	inputTwo.value = "";
});

// обработчик вычитания
minusOperation.addEventListener("click", function () {
	let val1 = Number(inputOne.value);
	let val2 = Number(inputTwo.value);

	let differ = val1 - val2;

	resultField.innerText = differ;
	inputOne.value = "";
	inputTwo.value = "";
});

// обработчик умножения
multiplyOperation.addEventListener("click", function () {
	let val1 = Number(inputOne.value);
	let val2 = Number(inputTwo.value);

	let product = val1 * val2;

	resultField.innerText = product;
	inputOne.value = "";
	inputTwo.value = "";
});

// обработчик деления
divideOperation.addEventListener("click", function () {
	let val1 = Number(inputOne.value);
	let val2 = Number(inputTwo.value);

	if (val2 === 0) {
		resultField.innerText = "Ошибка: деление на 0!";
	} else {
		let quotient = val1 / val2;
		resultField.innerText = quotient;
	}

	inputOne.value = "";
	inputTwo.value = "";
});
