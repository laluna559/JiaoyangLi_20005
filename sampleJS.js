function howdy(firstName){
    alert("Howdy" + firstName);
}
function displayCurrentMinute() {
    var now = new Date();
    var minute = now.getMinutes();
    var minuteDiv = document.getElementById("minute");
    minuteDiv.innerText = "The current minute is: " + minute;
}
function hideElement() {
    var secondParagraph = document.getElementById("second");
    secondParagraph.style.display = "none";
}
