import * as model from "./model.js";
import cardsView from "./cardsView.js";
import paginationView from "./paginationView.js";

const controlPagination = function (goToPage) {
    // Render Cards
    cardsView.render(model.getCardsPerpage(goToPage));

    // Render Pagination
    paginationView.render(model.state);
};

const init = function () {
    controlPagination(1);
    paginationView.addHandlerClick(controlPagination);
};
init();
