"use strict";

function getFrench() {

let french = {
    "Merry": "Joyeux",
    "Christmas!": "Noël!",
    "And": "Et", 
    "don't forget": "n'oubliez", 
    "to": "pas de", 
    "plan": "planifier", 
    "before": "avant", 
    "you": "de", 
    "code!": "coder!"
};

let frenchChecked = document.getElementById("french");
let textTranslated = document.getElementById("output");
let convertButton = document.getElementById("convert");
let clearButton = document.getElementById("clear");
let japaneseChecked = document.getElementById("japanese");
let spanishChecked = document.getElementById("spanish");
let tagalogChecked = document.getElementById("tagalog");

convertButton.addEventListener("click", toFrench);
clearButton.addEventListener("click", clearValue);

function printToDom (value) {
    document.getElementById("output").innerHTML = value;
}

function toFrench(input) {
    if (frenchChecked.checked) {
        let userText = document.getElementById("langInput").value;
        let translation = "";
        let frenchArray = userText.split(" ");
            for (let i = 0; i < frenchArray.length; i++){
            let sort = frenchArray[i];
                if (french[sort]) { //if my object is same as array created by string
                translation += french[sort] + " ";
            }
        }
     printToDom(translation);
    }
}


function clearValue() {
    let userText = document.getElementById("langInput");
    userText.value = "";
    textTranslated.innerHTML = "";
    frenchChecked.checked = false;
    // japaneseChecked.checked = false;
    spanishChecked.checked = false;
    tagalogChecked.checked = false;
}
}

module.exports = { getFrench };


