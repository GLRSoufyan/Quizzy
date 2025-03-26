document.addEventListener("DOMContentLoaded", function() {
    const meowElements = document.querySelectorAll(".quiz-card-content");
    const meowSound = document.getElementById("meow-sound");

    meowElements.forEach(element => {
        element.addEventListener("mouseenter", () => {
            meowSound.currentTime = 0; // Reset het geluid
            meowSound.play();
        });
    });
});
