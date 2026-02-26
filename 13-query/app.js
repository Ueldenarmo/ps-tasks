let item = {
    search: "Вася",
    take: 10,
};

function toQuery(obj) {
    let result = [];
    for (let key in obj) {
        result.push(`${key}=${obj[key]}`);
    }
    return result.join("&");
}

console.log(toQuery(item));
