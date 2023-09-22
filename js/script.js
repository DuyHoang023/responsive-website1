const buttonOpenEl = document.querySelector("#leftNav-open");
const leftNavEl = document.querySelector(".leftNavi");
const windowWidth = document.querySelector(".flex-container").offsetWidth;
buttonOpenEl.onclick = function () {
  leftNavEl.classList.add("open");
};

const buttonCloseEl = document.querySelector(".exit-button");
buttonCloseEl.onclick = function () {
  leftNavEl.classList.remove("open");
};

const parent = document.querySelector(".sticky-menu");
const activeSearch = parent.querySelector("input");
activeSearch.onclick = function () {
  leftNavEl.classList.remove("open");
};

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    leftNavEl.classList.remove("open");
  }
});
