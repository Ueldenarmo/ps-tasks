function cleanArray(numbers, deleter) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (!deleter(numbers[i])) {
            result.push(numbers[i]);
        }
    }
    return result;
}
