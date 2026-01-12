const languageDefine = prompt("Напишите один из трех языков в формате en, ru, de");

switch (languageDefine) {
    case "en":
        console.log("Good afternoon!");
        break;
    case "de":
        console.log("Gutten tag!");
        break;
    case "ru":
        console.log("Добрый день!");
        break;
    default:
        console.log("Пожалуйста, выберете именно en, ru или de!");
}
