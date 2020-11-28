function toggleRestartClass(prop) {
  var resetButton = document.getElementsByClassName("button-reset")[0];
  resetButton.setAttribute("class", prop);
}
function veryGreat() {
  document.getElementById("demo").innerHTML = 'This is so <strong>great</strong>';
  toggleRestartClass("button-reset button-reset--show");
}
function notSoGreat() {
  document.getElementById("demo").innerHTML = 'Bye World';
  var resetButton = document.getElementsByClassName("button-reset")[0];
  resetButton.setAttribute("class", "button-reset button-reset--show");
}
function restart() {
    document.getElementById("demo").innerHTML = "";
    toggleRestartClass("button-reset button-reset--hide");
}
