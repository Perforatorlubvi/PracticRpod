let name_ = '';
let price = 0;
let book_name = '';
let kol = 1;
let date = '';
Addres = '';

function sel1() {
    //((document.getElementById('price1').value + 0) * document.getElementById('Kolichestvo').value) = document.getElementById('name1').textContent;

    document.getElementById('book_name').value = document.getElementById('name1').textContent;
    document.getElementById('Kolichestvo').value = 1;

    book_name = document.getElementById('book_name').value;
    kol = document.getElementById('Kolichestvo').value + 0;

    price = (document.getElementById('price1') + 0) * kol;
}

function sel2() {
    //((document.getElementById('price1').value + 0) * document.getElementById('Kolichestvo').value) = document.getElementById('name1').textContent;

    document.getElementById('book_name').value = document.getElementById('name2').textContent;
    document.getElementById('Kolichestvo').value = 1;

    book_name = document.getElementById('book_name').value;
    kol = document.getElementById('Kolichestvo').value + 0;

    price = (document.getElementById('price1') + 0) * kol;
}

function sel3() {
    //((document.getElementById('price1').value + 0) * document.getElementById('Kolichestvo').value) = document.getElementById('name1').textContent;

    document.getElementById('book_name').value = document.getElementById('name3').textContent;
    document.getElementById('Kolichestvo').value = 1;

    book_name = document.getElementById('book_name').value;
    kol = document.getElementById('Kolichestvo').value + 0;

    price = (document.getElementById('price1') + 0) * kol;
}

function fin_bu() {
    name_ = document.getElementById('name_').value;
    book_name = document.getElementById('book_name').value;
    date = document.getElementById('Date').value;
    Addres = document.getElementById('Addres').value;
    document.getElementById('finish').innerHTML = `${name_}, thanks for the order! <br /> Book "${book_name}" will be delivered on ${date} <br /> to ${Addres}`;
}