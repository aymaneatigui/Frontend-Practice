const rating = document.querySelector(".rating");
const success = document.querySelector(".success");
const ratings = document.querySelectorAll(".rating-item");
const button = rating.querySelector("button");
const rated = success.querySelector(".rated");
let rate = 0;

const open = () => success.classList.add("open");
const close = () => rating.classList.add("close");
const unacitvate = () => {
  ratings.forEach((i) => {
    i.style.backgroundColor = "var(--bg-cercle)";
    i.querySelector(".rate").style.color = "var(--neutral-light-grey)";
  });
};

ratings.forEach((i) =>
  i.addEventListener("click", () => {
    rate = i.textContent;
    unacitvate();
    i.style.backgroundColor = "var(--neutral-color)";
    i.querySelector(".rate").style.color = "var(--primary-color)";
  })
);

button.addEventListener("click", () => {
    close();
    open();
    rated.textContent = rate;
});
