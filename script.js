function toggleTheme() {
  document.body.classList.toggle("dark");
}

/* Reveal animation for certifications */
const certCards = document.querySelectorAll(".cert-card");

function revealCertifications() {
  certCards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealCertifications);
window.addEventListener("load", revealCertifications);
