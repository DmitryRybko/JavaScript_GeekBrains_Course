const goodsCatalogue = {
    allGoods: [
        {
            id: "good_01",
            qty: 5,
            price: 1500,
        },
        {
            id: "good_02",
            qty: 3,
            price: 2000,
        },
        {
            id: "good_03",
            qty: 7,
            price: 800,
        },
        {
            id: "good_04",
            qty: 4,
            price: 300,
        }
    ],

    renderCatalogue() {
        let catalogDiv = document.getElementById('catalog')
        catalogDiv.insertAdjacentHTML('afterbegin', "<h2> Каталог товаров: </h2>")
        catalogDiv.insertAdjacentHTML('beforeend', '<table class="table"> <tbody id="tbody_cat"></tbody></table>')
        let tbody_cat = document.getElementById("tbody_cat");

        for (good in this.allGoods) {
            console.log(this.allGoods[good]);
            let tableRow = '<tr>'
            tableRow += "<td> <b>Наименование товара:</b> " + this.allGoods[good].id + "</td" + "<td> <b> Количество: </b> " +
                this.allGoods[good].qty + "<td> <b> Цена: </b> " + this.allGoods[good].price + " руб. </td></tr>";

            tbody_cat.innerHTML += tableRow
        }

    }

}


const goodsBasket = {
    goodsInBasket: [goodsCatalogue.allGoods[0], goodsCatalogue.allGoods[1], goodsCatalogue.allGoods[3]],

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

        if (this.goodsInBasket.length === 0) {
            basketDiv.insertAdjacentHTML('afterbegin', "<h2> Корзина товаров пуста</h2>")
        }

        else {


            basketDiv.insertAdjacentHTML('afterbegin', "<h2> Корзина товаров: </h2>")
            basketDiv.insertAdjacentHTML('beforeend', '<table class="table"> <tbody id="tbody"></tbody></table>')
            let tbody = document.getElementById("tbody");



            for (good in this.goodsInBasket) {
                console.log(this.goodsInBasket[good]);
                let tableRow = '<tr>'
                tableRow += "<td> <b>Наименование товара:</b> " + this.goodsInBasket[good].id + "</td" + "<td> <b> Количество: </b> " + this.goodsInBasket[good].qty + "<td> <b> Цена: </b> " + this.goodsInBasket[good].price + " руб. </td></tr>";

                tbody.innerHTML += tableRow
            }
            basketDiv.insertAdjacentHTML('beforeend', "<h2> <b> Итого: </b>   " + this.goodsInBasket.length + "  товаров(а) на сумму  " + this.getTotalPrice() + " руб. </h2>")

        }


    }

}

