"use strict";

function submitForm() {
    const input = document.querySelector(".input").value;
    console.log(input);
    if (!input) {
        return;
    }
    document.querySelector(".panel").innerText = input;
    document.querySelector(".input").value = "";
    document.querySelector(".notification").classList.add("notification_active");
    const textString = JSON.stringify({
        text: input,
    });
    localStorage.setItem("text", textString);
}

function inputChanged(e) {
    if (e.code == "Enter") {
        submitForm();
    }
}


