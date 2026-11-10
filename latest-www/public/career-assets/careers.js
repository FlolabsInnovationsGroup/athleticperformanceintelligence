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
  const kind = directory.querySelector("#role-kind");
  const filters = [...directory.querySelectorAll("[data-track-filter]")];
  const count = directory.querySelector("[data-count]");
  const empty = directory.querySelector("[data-empty]");
  const reset = directory.querySelector("[data-reset]");
  let activeTrack = "";

  function words(value) {
    return value.normalize("NFD").replace(/\p{M}/gu, "")
      .toLowerCase().match(/[a-z0-9]+/g) ?? [];
  }

  function matchesWord(word, token) {
    if (token.length === 2) return word === token;
    return word.startsWith(token) || (token.length > 3 && token.endsWith("s") && word === token.slice(0, -1));
  }

  const groups = [...directory.querySelectorAll("[data-track]")].map((element) => ({
    element,
    roles: [...element.querySelectorAll("[data-role]")].map((card) => ({
      card, index: words(card.dataset.search),
    })),
  }));

  function applyFilters() {
    const tokens = words(search.value);
    const activeKind = kind.value;
    let visibleCount = 0;

    for (const { element, roles } of groups) {
      const matchesTrack = !activeTrack || element.dataset.track === activeTrack;
      let groupCount = 0;
      for (const { card, index } of roles) {
        const match = matchesTrack && (!activeKind || card.dataset.kind === activeKind)
          && tokens.every((token) => index.some((word) => matchesWord(word, token)));
        card.hidden = !match;
        if (match) groupCount += 1;
      }
      element.hidden = groupCount === 0;
      visibleCount += groupCount;
    }

    const label = `${visibleCount} ${visibleCount === 1 ? "role" : "roles"}`;
    if (count.textContent !== label) count.textContent = label;
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
  kind.addEventListener("change", applyFilters);
  for (const button of filters) {
    button.addEventListener("click", () => selectTrack(button.dataset.trackFilter));
  }
  reset.addEventListener("click", () => {
    search.value = "";
    kind.value = "";
    selectTrack("");
    search.focus();
  });

  applyFilters();
}
