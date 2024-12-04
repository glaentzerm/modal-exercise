const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const audio = document.getElementById("backgroundAudio");

// Show the modal and play the audio
document.getElementById("modalBtn").onclick = function () {
    modal.style.display = "block";
    overlay.style.display = "block";
    audio.play().catch(error => console.error("Audio playback error:", error));
};

// Close the modal and stop the audio
function closeModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
    audio.pause();
    audio.currentTime = 0; // Reset the audio to the beginning
}

// Slider menu toggle
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}
