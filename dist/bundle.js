(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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



},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
"use strict";

const transjap = require('./japanese');
const transspan = require('./spanish');
const transfrench = require('./french');
const transtag = require('./tagalog');

transfrench.getFrench();
transspan.getSpanish();
transtag.getTagalog();
transjap.getJapanese();
},{"./french":1,"./japanese":2,"./spanish":4,"./tagalog":5}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
"use strict";

function getTagalog() {
let tagalog = {
    "Merry":"Maligayang",
    "Christmas!":"Pasko",
    "And don’t":"Huwag",
    "forget": "kalimutang",
    "to plan":"magplano",
    "before":"bago",
    "you":"ka",
    "code!":"mag-code!"
  };

  let frenchChecked = document.getElementById("french");
  let textTranslated = document.getElementById("output");
  let convertButton = document.getElementById("convert");
  let clearButton = document.getElementById("clear");
  let japaneseChecked = document.getElementById("japanese");
  let spanishChecked = document.getElementById("spanish");
  let tagalogChecked = document.getElementById("tagalog");
  
  convertButton.addEventListener("click", toTagalog);
  clearButton.addEventListener("click", clearValue);
  
  function printToDom (value) {
      document.getElementById("output").innerHTML = value;
  }
  
  function toTagalog(input) {
      if (tagalogChecked.checked) {
      let userText = document.getElementById("langInput").value;
      let translation = "";
      let tagalogArray = userText.split(" ");
      for (let i = 0; i < tagalogArray.length; i++){
      let sort = tagalogArray[i];
      if (tagalog[sort]) { //if my object is same as array created by string
          translation += tagalog[sort] + " ";
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
    //   japaneseChecked.checked = false;
      spanishChecked.checked = false;
      tagalogChecked.checked = false;
  }
}

module.exports = {getTagalog};
},{}]},{},[3]);
