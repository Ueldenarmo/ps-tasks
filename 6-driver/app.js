const hasLicence = true;
const age = 25;
const isDrunk = true;

let canDrive = hasLicence && age >= 18 && !isDrunk ? "может" : "не может";
console.log(canDrive);
