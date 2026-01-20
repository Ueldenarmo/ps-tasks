function sypherPassword(password) {
    const passwordSymb = password.split("");
    [passwordSymb[1], passwordSymb[4]] = [passwordSymb[4], passwordSymb[1]];
    const result = passwordSymb.join("");
    return result;
}

console.log(sypherPassword("12345abcd"));

function checkPassword(password, sypherPassword) {
    const remixedPassword = sypherPassword.split("");
    [remixedPassword[4], remixedPassword[1]] = [remixedPassword[1], remixedPassword[4]];
    const result = remixedPassword.join("");

    console.log(result);
    if (result === password) {
        return true;
    }

    return false;
}

console.log(checkPassword("12345abcd", "15342abcd"));
