"use strict";

const success = document.getElementById("success-inbox");
const firstName = document.getElementById("fName");
const lastName = document.getElementById("lName");
const email = document.getElementById("email");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const textArea = document.getElementById("message");
const check = document.getElementById("check");
const button = document.getElementById("button");
const radioboxes = Array.from(document.getElementsByClassName("radio-box")).flat();
const radiobox1 = document.getElementById("radiobox1");
const radiobox2 = document.getElementById("radiobox2");


const textInputs = Array.from(document.querySelectorAll('input[type="text"]'));
const radios = [radio1, radio2];

radio1.addEventListener("click", () => {
    if (radio2.checked) radio2.checked = false;
    radiobox1.style.backgroundColor = "#E0F1E8";
    radiobox2.style.backgroundColor = "#fff";
});

radio2.addEventListener("click", () => {
    if (radio1.checked) radio1.checked = false;
    radiobox2.style.backgroundColor = "#E0F1E8";
    radiobox1.style.backgroundColor = "#fff";
});


button.addEventListener("click", () => {
    const textsTrue = textInputs.every(element => element.value.trim() !== "");
    const radioTrue = radios.some(element => element.checked);
    const messageTrue = textArea.value.trim() !== "";
    const checkTrue = check.checked;
    const emailValue = email.value.trim();
    const emailTrue = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    const errors = Array.from(document.getElementsByClassName("error"));

    const inputs = [firstName, lastName, email, textArea];
    const container = document.getElementById("container")
    const body = document.querySelector("body");

    if (textsTrue && radioTrue && messageTrue && checkTrue && emailTrue) {
        setTimeout(() => {
            success.style.top = "24px"; 
        }, 0);

        setTimeout(() => {
            success.style.top = "-129px"; 
        }, 1500);

        if (window.innerWidth < 768) {
            errors.forEach(element => element.style.display = "none");
        }
    } else {
        errors.forEach(element => element.style.display = "flex");
        inputs.forEach(element => element.style.border = "1px solid #D73C3C ")
        if (window.innerWidth < 768) {
            container.style.height = "1341px";
            body.style.height = "1470px";
        } else if (window.innerWidth < 900) {
            container.style.height = "1005px";
            body.style.height = "1200px";
        } else {
            container.style.height = "978px"
            body.style.height = "1140px"
        }
    } 
});

