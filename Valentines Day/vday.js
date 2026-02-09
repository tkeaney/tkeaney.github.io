function openEnvelope() {
    const envelope = document.querySelector(".envelope");
    envelope.classList.add("open");
    launchConfetti();
}

function launchConfetti() {
    const colors = ["#ec4899", "#f472b6", "#fda4af", "#fb7185"];

    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti-piece";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = 2 + Math.random() * 1.5 + "s";
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}
