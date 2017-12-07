(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
"use strict";
let japanArr = { 
    'Merry': 'Meri',
    'Christmas,': 'kurisumasu',
    'and': 'soshite',
    'do': 'kodo',
    'not': 'suru',
    'forget': 'mae ni',
    'to': 'keikaku',
    'plan': 'suru koto o',
    'before': 'wasurete wa',
    'coding': ' ikenai'
};

function pleaseTranslate(language) {
    
    var mapToUse = japanArr;
    if (language === "japanese") {
        mapToUse = japanArr;
    }
    var userInputText = document.getElementById("userInput").value;
    var wordsInArray = userInputText.split(" ");

    var translatedString = "";
    for (var i = 0; i < wordsInArray.length; i++) {
        var untranslatedText = wordsInArray[i];
        var translatedText = mapToUse[untranslatedText];
        translatedString += translatedText;

        if (i != wordsInArray.length - 1) {
            translatedString += " ";
        }
    }

    var para = document.createElement("p");
    var textNode = document.createTextNode(translatedString);
    para.appendChild(textNode);
    var translationElement = document.getElementById("pleaseShowTranslation");
    translationElement.appendChild(para);
}
},{}],3:[function(require,module,exports){
"use strict";

const transjap = require('./japanese');
const transspan = require('./spanish');
const transfrench = require('./french');
const transtag = require('./tagalog');
},{"./french":1,"./japanese":2,"./spanish":4,"./tagalog":5}],4:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],5:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}]},{},[3]);
