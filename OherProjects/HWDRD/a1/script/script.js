class Product {
    constructor(params = {}) {
        Object.assign(this, {
            pName: null,
            amount: 1,
            bought: false
        }, { ...params });
    }

    static sortDefault(a, b) {  // чтобы сначала шли некупленные продукты, а потом – купленные
        return (a.bought - b.bought) * 10 + a.pName.localeCompare(b.pName);
    };
}

Product.prototype.toString = function () {
    return `${this.pName} (x${this.amount}), ${this.bought ? 'куплено' : 'не куплено'}`;
};

const shopList = [
    { pName: 'Хлеб', amount: 1 },
    { pName: 'Печенье', amount: 5, bought: true },
    { pName: 'Молоко', bought: true },
].map(prodDef => new Product(prodDef));

const addToShopList = prodDef => {
    const prod = shopList.find(prod => prod.pName === prodDef.pName);
    if (!prod) return shopList.push(new Product(prodDef));
    prod.amount += prodDef.amount;
};
const printShopList = () => shopList.forEach(
    (prod, i) => document.getElementById('div_').innerHTML += (`<p>${i + 1}. ${prod} </p>`)
)

let true_false = true;

function fun1() {
    var chbox;
    chbox = document.getElementById('one');
    if (chbox.checked) {
        true_false = true;
        console.log(true_false);
    }
    else {
        true_false = false;
        console.log(true_false);
    }
}

function myFunc() {
    addToShopList({ pName: document.getElementById('tovar').value, amount: parseInt(document.getElementById('howMany').value), bought: true_false });
}

function myFunc1() {
    document.getElementById('div_').innerHTML = "";
    shopList.sort(Product.sortDefault);
    printShopList();
}