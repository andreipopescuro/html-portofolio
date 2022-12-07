const content = document.querySelector(".main-content");

const controlsBtns = document.querySelectorAll(".control");
const controlsContainer = document.querySelector(".controls");

const sections = document.querySelectorAll(".section");

function activeControl() {
  controlsBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let currentActiveBtn = document.querySelector(".active-btn");
      currentActiveBtn.classList.remove("active-btn");
      e.target.classList.add("active-btn");
    });
  });
  content.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      controlsBtns.forEach((btn) => btn.classList.remove("active-icon"));
      e.target.classList.add("active-icon");
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const currentSection = document.getElementById(id);
      currentSection.classList.add("active");
    }
  });
}
activeControl();

const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  let body = document.body;
  body.classList.toggle("light");
});
