class CardsView {
    #parentElement = document.querySelector(".container");
    #data;

    #clear() {
        this.#parentElement.innerHTML = "";
    }

    render(data) {
        this.#data = data;
        const markup = this.#generateMarkup();
        this.#clear();
        this.#parentElement.insertAdjacentHTML("afterbegin", markup);
    }

    #generateMarkup() {
        return this.#data.map((url, i) => {
            return `
                <div class="card-wrapper">
                <div class="card__num">${String(i + 1).padStart(2, "0")}</div>
                <div class="card">
                    <div class="card__img" style="background-image: url(${url});"></div>
                    <div class="card__text">
                        <p class="card__title">Welcome</p>
                        <p class="card__p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur. </p>
                    </div>
                </div>
                </div>
            `;
        });
    }
}

export default new CardsView();
