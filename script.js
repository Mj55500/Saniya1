function toggleText(card) {
    let text = card.querySelector(".flower-text");
    text.style.display = (text.style.display === "block") ? "none" : "block";

    card.classList.toggle("active");

    setTimeout(() => {
        card.classList.remove("active");
    }, 300);
}