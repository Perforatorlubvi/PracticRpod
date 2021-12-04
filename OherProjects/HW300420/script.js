//task1
// const fun = (str) =>{
//   let letter=0 , digit = 0, symbol =0;
//      letter = str.match(/[a-zA-Z]/g).length;
// digit = str.match(/[0-9]/g).length;
// symbol = str.length -letter-digit;
//
//   console.log("Количество букв = "+letter+";Количество цифр = "+digit+"; Количество других символов = "+symbol);
//
// }
// console.log('Hello990--234!');
// fun('Hello990--234!');

//task2
// const fun =(num)=>{
//   const dict = [
//     ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', '', 'две', '', 'четыр', 'пят', 'шест', 'сем', 'восем', 'девят'],
//     ['', '', 'двадцать', 'тридцать', 'сорок', '', '', '', '', 'девяносто']
//   ];
//   if (num >= 0 && num <= 10)
//     return dict[0][num];
//   if (num > 10 && num <= 19)
//     return (dict[0][num] || dict[0][num - 10]) + 'надцать';
//   if (num >= 20 && num <= 99) {
//       const [units=0, tens] = [...('' + num)].reverse().map(num);
//       return [
//         tens ? dict[1][tens] || (dict[0][tens] + 'десят') : '',
//         units ? dict[0][units] : ''
//       ].join(' ');
//     }
// }
// let n = parseInt(prompt("Input num from 1 to 99"));
//
// console.log(fun(n));

//task3
// const change=(str)=>{
//   let re=/\d/gi;
//       let newStr = '';
//     for(let i =0; i < str.length;i++){
//       if(str[i].toLowerCase() === str[i]){
//        newStr += str[i].toUpperCase();
//      }else {
//        newStr += str[i].toLowerCase();
//      }
//    }
//    let nStr= newStr.replace(re, '_');
//      alert(nStr);
//     return nStr;
//   }
//   change("hOBBY1IS1BAKE1sWEET1pIE ");

//task4
// let str2= "font-size - fontSize, background-color - backgroundColor,";
//
// const initCap=(str)=> {
//   return str.split('-').map(
//      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//    )
//    .join('');
// }
// document.writeln(initCap(str2));
//task5
// let str3='cascading style sheets';
// const abbrev=(str)=> {
//   return str.split(' ').map(word => word[0].toUpperCase())
//    .join('');
// }
// alert(abbrev(str3));
//task6
// const concat=(...str)=> {
//   let tempstr = '';
//   for (let i of str) tempstr += ' '+i;
//   return tempstr;
// }
// alert(concat("str3", "str2", "str3"));

//task7
// const calculator =(str)=>{
//   let split = str.split(' '),
//       a = +split[0],
//       op = split[1],
//       b = +split[2];
// if(op==='+') return a+b;
// if(op==='-') return a-b;
// if(op==='*') return a*b;
// if(op==="/") return a/b;
// }
// console.log(calculator("12 - 11"));

//task8
// const urllink=(str)=>{
//   let target1 = ':';
//   // let target2 = '//';
//   // let target3 = '/';
//   let pos = 0;
//   let foundPos = str.indexOf(target1, pos);
//
//   for(let i =0; i < str.length;i++ )
//   {
//     if (foundPos == -1) break;
//     if(str[i]===target1)
//     {
//       console.log("протокол: "+str.slice(0, foundPos));
//     }
//   }
// let arr = str.split('/');
// console.log("домен: "+arr[2]);
//  console.log("путь: "+"/"+arr[3]+"/"+arr[4]);
// }
//
// urllink("https://itstep.org/ua/about");

//task9
// let str6="10/08/2020";
// const fmass=(str)=> {
// let arr=[];
// let pos=0;
// let endPos=0;
// while (endPos!=-1){
// endPos=str.indexOf('/', pos);
//  if(endPos!=-1){
// arr.push(str.slice(pos, endPos));
// pos=endPos+1;
// }else arr.push(str.slice(pos));
// }
// alert(arr);
// return arr;
// }
// fmass(str6);

//task10
// const print  = (str, name, day , month, year) =>{
//   let arr = str.split('%');
//   arr.splice(1, 4,name ,day,month,year);
//   console.log(arr.join(' '));
// }
//
// print("Today is %1 %2. %3. %4", "Monday", 10, 8, 2020)
