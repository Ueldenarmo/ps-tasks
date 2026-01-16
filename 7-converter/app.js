function converterCurrency(amount, fromCurrency, toCurrency) {
    // Курс относительно рубля
    const RUB_TO_USD_RATE = 0.013;
    const RUB_TO_EURO_RATE = 0.011;

    const from = fromCurrency.toLowerCase();
    const to = toCurrency.toLowerCase();

    // одинаковая валюта
    if (from === to) {
        return amount;
    }

    //из рублей в доллары
    if (from === "rub" && to === "usd") {
        return amount * RUB_TO_USD_RATE;
    }

    //из долларов в рубли
    if (from === "usd" && to === "rub") {
        return amount / RUB_TO_USD_RATE;
    }
    //из рублей в евро
    if (from === "rub" && to === "euro") {
        return amount * RUB_TO_EURO_RATE;
    }

    //из евро в рубли
    if (from === "euro" && to === "rub") {
        return amount / RUB_TO_EURO_RATE;
    }

    //из долларов в евро
    if (from === "usd" && to === "euro") {
        const rubConvert = amount / RUB_TO_USD_RATE;
        return rubConvert * RUB_TO_EURO_RATE;
    }

    //из евро в доллары
    if (from === "euro" && to === "usd") {
        const rubConvert = amount / RUB_TO_EURO_RATE;
        return rubConvert * RUB_TO_USD_RATE;
    }

    return null;
}

console.log(converterCurrency(1000, "rub", "rub"));
console.log(converterCurrency(1000, "rub", "usd"));
console.log(converterCurrency(1000, "USD", "rub"));
console.log(converterCurrency(1000, "rub", "EURO"));
console.log(converterCurrency(1000, "euro", "rub"));
console.log(converterCurrency(1000, "euro", "usd"));
console.log(converterCurrency(1000, "usd", "euro"));
console.log(converterCurrency(1000, "usd", "byn"));
