const btn = document.querySelector("#desery__button");
const fadeCover = document.querySelector(".desery--cups--fade");
const extraOptions = document.querySelector(".desery--cups--hidden");

btn.addEventListener("click", () => {
  if ((btn.innerHTML = "see more")) {
    btn.innerHTML = "hide";
  } else {
    btn.innerHTML = "see more";
  }
  fadeCover.classList.toggle("desery--cups--fade");
  extraOptions.classList.toggle("desery--cups--hidden");
});
