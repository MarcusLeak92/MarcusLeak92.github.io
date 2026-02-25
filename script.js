function sayYes() {
    document.getElementById("response").innerHTML = 
        "You just made me the happiest person alive! 💕🎉";
}

function moveNo(button) {
    button.style.position = "absolute";
    button.style.top = Math.random() * 300 + "px";
    button.style.left = Math.random() * 300 + "px";
