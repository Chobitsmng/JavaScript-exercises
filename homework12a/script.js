/*  JavaScript 6th Edition
    Chapter 12
    Hands-on Project 12-1

    Author: Leslie A Borst
      Date:   05/05/2018

    Filename: script.js
*/

function display(event) {
    $(event.currentTarget).next().fadeIn("slow");
}

$("h3").click(display);