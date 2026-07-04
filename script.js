const menuButton = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".mobile-nav");
const filterButtons = document.querySelectorAll("[data-filter-group='rigs'] button");
const rigCards = document.querySelectorAll(".rig-card");
const bookingButtons = document.querySelectorAll("[data-book]");
const contactSelect = document.querySelector(".contact-form select");
const contactTextarea = document.querySelector(".contact-form textarea");

menuButton.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => mobileNav.classList.remove("open"));
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    rigCards.forEach((card) => {
      const tags = card.dataset.tags || "";
      const visible = filter === "all" || tags.includes(filter);
      card.classList.toggle("hidden", !visible);
    });
  });
});

bookingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const title = button.dataset.book;
    contactSelect.value = "선상낚시 예약";
    contactTextarea.value = `${title} 예약 문의합니다. 날짜, 인원, 장비 대여 가능 여부를 알고 싶습니다.`;
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  });
});
