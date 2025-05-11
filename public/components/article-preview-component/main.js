const button = document.querySelector(".card__body__footer__share__button");
button.addEventListener("click", (e) => {
  const popup = document.querySelector(".card__body__footer__share__links");
  popup.classList.toggle("card__body__footer__share__links--active");
  e.currentTarget.classList.toggle("card__body__footer__share__button--active");
});
