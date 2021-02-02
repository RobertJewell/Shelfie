let btn = document.querySelector("#desery__button");
const fadeCover = document.querySelector(".desery--cups--fade");
const extraOptions = document.querySelector(".desery--cups--hidden");

btn.addEventListener("click", () => {
  if (btn.textContent === "see more") {
    btn.textContent = "hide";
  } else {
    btn.textContent = "see more";
  }
  fadeCover.classList.toggle("desery--cups--fade");
  extraOptions.classList.toggle("desery--cups--hidden");
});
