let choice = prompt("0.Дополнительное задание\n1.Задание 1\n2.Задание 2\n3.Задание 3\n4.Задание 4\n5.Задание 5\n6.Задание 6\n" + "Введите номер задания");
console.log(choice)
if (choice != null) {
    switch (Number(choice)) {
        case 0: {
            DopEx();
            break;
        }
        case 1: {
            Ex1();
            break;
        }
        case 2: {
            Ex2();
            break;
        }
        case 3: {
            Ex3();
            break;
        }
        case 4: {
            Ex4();
            break;
        }
        case 5:{
            Ex5();
            break;
        }
        case 6:{
            Ex6();
            break;
        }
    }
}

function DopEx() {
    alert("привіт");
    if (confirm("Показать окно?")) {
        let name = prompt("Введите число?");
        if (name.replace(/\d/g, '').length) {
            console.log("123");

        } else {
            if (Number(name) % 2 === 0) {
                alert("Привет");
            } else {
                alert("Hello javascript");
            }
        }
    }
}

function Ex1() {
    alert("Привет\njavascript!");
}

function Ex2() {
    let name = prompt("Как вас зовут?");
    alert(`Привет,${name}`);
}

function Ex3() {
    if (confirm("Выберите кнопку")) {
        alert("OK");
    } else {
        alert("Cancel");
    }
}

function Ex4() {
    let name = prompt("Введите свое имя");
    if (!name === "undefined") {
        if (confirm("Введенное имя правильное?")) {
            alert(`Добрый день,${name}`);
        } else {
            Ex4();
        }
    }
}
function Ex5(){
    let number = Math.floor(Math.random()*5);

    while(true){
        var num = Number(prompt("Вгадай число від 1 до 5:"));
        if (0<num||num>5)
        if (num === number){
            alert("Вітаю, ви вгадали!")
            break;
        } else {
            alert ("Не вгадали, спробуйте ще раз")
        }}
}
function Ex6(){
    let dig1 = Number(prompt("Введіть перше число:"))
    while (isNaN(dig1)) {
         dig1 = Number(prompt("Введіть перше число:"))
    }
    let znak = prompt("Оберіть дію")
    while (!/[`+-/*`]/g.test(znak)){
        znak = prompt("Оберіть дію")
    }
    let dig2 = Number(prompt("Введіть друге число:"))
    while (isNaN(dig2)) {
        dig1 = Number(prompt("Введіть перше число:"))
    }

    if (znak === "+"){
        let rez = (dig2 + dig1);
        alert ("Результат:" + rez);
    }
    else{
        if(znak === "-"){
            let res = (dig1 - dig2);
            alert ("Результат:" + res);}
        else{
            if(znak === "*"){
                let res = (dig1 * dig2);
                alert ("Результат:" + res);}
            else{
                if(znak === "/"){
                    let res = (dig1 / dig2);
                    alert ("Результат:" + res);}}}}

}
