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
/* FLOATING HEARTS */

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

    document.getElementById("hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);


/* CONFETTI EXPLOSION */

function celebrate() {
    document.getElementById("celebration").classList.remove("hidden");
    startConfetti();
}

function startConfetti() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiPieces = [];

    for (let i = 0; i < 150; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 8 + 4,
            speed: Math.random() * 3 + 2,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confettiPieces.forEach(piece => {
            piece.y += piece.speed;
            ctx.fillStyle = piece.color;
            ctx.fillRect(piece.x, piece.y, piece.size, piece.size);

            if (piece.y > canvas.height) {
                piece.y = -10;
            }
        });

        requestAnimationFrame(draw);
    }

    draw();
}
