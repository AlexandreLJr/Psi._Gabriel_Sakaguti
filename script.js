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

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menuLinks = document.querySelectorAll(".menu-mobile a");

  if (menuToggle && menuLinks.length) {
    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        // Desmarca o checkbox para esconder o menu
        menuToggle.checked = false;
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const icon = document.querySelector("label.menu-icon");
  const menu = document.querySelector(".menu-mobile");
  const checkbox = document.getElementById("menu-toggle"); // opcional, só para manter sincronizado

  if (!icon || !menu) return;

  function openMenu() {
    menu.classList.add("open");
    if (checkbox) checkbox.checked = true;
  }

  function closeMenu() {
    menu.classList.remove("open");
    if (checkbox) checkbox.checked = false;
  }

  // Toggle no clique do ícone
  icon.addEventListener("click", function (e) {
    e.preventDefault(); // não depender do label/for
    if (menu.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Fechar ao clicar em um link do menu
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeMenu);
  });

  // Fechar ao clicar fora
  document.addEventListener("click", function (e) {
    if (!menu.classList.contains("open")) return;
    const path = typeof e.composedPath === "function" ? e.composedPath() : [];
    const clickedInsideMenu = menu.contains(e.target) || path.includes(menu);
    const clickedIcon = icon.contains(e.target) || path.includes(icon);
    if (!clickedInsideMenu && !clickedIcon) closeMenu();
  });

  // Fechar com ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });
});









