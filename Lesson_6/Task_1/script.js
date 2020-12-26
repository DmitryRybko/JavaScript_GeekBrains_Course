"use strict"

const goodsCatalogue = {
    allGoods: [
        {
            id: "good_01",
            qty: 1,
            price: 1500,
        },
        {
            id: "good_02",
            qty: 1,
            price: 2000,
        },
        {
            id: "good_03",
            qty: 1,
            price: 800,
        },
        {
            id: "good_04",
            qty: 1,
            price: 300,
        }
    ],

    renderCatalogue() {
        let catalogDiv = document.getElementById('catalog')
        catalogDiv.insertAdjacentHTML('afterbegin', "<h2> Каталог товаров: </h2>")
        catalogDiv.insertAdjacentHTML('beforeend', '<table class="table"> <tbody id="tbody_cat" class="tbody_cat"></tbody></table>')
        let tbody_cat = document.getElementById("tbody_cat");

        for (let good in this.allGoods) {
            console.log(this.allGoods[good]);
            let tableRow = '<tr>'
            tableRow += "<td>" + this.allGoods[good].id + "</td" + "<td> <b> Цена: </b> " + this.allGoods[good].price + " руб. </td></tr>" + "  <button class = btn_add_good_to_cart data-good_id =" + this.allGoods[good].id + "> Добавить в корзину </button>";

            tbody_cat.innerHTML += tableRow
        }
        this.addEventHandlers()
    },

    addEventHandlers() {
        document.querySelector(".tbody_cat").addEventListener('click', event => this.addToBasket(event));

    },
    addToBasket(event) {
        if (!event.target.classList.contains('btn_add_good_to_cart')) return;
        const good_id = event.target.dataset.good_id;
        goodsBasket.addToBasket(good_id);
    }
}

const goodsBasket = {
    goodsInBasket: [],

    getTotalPrice() {

        let total_cost = 0

        for (let n in this.goodsInBasket) {
            let good_cost = this.goodsInBasket[n].qty * this.goodsInBasket[n].price
            total_cost += good_cost
        }
        return total_cost
    },

    renderBasket() {
        let basketDiv = document.getElementById('basketSlot')
        basketDiv.innerHTML = ""
        if (this.goodsInBasket.length === 0) {
            basketDiv.insertAdjacentHTML('afterbegin', "<h2> Корзина товаров пуста</h2>")
        }

        else {


            basketDiv.insertAdjacentHTML('afterbegin', "<h2> Корзина товаров: </h2>")
            basketDiv.insertAdjacentHTML('beforeend', '<table class="table"> <tbody id="tbody"></tbody></table>')
            let tbody = document.getElementById("tbody");



            for (let good in this.goodsInBasket) {
                console.log(this.goodsInBasket[good]);
                let tableRow = '<tr>'
                tableRow += "<td>" + this.goodsInBasket[good].id + "</td" + "<td> <b> Количество: </b> " + this.goodsInBasket[good].qty + "<td> <b> Цена: </b> " + this.goodsInBasket[good].price + " руб. </td></tr>";

                tbody.innerHTML += tableRow
            }
            basketDiv.insertAdjacentHTML('beforeend', "<h2> <b> Итого: </b>   " + this.goodsInBasket.length + "  товаров(а) на сумму  " + this.getTotalPrice() + " руб. </h2>")

        }
    },

    addToBasket(good_id) {
        let added_good = goodsCatalogue.allGoods.find(x => x.id === good_id);
        if (goodsBasket.goodsInBasket.find(x => x.id === good_id)) {
            goodsBasket.goodsInBasket.find(x => x.id === good_id).qty += 1
            this.renderBasket()
            return;
        }
        this.goodsInBasket.push({ ...added_good });
        this.renderBasket()
    }

}
