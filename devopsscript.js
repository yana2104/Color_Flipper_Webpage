function changeColor() {
    var colorDisplay = document.getElementById("currentColor");
    var newColor = generateRandomColor();
    document.body.style.backgroundColor = newColor;
    colorDisplay.textContent = newColor;
}

function generateRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
