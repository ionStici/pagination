import * as model from "./model.js";
import cardsView from "./cardsView.js";

const controlCards = function (page = 1) {
    cardsView.render(model.getCardsPerpage(page));
};

const init = function () {
    controlCards();
};
init();
