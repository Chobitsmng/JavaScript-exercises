// PROJECT 4
//FEEDBACK FORM AND DATE DISPLAY

// DISPLAY CURRENT DATE
"use strict"

function getDate() {
    var todaydate = new Date();
    var day = todaydate.getDate();
    var month = todaydate.getMonth() + 1;
    var year = todaydate.getFullYear();
    var datestring = month + "/" + day + "/" + year;

    document.getElementById("date").value = datestring;
} 

if (window.addEventListener) {
    window.addEventListener("load", getDate, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", getDate);
}


// put items in an array display preview

var custInfo = {};
var custPreview = document.getElementById("preview");

function processCustomerInfo() {
    var prop;

    custInfo.date = document.getElementById("date").value;
    custInfo.fname = document.getElementById("fname").value;
    custInfo.fname = document.getElementById("fname").value;
    custInfo.email = document.getElementById("email").value;
    custInfo.rating = document.getElementById("rating").value;
    custInfo.message = document.getElementById("message").value;  

    for (prop in custInfo) {
        custPreview.innerHTML += "<p>" + custInfo[prop] + "</p>";
    }
    
}

function feedbackPreview() {
    processCustomerInfo();
    
    document.getElementsByTagName("article")[0].style.display = "inline-block";
   
}

function createEventListener() {
    var submitButton = document.getElementById("submit");

    if (submitButton.addEventListener) {
      submitButton.addEventListener("click", feedbackPreview, false);
    }
    else if (submitButton.attachEvent) {
      submitButton.attachEvent("onclick", feedbackPreview);
    }
  }
   