/* Function to Validate form. If statement. */

function validateForm() {
    var name = document.forms["contact"]["name"].value;
    var email = document.forms["contact"]["email"].value;
    var message = document.forms["contact"]["message"].value;

    if (name == "") {
        alert("Please enter your name.");
        return false;
    } 
    else if (email == "") {
        alert("Please enter your e-mail address.");
        return false;
    }
    else if (message == "") {
        alert("Please enter your message.");
        return false;
    }
    else {
        alert("Your message has been sent! Thank you!");
        
    }
}

var submitButton = document.getElementById("submit");

if (submitButton.addEventListener) {
    submitButton.addEventListener("click", validateForm, false);
}
 else if (submitButton.attachEvent) {
     submitButton.attachEvent("onclick", validateForm,);
 }

/* Function to process certain errors. If statement. */

function processErrors(errMessage, errURL, errLineNum) {
    console.log("The file " + errURL + " generated the following error: " + errMessage + " on line " + errLineNum);
    return true;
}

if (window.addEventListener) {
    window.addEventListener("error", processErrors, false);
}
else if (window.attachEvent) {
    window.attachEvent("onerror", processErrors);
}

/* 
 I primarily used the debugging console on the web browser and alert boxes
 which also function as validation for the form based on the user input or not.
*/