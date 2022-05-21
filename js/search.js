var link = document.querySelector(".hotels-button");
var popup = document.querySelector(".popup-form");
var form = popup.querySelector("form");
var arrival = popup.querySelector("[name=arrival]");
var departure = popup.querySelector("[name=departure]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Клик по кнопке Поиск отеля");
  popup.classList.add("popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.code === "Escape" ) {
    console.log("Кнопка Esc");
    if (popup.classList.contains("popup-show")) {
      evt.preventDefault();
      popup.classList.remove("popup-show");
      popup.classList.remove("popup-error");
    }
  }
});

form.addEventListener("submit", function(evt) {
  if (!arrival.value || !departure.value) {
    evt.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
  }
});