function checkPassword() {
    var password = document.getElementById("password-input").value;
    if(password === "waterbar") {  // CHANGE THIS PASSWORD
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("main-content").classList.remove("hidden");
    } else {
        document.getElementById("wrong-password").innerHTML = "Wrong password 🤍";
    }
}

function sayYes() {
    document.getElementById("response").innerHTML =
        "You just made me the happiest man alive 🤍🌷";
}

function moveNo(button) {
    button.style.position = "absolute";
    button.style.left = Math.random() * 300 + "px";
    button.style.top = Math.random() * 300 + "px";
}
function toggleMusic() {
    var music = document.getElementById("bg-music");
    var button = document.getElementById("music-btn");

    if (music.paused) {
        music.play();
        button.innerHTML = "⏸ Pause Music 🤍";
    } else {
        music.pause();
        button.innerHTML = "▶ Play Music 🤍";
    }
}
