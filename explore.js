function showMoreCards() {
    const additionalCards = document.getElementById("additionalCards");
    additionalCards.classList.toggle("hidden");

    const button = document.getElementById("learnMoreButton");
    if (additionalCards.classList.contains("hidden")) {
        button.textContent = "Learn More";
    } else {
        button.textContent = "Show Less";
    }
}
function toggleContent(button) {
    const content = button.nextElementSibling;
    content.classList.toggle("visible");
}
