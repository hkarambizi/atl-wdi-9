window.onload = function() {

var firstButton = document.getElementById('button1');
var secondButton = document.getElementById('button2');
var thirdButton = document.getElementById('button3');



firstButton.addEventListener("click", function() {
  alert("you have clicked button one");
});

secondButton.addEventListener("click", function() {
var newP = document.createElement("P");
newP.setAttribute("id", "remP");
var newText = document.createTextNode("A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).");
newP.appendChild(newText);
document.getElementById('information').appendChild(newP);
});

thirdButton.addEventListener("click", function() {
var bigDiv = document.getElementById('information');
bigDiv.removeChild(bigDiv.childNodes[0]);
});

}
