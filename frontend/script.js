(function () {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const navbar = document.getElementById("navbar");

  function closeMenu() {
    if (!navbar || !menuToggle) return;
    navbar.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = navbar.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when a link is clicked (mobile)
    navbar.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target.tagName === "A") {
        closeMenu();
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      const target = e.target;
      if (!target) return;
      if (!navbar.contains(target) && target !== menuToggle) {
        closeMenu();
      }
    });

    // Close on ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  // Simple "scroll to matching text" search
  const searchInput = document.getElementById("siteSearch");

  if (searchInput) {
    let lastScrollTime = 0;

    // Search only likely-readable elements (avoids scanning every node)
    const SEARCH_SELECTOR = "h1,h2,h3,h4,h5,h6,p,a,li,span,button,blockquote,strong,em";

    searchInput.addEventListener("input", (e) => {
      const query = (e.target.value || "").trim().toLowerCase();
      if (!query) return;

      // Throttle so it doesn't spam scroll while typing
      const now = Date.now();
      if (now - lastScrollTime < 250) return;
      lastScrollTime = now;

      const elements = document.querySelectorAll(SEARCH_SELECTOR);

      for (const el of elements) {
        // Skip hidden elements
        const style = window.getComputedStyle(el);
        if (style.display === "none" || style.visibility === "hidden") continue;

        const text = (el.textContent || "").toLowerCase();
        if (text && text.includes(query)) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          break;
        }
      }
    });
  }
})();
