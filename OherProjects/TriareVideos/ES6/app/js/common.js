let a=[1,2,3,4];
let b=a.filter((num)=>num>3);
console.log(b);
a.push(5);
console.log(a);


const Obj={
    es:"ES6"
};
Obj.es='ES7';
console.log(Obj);

const num1=[1,2,3,4];
const num2=[5,6,7,8];
console.log([...num1, ...num2]);

const A={
    a:'default',
    b:'just test'
}
const B={
    a:'value from b'
}
let C={
    ...A,
    ...B
}
console.log(C);
const arr=[1,2,3]
function sum(a,b,c){
    return a+b+c;
}

console.log(sum(...arr))

function res(arg,arg2,...REST){
    console.log(arg,arg2, REST);
}
res(1,2,3,4,5,6,7)

const greet=(name='Zhora',age=3)=>`Hello ${name},your age is ${age}`
console.log(greet("ametist",35))

const f=(a,b)=>{
    console.log(a+b);
}
f(1,2)

