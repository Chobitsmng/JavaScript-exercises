function calcTotal () {
    var itemTotal = 0;
    var items = document.getElementsByTagName("input");

    for (var i = 0; i < 21; i++) {
        if (items[i].checked) {
            itemTotal += (items[i].value * 1);
        }
    }

    document.getElementById("total").innerHTML = "Your order total is $" + itemTotal;
}
// add backward compatible event listener to Submit button
var submitButton = document.getElementById("submit");

if (submitButton.addEventListener) {
    submitButton.addEventListener("click", calcTotal, false);
} else if (submitButton.attachEvent) {
    submitButton.attachEvent("onclick", calcTotal);
}