/* Function to Validate order form */

function validateOrder() { 
    var name = document.forms["order"]["name"].value;
    var email = document.forms["order"]["email"].value;
    var phone = document.forms["order"]["phone"].value;
    var size = document.getElementsByName("price"); 
    var items = document.getElementsByName("item");
    var extra = document.getElementsByTagName("option"); 
    var phoneNotNum;
// validate name field
    if (name == "") {
        alert("Please enter your name.");
        return false;
    } 
    //validate email field
    else if (email == "") {
        alert("Please enter your e-mail address.");
        return false;
    }
    //validate phone feild
    else if (phone == "") {
        alert("Please enter your phone number.");
            return false;
    } 
   //validate radio buttons
    else if (!size[0].checked && !size[1].checked && !size[2].checked && !size[3].checked && !size[4].checked){
        alert("Please select the size.");
        return false;
    }
    //validate check boxes
    else if (!items[0].checked && !items[1].checked && !items[2].checked && !items[3].checked && !items[4].checked
        && !items[5].checked && !items[6].checked && !items[7].checked && !items[8].checked && !items[9].checked 
        && !items[10].checked && !items[11].checked && !items[12].checked && !items[13].checked && !items[14].checked
        && !items[15].checked && !items[16].checked) {
        alert("Please select at least 1 item.");
        return false;
    }
    //validate selection options
    else if (!extra[1].selected && !extra[2].selected) {
        alert("Please select yes or no for extra cheese.");
        return false;
    }
    // check that phone number is numeric value
    else if (isNaN(phone)) {
        phoneNotNum = true;
        if (phoneNotNum) {
            alert("Phone number must be in numeric values.");
        }
        return false;
    }
    // all statements met and valid
    else {
        alert("Your Order has been sent. Thank you!");
    }
    
}
//event listener for submit button
var submitButton = document.getElementById("submit");

if (submitButton.addEventListener) {
    submitButton.addEventListener("click", validateOrder, false);
}
 else if (submitButton.attachEvent) {
     submitButton.attachEvent("onclick", validateOrder,);
}


