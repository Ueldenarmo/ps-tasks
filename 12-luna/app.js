const num1 = "4561-2612-1234-5464";
const num2 = "4992 7398 716";

function luhnCheck(cardNumber) {
    const digits = cardNumber.replace(/-/g, "").replace(/\s+/g, "").split("").map(Number);
    const sum = digits
        .reverse()
        .map((digit, index) => {
            if (index % 2 !== 0) {
                let doubled = digit * 2;
                return doubled > 9 ? doubled - 9 : doubled;
            }
            return digit;
        })
        .reduce((acc, val) => acc + val, 0);

    return sum % 10 === 0;
}

console.log(luhnCheck(num1));
console.log(luhnCheck(num2));
