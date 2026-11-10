const themeToggle = document.querySelector("[data-theme-toggle]");
const themeKey = "api-site-theme";

if (themeToggle) {
  const syncToggle = () => {
    themeToggle.setAttribute("aria-pressed", String(document.documentElement.dataset.theme === "dark"));
  };
  syncToggle();
  themeToggle.addEventListener("click", () => {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    syncToggle();
    try {
      localStorage.setItem(themeKey, theme);
    } catch {
      // Theme selection still works when storage is unavailable.
    }
  });
}

const mobileMenu = document.querySelector(".mobile-nav");
mobileMenu?.addEventListener("click", (event) => {
  if (event.target.closest("a")) mobileMenu.open = false;
});
mobileMenu?.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileMenu.open) {
    mobileMenu.open = false;
    mobileMenu.querySelector("summary").focus();
  }
});
