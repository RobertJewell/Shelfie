let btn = document.querySelector("#desery__button");
const fadeCover = document.querySelector(".desery--cups--fade");
const extraOptions = document.querySelector(".desery--cups--hidden");

btn.addEventListener("click", () => {
  if (btn.textContent === "Więcej opcji") {
    btn.textContent = "Mniej opcji";
  } else {
    btn.textContent = "Więcej opcji";
  }
  fadeCover.classList.toggle("desery--cups--fade");
  extraOptions.classList.toggle("desery--cups--hidden");
});
