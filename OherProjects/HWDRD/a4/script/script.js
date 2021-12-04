class Product {
    constructor(params = {}) {
        Object.assign(this, {
            pName: null,
            amount: 1,
            name_fakultet: null
        }, { ...params });
    }

    static sortDefault(a, b) {
        return (a.amount - b.amount) * 10 + a.pName.localeCompare(b.pName);
    };
}

Product.prototype.toString = function () {
    return `${this.pName} (x${this.amount}), ${this.name_fakultet}`;
};

const shopList = [
].map(prodDef => new Product(prodDef));

const addToShopList = prodDef => {
    const prod = shopList.find(prod => prod.pName === prodDef.pName);
    if (!prod) return shopList.push(new Product(prodDef));
    prod.amount += prodDef.amount;
};
const printShopList = () => shopList.forEach(
    (prod, i) => document.getElementById('div_').innerHTML += (`<p>${i + 1}. ${prod} </p>`)
)


const printShopList_parametr = () => shopList.forEach(
    (prod, i) => document.getElementById('div_').innerHTML += (`<p>${i + 1}. ${prod} </p>`)
)

function myFunc() {
    let size_of_group = parseInt(document.getElementById('howMany').value);
    if (size_of_group > 20) {
        size_of_group = 20;
    }
    if (size_of_group < 10) {
        size_of_group = 10;
    }
    addToShopList({ pName: document.getElementById('tovar').value, amount: size_of_group, name_fakultet: document.getElementById('one').value });
}

function myFunc1() {//для простого вывода
    document.getElementById('div_').innerHTML = "";
    printShopList();
}

function myFunc2() {//для вывода с сортировкой по количеству
    document.getElementById('div_').innerHTML = "";
    shopList.sort(Product.sortDefault);
    printShopList();
}

function myFunc3() {//для вывода с сортировкой по количеству
    document.getElementById('div_').innerHTML = "";
    shopList.sort();
    printShopList();
}