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

const directory = document.querySelector("[data-directory]");

if (directory) {
  const search = directory.querySelector("input[type=search]");
  const filters = [...directory.querySelectorAll("[data-track-filter]")];
  const count = directory.querySelector("[data-count]");
  const empty = directory.querySelector("[data-empty]");
  const reset = directory.querySelector("[data-reset]");
  let activeTrack = "";

  function words(value) {
    return value.normalize("NFD").replace(/\p{M}/gu, "")
      .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  }

  const groups = [...directory.querySelectorAll("[data-track]")].map((element) => ({
    element,
    roles: [...element.querySelectorAll("[data-role]")].map((card) => ({
      card, searchText: words(card.dataset.search),
    })),
  }));

  function applyFilters() {
    const tokens = words(search.value).split(" ").filter(Boolean);
    let visibleCount = 0;

    for (const { element, roles } of groups) {
      const matchesTrack = !activeTrack || element.dataset.track === activeTrack;
      let groupCount = 0;
      for (const { card, searchText } of roles) {
        const match = matchesTrack && tokens.every((token) => searchText.includes(token));
        card.hidden = !match;
        if (match) groupCount += 1;
      }
      element.hidden = groupCount === 0;
      visibleCount += groupCount;
    }

    count.textContent = `${visibleCount} internship pathway${visibleCount === 1 ? "" : "s"}`;
    empty.hidden = visibleCount !== 0;
  }

  function selectTrack(track) {
    activeTrack = track;
    for (const button of filters) {
      button.setAttribute("aria-pressed", String(button.dataset.trackFilter === track));
    }
    applyFilters();
  }

  search.addEventListener("input", applyFilters);
  for (const button of filters) {
    button.addEventListener("click", () => selectTrack(button.dataset.trackFilter));
  }
  reset.addEventListener("click", () => {
    search.value = "";
    selectTrack("");
    search.focus();
  });

  applyFilters();
}
