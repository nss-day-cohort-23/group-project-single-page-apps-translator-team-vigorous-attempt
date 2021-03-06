"use strict";

function getTagalog() {
  let tagalog = {
    "Merry": "Maligayang",
    "Christmas!": "Pasko",
    "And don’t": "Huwag",
    "forget": "kalimutang",
    "to plan": "magplano",
    "before": "bago",
    "you": "ka",
    "code!": "mag-code!"
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

  function printToDom(value) {
    document.getElementById("output").innerHTML = value;
  }

  function toTagalog(input) {
    if (isInputComplete() && tagalogChecked.checked) {
      let userText = document.getElementById("langInput").value;
      let translation = "";
      let tagalogArray = userText.split(" ");
      for (let i = 0; i < tagalogArray.length; i++) {
        let sort = tagalogArray[i];
        if (tagalog[sort]) {
          //if my object is same as array created by string
          translation += tagalog[sort] + " ";
        }
      }
      printToDom(translation);
    }
  }

  function isInputComplete(){
    let userText = document.getElementById("langInput").value;
    if(userText != "Merry Christmas! And don't forget to plan before you code!"){
        window.alert("Please type the correct phrase!");
        return false;
    }
    // Add this to IF statement once japanese is done -- !japaneseChecked.checked && 
    else if(!tagalogChecked.checked && 
        !frenchChecked.checked &&
        !japaneseChecked.checked &&  
        !spanishChecked.checked){
        window.alert("Please select a language to translate!");        
        return false;
    }
    return true;
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

module.exports = { getTagalog };
