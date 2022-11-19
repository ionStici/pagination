import * as model from "./model.js";
import cardsView from "./cardsView.js";

const controlCards = function (page = 1) {
    cardsView.render(model.getCardsPerpage(page));
};

const init = function () {
    controlCards();
};
init();

document.querySelectorAll(".pag__btn").forEach((btn) =>
    btn.addEventListener("click", function () {
        controlCards();
        document.querySelector(".container").style.height = "63.2rem";
    })
);

document
    .querySelector(".pag__panel__btn")
    .addEventListener("click", function () {
        controlCards(2);
        document.querySelector(".container").style.height = "42.2rem";
    });
