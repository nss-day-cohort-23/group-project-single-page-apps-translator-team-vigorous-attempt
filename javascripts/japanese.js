"use strict";
// import { normalize } from "path";

function getJapanese() {

    let japanese = {
        "Merry": "Meri",
        "Christmas!": "kurisumasu",
        "and": "soshite",
        "don't": "kodo",
        "forget": "suru",
        "to": "mae ni",
        "plan": "keikaku",
        "before": "suru koto o",
        "you": "wasurete wa",
        "code": " ikenai"
    };

    let frenchChecked = document.getElementById("french");
    let textTranslated = document.getElementById("output");
    let convertButton = document.getElementById("convert");
    let clearButton = document.getElementById("clear");
    let japaneseChecked = document.getElementById("japanese");
    let spanishChecked = document.getElementById("spanish");
    let tagalogChecked = document.getElementById("tagalog");

    convertButton.addEventListener("click", toJapanese);
    clearButton.addEventListener("click", clearValue);

    function printToDom(value) {
        document.getElementById("output").innerHTML = value;
    }

    function toJapanese(input) {
        if (japaneseChecked.checked) {
            let userText = document.getElementById("langInput").value;
            let translation = "";
            let japaneseArray = userText.split(" ");
            for (let i = 0; i < japaneseArray.length; i++) {
                let sort = japaneseArray[i];
                if (japanese[sort]) { //if my object is same as array created by string
                    translation += japanese[sort] + " ";
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
        japaneseChecked.checked = false;
        spanishChecked.checked = false;
        tagalogChecked.checked = false;
    }
}

module.exports = { getJapanese };