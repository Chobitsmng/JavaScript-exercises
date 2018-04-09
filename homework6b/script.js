/* Hands-on Project 6-4
Homework 6b
Leslie A Borst
03/23/2018 */

"use strict";

// remove default value and formatting from selection list
function removeSelectDefault() {
    var selectBox = document.getElementsById("size");
    selectBox.selectedIndex = -1;
    selectBox.style.boxShadow = "none";   
}

// run initial form configuration functions
function setUpPage() {
    removeSelectDefault();
    generatePlaceholder();
    //run setup functions when page finishes oading
    if (window.addEventListener) {
        window.addEventListener("load", setUpPage, false);
    }
    else if (window.attachEvent) {
        window.attachEvent ("onload", setUpPage);
    }
}

// remove fallback placeholder text
function zeroPlaceholder() {
    var instrBox = document.getElementById("instructions");
    instrBox.style.color = "black";
    if (instrBox.value === instrBox.placeholder) {
        instrBox.value = "";
    }
}

// restore placeholder text if box contains no user entry
function checkPlaceholder () {
    var instrBox = documnet.getElementById("instructions");
    if (instrBox.value === "") {
        instrBox.style.color = "rgb(178,184,183)";
        instrBox.value = instrBox.placeholder;
    }
}

// add placeholder text for browsers that don't support placeholder attribute
function generatePlaceholder() {
    if (!Modernizr.input.placeholder) {
        var instrBox = document.getElementById("instructions");
        instrBox.value = instrBox.placeholder;
        instrBox.style.color = "rgb(178,184,183)";
        if (instrBox.addEventListener) {
            instrBox.addEventListener("focus", zeroPlaceholder, false);
            instrBox.addEventListener("blur", checkPlaceholder, false);
        }
        else if (instrBox.attachEvent) {
            instrBox.attachEvent("onfocus", zeroPlaceholder);
            instrBox.attachEvent("onblur", checkPlaceholder);
        }
    }
}