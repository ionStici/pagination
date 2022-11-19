class PaginationView {
    #parentElement = document.querySelector(".pag-wrapper");
    #data;

    addHandlerClick(handler) {
        this.#parentElement.addEventListener("click", function (e) {
            const btn = e.target.closest(".pag__btn");

            if (!btn) return;
            if (btn.disabled) return;

            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }

    #clear() {
        this.#parentElement.innerHTML = "";
    }

    render(data) {
        this.#data = data;
        const markup = this.#generateMarkup();
        this.#clear();
        this.#parentElement.insertAdjacentHTML("afterbegin", markup);

        this.setActiveBtn();
    }

    #generateMarkup() {
        const currentPage = this.#data.page;

        const numberOfPage = Math.ceil(
            this.#data.cards.length / this.#data.cardsPerPage
        );

        if (currentPage === 1 && numberOfPage !== 0) {
            return `
            <div class="pag">
                <div class="pag__box">
                    <button class="pag__btn pag__btn--prev" data-goto="${
                        currentPage - 1
                    }" disabled>
                    <!-- <button class="pag__btn pag__btn--prev"> -->
                        <svg class="pag__btn__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg>
                        <span class="pag__btn__text">Prev</span>
                    </button>


                    ${this.#data.cards
                        .map((btn, i) => {
                            if (i < numberOfPage) {
                                return `<button data-goto="${
                                    i + 1
                                }" class="pag__btn pag__btn__num">${
                                    i + 1
                                }</button>`;
                            }
                        })
                        .join("")}



                    <button class="pag__btn pag__btn--next" data-goto="${
                        currentPage + 1
                    }">
                        <span class="pag__btn__text">Next</span>
                        <svg class="pag__btn__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
                    </button>
                </div>

                <div class="pag__line"></div>

                <div class="pag__panel">
                    <label class="pag__panel__label">
                        <span class="pag__panel__text-1">Page</span>
                        <input value="${currentPage}" class="pag__panel__input" type="text">
                        <span class="pag__panel__text-2">of ${numberOfPage}</span>
                    </label>
                    <button class="pag__panel__btn">Show</button>
                    <p class="pag__panel__message">Wrong Input</p>
                </div>
            </div>
        `;
        }

        if (
            currentPage > 1 &&
            currentPage !== numberOfPage &&
            numberOfPage !== 0
        ) {
            return `
                <div class="pag">
                <div class="pag__box">
                    <button class="pag__btn pag__btn--prev" data-goto="${
                        currentPage - 1
                    }">
                    <!-- <button class="pag__btn pag__btn--prev"> -->
                        <svg class="pag__btn__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg>
                        <span class="pag__btn__text">Prev</span>
                    </button>


                    

                    ${this.#data.cards
                        .map((btn, i) => {
                            if (i < numberOfPage) {
                                return `<button data-goto="${
                                    i + 1
                                }" class="pag__btn pag__btn__num">${
                                    i + 1
                                }</button>`;
                            }
                        })
                        .join("")}



                    <button class="pag__btn pag__btn--next" data-goto="${
                        currentPage + 1
                    }">
                        <span class="pag__btn__text">Next</span>
                        <svg class="pag__btn__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
                    </button>
                </div>

                <div class="pag__line"></div>

                <div class="pag__panel">
                    <label class="pag__panel__label">
                        <span class="pag__panel__text-1">Page</span>
                        <input value="${currentPage}" class="pag__panel__input" type="text">
                        <span class="pag__panel__text-2">of ${numberOfPage}</span>
                    </label>
                    <button class="pag__panel__btn">Show</button>
                    <p class="pag__panel__message">Wrong Input</p>
                </div>
                </div>
            `;
        }

        if (currentPage === numberOfPage && numberOfPage !== 0) {
            return `
                <div class="pag">
                <div class="pag__box">
                    <button class="pag__btn pag__btn--prev" data-goto="${
                        currentPage - 1
                    }">
                    <!-- <button class="pag__btn pag__btn--prev"> -->
                        <svg class="pag__btn__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg>
                        <span class="pag__btn__text">Prev</span>
                    </button>




                    ${this.#data.cards
                        .map((btn, i) => {
                            if (i < numberOfPage) {
                                return `<button data-goto="${
                                    i + 1
                                }" class="pag__btn pag__btn__num">${
                                    i + 1
                                }</button>`;
                            }
                        })
                        .join("")}
                    




                    <button class="pag__btn pag__btn--next" data-goto="${
                        currentPage + 1
                    }" disabled>
                        <span class="pag__btn__text">Next</span>
                        <svg class="pag__btn__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
                    </button>
                </div>

                <div class="pag__line"></div>

                <div class="pag__panel">
                    <label class="pag__panel__label">
                        <span class="pag__panel__text-1">Page</span>
                        <input value="${currentPage}" class="pag__panel__input" type="text">
                        <span class="pag__panel__text-2">of ${numberOfPage}</span>
                    </label>
                    <button class="pag__panel__btn">Show</button>
                    <p class="pag__panel__message">Wrong Input</p>
                </div>
                </div>
        `;
        }

        if (currentPage === 1 && numberOfPage === 0) {
            return "";
        }

        this.setActiveBtn();
    }

    setActiveBtn() {
        if (!this.#data.cards.length > 0) return;
        const btns = document.querySelectorAll(".pag__btn");
        btns.forEach(btn => btn.classList.remove("pag__btn--active"));

        btns[this.#data.page].classList.add("pag__btn--active");
    }
}

export default new PaginationView();

// <div class="pag">
//     <div class="pag__box">
//         <button class="pag__btn pag__btn--prev" disabled>
//         <!-- <button class="pag__btn pag__btn--prev"> -->
//             <svg class="pag__btn__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg>
//             <span class="pag__btn__text">Prev</span>
//         </button>

//         <button class="pag__btn pag__btn__num pag__btn--active">1</button>
//         <button class="pag__btn pag__btn__num">2</button>
//         <button class="pag__btn pag__btn__num">3</button>
//         <button class="pag__btn pag__btn__num">4</button>
//         <button class="pag__btn pag__btn__num">5</button>

//         <button class="pag__btn pag__btn--next">
//             <span class="pag__btn__text">Next</span>
//             <svg class="pag__btn__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
//         </button>
//     </div>

//     <div class="pag__line"></div>

//     <div class="pag__panel">
//         <label class="pag__panel__label">
//             <span class="pag__panel__text-1">Page</span>
//             <input value="1" class="pag__panel__input" type="text">
//             <span class="pag__panel__text-2">of 7</span>
//         </label>
//         <button class="pag__panel__btn">Show</button>
//         <p class="pag__panel__message">Wrong Input</p>
//     </div>
// </div>
