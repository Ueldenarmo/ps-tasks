const mixedArray = ["apple", 25, "banana", false, "cherry", null, "date", 100];
const stringElements = [];

for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === "string") {
        stringElements.push(mixedArray[i]);
    }
    continue;
}

console.log(stringElements);
