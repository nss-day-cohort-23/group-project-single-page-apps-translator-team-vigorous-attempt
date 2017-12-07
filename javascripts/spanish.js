"use strict";
// import { normalize } from "path";

function getSpanish() {

let spanish = {
    "Merry": "Feliz",
    "Christmas!": "Navidad!",
    "And": "y",
    "don't":"no",
    "forget": "olvides",
    "to": "a",
    "plan": "planificar",
    "before": "antes",
    "you": "de",
    "code!": "codificar!",
};

let frenchChecked = document.getElementById("french");
let textTranslated = document.getElementById("output");
let convertButton = document.getElementById("convert");
let clearButton = document.getElementById("clear");
let japaneseChecked = document.getElementById("japanese");
let spanishChecked = document.getElementById("spanish");
let tagalogChecked = document.getElementById("tagalog");

convertButton.addEventListener("click", toSpanish);
clearButton.addEventListener("click", clearValue);

function printToDom(value) {
    document.getElementById("output").innerHTML = value;
}

function toSpanish(input) {
    if (spanishChecked.checked) {
        let userText = document.getElementById("langInput").value;
        let translation = "";
        let spanishArray = userText.split(" ");
        for (let i = 0; i < spanishArray.length; i++) {
            let sort = spanishArray[i];
            if (spanish[sort]) { //if my object is same as array created by string
                translation += spanish[sort] + " ";
            }
        }
        printToDom(translation);
    }
}


function clearValue() {
    let userText = document.getElementById("langInput");
    userText.value = "";
    // clearButton = "";
    textTranslated.innerHTML = "";
    frenchChecked.checked = false;
    // japaneseChecked.checked = false;
    spanishChecked.checked = false;
    tagalogChecked.checked = false;
}
}

module.exports = { getSpanish };
