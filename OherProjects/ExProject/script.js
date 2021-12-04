let nIdBook=0;
let nIdVisitors=0;
let nIdCardVisitors=0;
let book =[
    {
        id: nIdBook,
        name: "Идиот",
        avtor: "Федор Достоевский",
        yearOfPublishing :  2016,
        nameOfPublisher: "Книги-легенды",
        str: 640 ,
        n: 10
    },
];
let visitors = [
    {
        id:0,
        name: "Олександр",
        tel: "0663110715",
    }
];
let cardVisitors = [
    {
        id:0,
        idVisitors: 0,
        idBook: 0,
        dataStart: new Date(2020,2,14),
        dataEnd: new Date(2020,8,20)
    }
];
// menu
$(".nav a").on("click",(e)=>{
    $("section").removeClass("active");
    $("#"+e.target.innerHTML).addClass("active")
    if(e.target.innerHTML ==="Books"){
        tablBook();
    }
    else if(e.target.innerHTML ==="visitors"){
        FtablVisitors();
    }
    else if(e.target.innerHTML ==="cart"){
        addtablCart ();
    }
    else if(e.target.innerHTML ==="Statistics"){
        statisticsOll ();
    }
});
// /menu
// Books
$("#modulBut").on("click",()=>{
    if( !document.querySelector("#adBooks .modulAdd_0").classList.contains("active")){
        document.querySelector("#adBooks .modulAdd_0").classList.toggle("active");
        document.querySelector("#adBooks .modulDel_0").classList.toggle("active");
        document.querySelector("#adBooks .modulRem_0").classList.toggle("active");
    }
});
$("#modulButvisitors").on("click",()=>{
    if( !document.querySelector("#adVisitors .modulAdd_0").classList.contains("active")){
        document.querySelector("#adVisitors .modulAdd_0").classList.toggle("active");
        document.querySelector("#adVisitors .modulDel_0").classList.toggle("active");
        document.querySelector("#adVisitors .modulRem_0").classList.toggle("active");
    }
});
function addBook() {
    console.log(arguments[0] );
    if(arguments[0] === undefined) {
        let name = document.getElementById("adBooks").name.value;
        let avtor = document.getElementById("adBooks").avtor.value;
        let yearOfPublishing = document.getElementById("adBooks").yearOfPublishing.value;
        let nameOfPublisher = document.getElementById("adBooks").nameOfPublisher.value;
        let str = document.getElementById("adBooks").str.value;
        let n = document.getElementById("adBooks").n.value;
        if (name.length > 0 && avtor.length > 0 && yearOfPublishing.length > 0 && nameOfPublisher.length > 0 && str.length > 0 && n.length > 0) {
            nIdBook+=1;
            let id = nIdBook ;
            for (let i of book) {
                if(book.length > 0){
                    if (name === i.name) {
                        i.n += parseInt(n);
                        tablBook();
                        return true
                    }
                }
            }
            book.push({
                id: id,
                name: name,
                avtor: avtor,
                yearOfPublishing: yearOfPublishing,
                nameOfPublisher: nameOfPublisher,
                str: str,
                n: parseInt(n)
            });
            console.log(true);
            tablBook();
            return true
        } else {
            console.log("Поле не заповнене");
            return false
        }
    }
    else {
        // button
        if( document.querySelector("#adBooks .modulAdd_0").classList.contains("active")){
        document.querySelector("#adBooks .modulAdd_0").classList.toggle("active");
        document.querySelector("#adBooks .modulDel_0").classList.toggle("active");
        document.querySelector("#adBooks .modulRem_0").classList.toggle("active");
        }
        butRem.setAttribute("onclick", `removeBook(${arguments[0]})`);
        // value
        console.log(arguments[0]);
        for( let i of book){
            if(i.id === arguments[0]){
                document.getElementById("adBooks").name.value = i.name;
                document.getElementById("adBooks").avtor.value = i.avtor;
                document.getElementById("adBooks").yearOfPublishing.value = i.yearOfPublishing;
                document.getElementById("adBooks").nameOfPublisher.value = i.nameOfPublisher;
                document.getElementById("adBooks").str.value =i.str;
                document.getElementById("adBooks").n.value = i.n;
                break
            }
        }
    }
}
function tablBook(mass = book) {
    tablBooks.innerHTML ="";
    if(mass.length == 0) return false;
    for( let i of mass) {
        let te = document.createElement("tr");
        let th = document.createElement("th");
        th.innerText = i.id;
        te.append(th);
        th = document.createElement("td");
        th.innerText = i.name;
        te.append(th);
        th = document.createElement("td");
        th.innerText = i.avtor;
        te.append(th);
        th = document.createElement("td");
        th.innerText = i.yearOfPublishing;
        te.append(th);
        th = document.createElement("td");
        th.innerText = i.nameOfPublisher;
        te.append(th);
        th = document.createElement("td");
        th.innerText = i.str;
        te.append(th);
        th = document.createElement("td");
        th.innerText = i.n;
        te.append(th);
        th = document.createElement("td");
        th.innerHTML = `<button type="button" data-toggle="modal" data-target="#exampleModal"  onclick="addBook(${i.id})"  class="btn btn-dark">Edit <img src="https://as1.ftcdn.net/jpg/03/29/47/14/500_F_329471421_jAF6BuKkjZGW43ibhXj4wb6LCAaltWSS.jpg" style="width:30px;height:30px;"></button>`;
        te.append(th);
        tablBooks.append(te)
    }

}
tablBook();

function removeBook(id){
    book[id].name = document.getElementById("adBooks").name.value;
    book[id].avtor = document.getElementById("adBooks").avtor.value;
    book[id].yearOfPublishing = document.getElementById("adBooks").yearOfPublishing.value;
    book[id].nameOfPublisher = document.getElementById("adBooks").nameOfPublisher.value;
    book[id].str = document.getElementById("adBooks").str.value;
    book[id].n = document.getElementById("adBooks").n.value;
    tablBook();
}
function delBook() {
    let name = document.getElementById("adBooks").name.value;
    let idBook;
    for(let i in book){
        if(name === book[i].name){
            idBook= book[i].id;
            book.splice(i,1);
            break;
        }
    }
    for(let i in cardVisitors){
        if(idBook === cardVisitors[i].idBook){
            delete  cardVisitors[i]
        }
    }
    tablBook();
}
function surtName() {
    let x = sortSelect.value;
    if(typeof x === "number"){
        book.sort();
        return true
    }
    book.sort(function (a, b) {
        if (a[x] < b[x]) {
            return -1
        }
        if (a[x] > b[x]) {
            return 1
        }
        return 0
    });
    tablBook(book);
}
filtBook.addEventListener("keyup",()=>{
    let strFi = filtBook.value.toLowerCase();
    let mass =[];
    console.log(strFi);
    for(let i of book){
        if(i.name.toLowerCase().indexOf(strFi) !== -1 || i.avtor.toLowerCase().indexOf(strFi) !== -1 || i.nameOfPublisher.toLowerCase().indexOf(strFi) !== -1){
            mass.push(i)
        }
    }
    tablBook(mass)
});
// /Books
//visitors
function FtablVisitors(mass = visitors) {
    tablVisitors.innerHTML ="";
    if(mass.length == 0) return false;
    for( let i of mass) {
        let te = document.createElement("tr");
        let th = document.createElement("th");
        th.innerText = i.id;
        te.append(th);
        th = document.createElement("td");
        th.innerText = i.name;
        te.append(th);
        th = document.createElement("td");
        th.innerText = i.tel;
        te.append(th);
        th = document.createElement("td");
        th.innerHTML = `<button type="button" data-toggle="modal" data-target="#exampleModalvisitors"  onclick="addVisitors(${i.id})"  class="btn btn-dark"><img src="edit.png" alt=""></button>`;
        te.append(th);
        tablVisitors.append(te)
    }
}
FtablVisitors();
function addVisitors() {
    if(arguments[0] === undefined) {
        let name = document.getElementById("adVisitors").name.value,
            tel = document.getElementById("adVisitors").tel.value;
        if (name.length > 0 && tel.length > 0 ) {
            nIdVisitors+=1;
            let id = nIdVisitors;
            for (let i of visitors) {
                if(visitors.length > 0){
                    if (name === i.name) {
                        return true
                    }
                }
            }
            visitors.push({
                id: id,
                name: name,
                tel: tel,
            });
            FtablVisitors();
            return true
        } else {
            console.log("Поле не заповнене");
            return false;
        }
    }
    else {
        // button
        if( document.querySelector("#adVisitors .modulAdd_0").classList.contains("active")){
            document.querySelector("#adVisitors .modulAdd_0").classList.toggle("active");
            document.querySelector("#adVisitors .modulDel_0").classList.toggle("active");
            document.querySelector("#adVisitors .modulRem_0").classList.toggle("active");
        }
        butRemVisitors.setAttribute("onclick", `removeVisitors(${arguments[0]})`);
        // value
        for(let i of visitors){
            if(i.id === arguments[0]){
                document.getElementById("adVisitors").name.value = i.name;
                document.getElementById("adVisitors").tel.value = i.tel;
                break;
            }
        }
    }
}
function delVisitors() {
    let name = document.getElementById("adVisitors").name.value;
    let userId;
    for(let i in visitors){
        if(name === visitors[i].name){
            userId = visitors[i].id;
            visitors.splice(i,1);
            break;
        }
    }
    for(let i in cardVisitors){
        if(userId === cardVisitors[i].idVisitors){
            cardVisitors.splice(i,1);
        }
    }
    console.log(visitors);
    FtablVisitors();
}
function removeVisitors(id) {
    console.log(id);
    visitors[id].name = document.getElementById("adVisitors").name.value;
    visitors[id].tel = document.getElementById("adVisitors").tel.value;
    FtablVisitors();
}
// /visitors
// cardVisitors
inputVisitors.addEventListener("keyup",()=>{
    let strFi = inputVisitors.value.toLowerCase();
    let mass =[];
    if(mass.length<10){
        for(let i of visitors){
            if(i.name.toLowerCase().indexOf(strFi) !== -1 ){
                mass.push(i.name)
            }
        }
    }
    inputVisitorsDiv.innerHTML ="";
    for(let i of mass){
        let a = document.createElement("button");
        a.classList.add("list-group-item-action");
        a.classList.add("list-group-item");
        a.innerText = i;
        inputVisitorsDiv.append(a)
    }
});
inputVisitorsDiv.addEventListener("click",(e)=>{
    if(e.target.nodeName === "BUTTON"){
        console.log(e.target.innerHTML);
        inputVisitors.value = e.target.innerHTML;
        inputVisitorsDiv.innerHTML= ''
    }
});
inputBook.addEventListener("keyup",()=>{
    let strFi = inputBook.value.toLowerCase();
    let mass =[];
    if(mass.length<10){
        for(let i of book){
            if(i.name.toLowerCase().indexOf(strFi) !== -1 && i.n > 0){
                mass.push(i.name)
            }
        }
    }
    inputVisitorsDivBook.innerHTML ="";
    for(let i of mass){
        let a = document.createElement("button");
        a.classList.add("list-group-item-action");
        a.classList.add("list-group-item");
        a.innerText = i;
        inputVisitorsDivBook.append(a)
    }

});
inputVisitorsDivBook.addEventListener("click",(e)=>{
    if(e.target.nodeName === "BUTTON"){
        console.log(e.target.innerHTML);
        inputBook.value = e.target.innerHTML;
        inputVisitorsDivBook.innerHTML= ''
    }
});
function addtablCart(mass = cardVisitors) {
    tablCart.innerHTML='';
    if(mass.length === 0) return false;
    for(let i of mass){
        if(typeof i === "undefined") continue;
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        th.innerText = i.id;
        tr.append(th);
        th = document.createElement("td");
        th.innerText = i.idVisitors;
        tr.append(th);
        th = document.createElement("td");
        th.innerText = i.idBook;
        tr.append(th);
        th = document.createElement("td");
        th.innerText = userDate(i.dataStart);
        tr.append(th);
        th = document.createElement("td");
        if(i.dataEnd ===undefined){
            th.innerHTML = `<button type=\"button\"  onclick="removeCart(${i.id})"  class=\"btn btn-dark\">Dark</button>`
        }
        else{
            th.innerText = userDate(i.dataEnd);
        }
        tr.append(th);
        tablCart.append(tr)
    }
}
addtablCart();
function userDate(x) {
    let d = x.getDate();
    d = d < 10 ? "0" + d : d;
    let m = x.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    return `${d}.${m}.${x.getFullYear()}`;
}
function addCart() {
   let Visitors =  document.getElementById("inputVisitors").value;
   let Book =  document.getElementById("inputBook").value;
   let idVisitors;
   for(let i of visitors){
       if(Visitors === i.name){
           idVisitors = i.id;
       }
   }
    let idBook;
    for(let i of book){
        if(Book === i.name){
            idBook = i.id;
            i.n--;
        }
    }
    nIdCardVisitors++;
    cardVisitors.push(
        {
            id:nIdCardVisitors,
            idVisitors: idVisitors,
            idBook: idBook,
            dataStart: new Date(),
            dataEnd: undefined
        }
    );
    addtablCart()
}
function removeCart(id) {
    for(let i  of cardVisitors){
        if(i.id === id){
            i.dataEnd = new Date()
        }
    }
    addtablCart()
}
// /cardVisitors
// statistics
function statisticsOll() {
    let CartMassBook = [];
    for (let i of book){
        let n = 0;
        for(let j of cardVisitors){
            if( j.idBook === i.id){
                n++;
            }
        }

        CartMassBook.push(
            {
                id: i.id,
                number: n
            }
        )

    }
    CartMassBook.sort(function (a, b) {
        if (a.idBook < b.idBook) {
            return 1
        }
        if (a.idBook > b.idBook) {
            return -1
        }
        return 0
    });
    //
    if(CartMassBook.length !== 0) {
        let n = 0;
        tablStBooks.innerHTML ='';
        for (let i of CartMassBook) {
            if(n<5){
            let te = document.createElement("tr");
            let th = document.createElement("th");
            th.innerText = book[i.id].id;
            te.append(th);
            th = document.createElement("td");
            th.innerText = book[i.id].name;
            te.append(th);
            th = document.createElement("td");
            th.innerText = book[i.id].avtor;
            te.append(th);
            th = document.createElement("td");
            th.innerText = book[i.id].yearOfPublishing;
            te.append(th);
            th = document.createElement("td");
            th.innerText = book[i.id].nameOfPublisher;
            te.append(th);
            th = document.createElement("td");
            th.innerText = book[i.id].str;
            te.append(th);
            th = document.createElement("td");
            th.innerText = i.number;
            te.append(th);
                tablStBooks.append(te)
            }
            else break;
        }
    }

    let CartMassVisitors = [];
    for (let i of cardVisitors){
        let n = 0;
        for(let j of visitors){
            if( j.id === i.idVisitors){
                n++;
            }
        }
        CartMassVisitors.push(
            {
                id: i.idVisitors,
                number: n
            }
        )

    }

    CartMassVisitors.sort(function (a, b) {
        if (a.idVisitors < b.idVisitors) {
            return 1
        }
        if (a.idVisitors > b.idVisitors) {
            return -1
        }
        return 0
    });
    if(visitors.length !== 0) {
        let n = 0;
        tablStVisitors.innerHTML ='';
        for (let i of CartMassVisitors) {
            if(n<5){
                let te = document.createElement("tr");
                let th = document.createElement("th");
                th.innerText = visitors[i.id].id;
                te.append(th);
                th = document.createElement("td");
                th.innerText = visitors[i.id].name;
                te.append(th);
                th = document.createElement("td");
                th.innerText = visitors[i.id].tel;
                te.append(th);
                th = document.createElement("td");
                th.innerText = i.number;
                te.append(th);
                tablStVisitors.append(te)
            }
            else break;
        }
    }
}






// /statistics
