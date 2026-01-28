function toggleTheme() {
  document.body.classList.toggle("dark");
}

const cards = document.querySelectorAll(".skill-card, .cert-card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    if (card.getBoundingClientRect().top < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
      card.style.transition = "0.6s ease";
    }
  });
});
