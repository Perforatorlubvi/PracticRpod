const massBD =[
    {
        id: 2,
        name: 'Mark',
        lastname:'Zuckenberg',
        age:36,
        company:'FaceBook'
    },
    {
        id: 1,
        name: 'Larry',
        lastname:'Page',
        age:47,
        company:'Google'
    },
    {
        id: 11,
        name: 'Timothy',
        lastname:'Cook',
        age:57,
        company:'Apple'
    },
    {
        id: 3,
        name: 'Bill',
        lastname:'Gates',
        age:62,
        company:'Microsoft'
    },
];

function mySort(str ="") {
    console.log(str);
    if(str === "name"){
        massBD.sort((a,b)=>{
            let nameA =a.name.toLowerCase(), nameB = b.name.toLowerCase();
            if(nameA > nameB){
                return 1
            }
            else if(nameA< nameB){
                return -1
            }
            return 0
        });
    }
    else if(str === "id"){
        massBD.sort((a,b)=>{
            if(a.id > b.id){
                return 1
            }
            else if(a.id< b.id){
                return -1
            }
            return 0
        });
    }
    else if(str === "Last name"){
        massBD.sort((a,b)=>{
            if(a.lastname > b.lastname){
                return 1
            }
            else if(a.lastname< b.lastname){
                return -1
            }
            return 0
        });
    }
    else if(str === "age"){
        massBD.sort((a,b)=>{
            if(a.age > b.age){
                return 1
            }
            else if(a.age< b.age){
                return -1
            }
        });
    }
    else if(str === "company"){
        massBD.sort((a,b)=>{
            if(a.company > b.company){
                return 1
            }
            else if(a.company< b.company){
                return -1
            }
        });
    }
    getMass();
}
const ulBookId = document.getElementById("ulBook");
function getMass(massSort = massBD) {
    ulBookId.innerHTML = '';
    massBD.map((valer)=>{
        let li = `<li><p># ${valer.id}</p><h2>${valer.name}</h2><p>${valer.lastname}</p><p> ${valer.age
        }</p><p>${valer.company}</p></li>`;
        ulBookId.innerHTML +=li;
    })
}
getMass();
const valForm =  document.getElementById("var");
document.getElementById("sortBtn").addEventListener("click", () => {
    mySort(valForm.value)})