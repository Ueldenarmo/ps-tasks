const stringArray = ["10-02-2022", "тест", "11/12/2023", "00/13/2022", "41/12/2023"];

function filterAndFormatDates(stringArray) {
    let result = [];

    for (let element of stringArray) {
        let parts;
        let isDashFormat = element.includes("-") && element.split("-").length === 3;
        let isSlashFormat = element.includes("/") && element.split("/").length === 3;

        if (isDashFormat) {
            parts = element.split("-");
            parts = [parts[0], parts[1], parts[2]];
        } else if (isSlashFormat) {
            parts = element.split("/");
            parts = [parts[1], parts[0], parts[2]];
        } else {
            continue;
        }

        let days = Number(parts[0]);
        let month = Number(parts[1]);
        let year = Number(parts[2]);

        if (days >= 1 && days <= 31 && month >= 1 && month <= 12) {
            result.push(`${days}-${month}-${year}`);
        }
    }

    return result;
}

console.log(filterAndFormatDates(stringArray));
