const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector("#mobileNav");
const tagButtons = document.querySelectorAll(".tag-list button");
const searchInput = document.querySelector("#siteSearch");
const articleCards = document.querySelectorAll(".article-card");

function applyFilters() {
  const activeTag = document.querySelector(".tag-list .is-active")?.dataset.filter || "all";
  const query = searchInput.value.trim().toLowerCase();

  articleCards.forEach((card) => {
    const text = card.textContent.toLowerCase();
    const tags = card.dataset.tags || "";
    const matchesTag = activeTag === "all" || tags.includes(activeTag);
    const matchesQuery = query === "" || text.includes(query);
    card.classList.toggle("is-hidden", !(matchesTag && matchesQuery));
  });
}

menuButton.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

tagButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tagButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    applyFilters();
  });
});

searchInput.addEventListener("input", applyFilters);
tagButtons[0]?.classList.add("is-active");
