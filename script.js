function checkPassword1() {
    const password = document.getElementById("password1").value;
    if (password === "10/03/25") {
        window.location.href = "photos.html";
    } else {
        alert("Not quite 😉");
    }
}

function checkPassword2() {
    const password = document.getElementById("password2").value;
    if (password === "dri") {
        window.location.href = "videos.html";
    } else {
        alert("Try again cutie 💕");
    }
}

function checkPassword3() {
    const password = document.getElementById("password3").value;
    if (password === "god went crazy") {
        window.location.href = "final.html";
    } else {
        alert("Almost there 😌");
    }
}

function moveButton() {
    const button = document.querySelector(".no");
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

function celebrate() {
    document.getElementById("celebration").classList.remove("hidden");
}
