
//#1
// let a=0;
// while (a<100){
//     a++
//     console.log(a)
// }

//2
// let b=10;
// while (b<33){
//     b++
//     console.log(b);
// }

// let arr=[1,2,3,4,5]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }


var obj = { "Коля": '200','Петя': '400', 'Вася': '300'}

for (var prop in obj) {
    console.log( prop + " Имеет зарплату " + obj[prop]+" Доларов");
}

let arr=[ 2, 5, 9, 15, 0]
for (let i=0;i<arr.length;i++){
    if(arr[i]>3 && arr[i]<10){
        console.log(arr[i]);
    }
}
let date=new Date();//обявьляем дату
str = ["Понедельник", "Вторник", "Середа", "Четверг", "Пятница", "Суботта", "Воскресенье"] //массив дней
for (let i = 0; i < str.length; i++) {
    if ( date.getDay()=== i + 1) {
        document.write(`<i>${str[i]}</i>`) // "ё"
    }
}