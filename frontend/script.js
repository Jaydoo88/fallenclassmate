(function () {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const navbar = document.getElementById("navbar");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navbar.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when a link is clicked (mobile)
    navbar.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target.tagName === "A") {
        navbar.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Simple "scroll to matching text" search (same idea as your React version)
  const searchInput = document.getElementById("siteSearch");

  if (searchInput) {
    let lastScrollTime = 0;

    searchInput.addEventListener("input", (e) => {
      const query = (e.target.value || "").trim().toLowerCase();
      if (!query) return;

      // Basic throttle so it doesn't spam scroll while typing
      const now = Date.now();
      if (now - lastScrollTime < 250) return;
      lastScrollTime = now;

      const elements = document.querySelectorAll("body *");
      for (const el of elements) {
        const text = (el.textContent || "").toLowerCase();
        if (text && text.includes(query)) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          break;
        }
      }
    });
  }
})();
