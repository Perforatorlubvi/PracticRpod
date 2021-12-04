class Product {
    constructor(params = {}) {
        Object.assign(this, {
            pName: null,
            amount: 1,
            cost: 1
        }, { ...params });
    }
}

Product.prototype.toString = function () {
    return `${this.pName} (x${this.amount}), ${this.cost + ' UAH'}`;
};


let all_price = 0;
let all_things = 0;
let A_most_expencive_thing = {
    name: '',
    how_many_: 0,
    pricee_all_:0
}

const shopList = [
].map(prodDef => new Product(prodDef));

const addToShopList = prodDef => {
    const prod = shopList.find(prod => prod.pName === prodDef.pName);
    if (!prod) return shopList.push(new Product(prodDef));
    else{
        prod.cost += prodDef.cost * prodDef.amount;
    }
    prod.amount += prodDef.amount;
};
const printShopList = () => shopList.forEach(
    (prod, i) => document.getElementById('div_').innerHTML += (`<p>${i + 1}. ${prod} </p>`)
)


function all_price_func(params) {

}


function myFunc() {
    addToShopList({
        pName: document.getElementById('tovar').value,
        amount: parseInt(document.getElementById('howMany').value),
        cost: (parseInt(document.getElementById('howMany').value) * parseInt(document.getElementById('one').value))
    });
    if (A_most_expencive_thing.pricee_all_ <= parseInt(document.getElementById('howMany').value) * parseInt(document.getElementById('one').value)) {
        A_most_expencive_thing.name = document.getElementById('tovar').value;
        A_most_expencive_thing.how_many_ = parseInt(document.getElementById('howMany').value);
        A_most_expencive_thing.pricee_all_ = parseInt(document.getElementById('howMany').value) * parseInt(document.getElementById('one').value);
    }
    all_price += parseInt(document.getElementById('howMany').value) * parseInt(document.getElementById('one').value)
    all_things += parseInt(document.getElementById('howMany').value);
}

function myFunc1() {
    document.getElementById('div_').innerHTML = "";
    printShopList();

    document.getElementById('price').innerHTML = "ИТОГ:" + all_price + " UAH";
    document.getElementById('av_price-of_1_thing').innerHTML = "Средняя цена за 1 товар:" + Math.round(all_price / all_things) + " UAH";
    document.getElementById('most_expensive_thing').innerHTML = "Более дорогостоящий товар:" + A_most_expencive_thing.name + 
    '(x' + A_most_expencive_thing.how_many_ + ')' + ' ' + A_most_expencive_thing.pricee_all_ +'UAH';
}