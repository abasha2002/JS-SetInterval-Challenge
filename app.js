const element = document.getElementById("num");
let number = 0;

setInterval(function add() {
    if (number <= 20) {
        element.innerHTML = number;
        number++;
    }
}, 1000);
