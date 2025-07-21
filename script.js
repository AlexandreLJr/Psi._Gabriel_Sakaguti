function toggleFaq(element) {
  if (window.innerWidth < 768) {
    element.classList.toggle("active");

    // Fecha os outros (opcional)
    document.querySelectorAll(".faq-box").forEach((box) => {
      if (box !== element) {
        box.classList.remove("active");
      }
    });
  }
}

// Permite abrir com clique também no desktop
document.addEventListener("DOMContentLoaded", function () {
  const faqBoxes = document.querySelectorAll(".faq-box");

  faqBoxes.forEach((box) => {
    box.addEventListener("click", function () {
      toggleFaq(this);
    });

    // Hover para desktop
    box.addEventListener("mouseenter", function () {
      if (window.innerWidth >= 768) {
        this.classList.add("active");
      }
    });

    box.addEventListener("mouseleave", function () {
      if (window.innerWidth >= 768) {
        this.classList.remove("active");
      }
    });
  });
});
