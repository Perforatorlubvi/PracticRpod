let maindiv=document.getElementById('maindiv')
let  button=document.getElementById('button');
let  button1=document.getElementById('button1');
let div=document.getElementById('k')
let arr=[];
let checkbox1=document.getElementById('check')
let seconddiv=document.getElementById('seconddiv')
function ValidateForm1(){
    if(validateFormName()){

    if(validateFormEmail()){


    if(validateFormPassword())
         if(validateFormReturn()){
    {
        return true;
    }}}}
}
function ValidateForm2(){
    if(validateFormFullName()){
        if(validateFormBirthday()) {
            if(validateFormGender()){
            return true;
        }}
    }
}
function vivod(x){
maindiv.innerHTML+=`<p>Username: ${x}</p>`
}
function vivod1(x){
maindiv.innerHTML+=`
<p>Email:${x}</p>
`
}
function vivod2(x){
maindiv.innerHTML+=`
<p>Password:*******</p>
<hr>
`
}
function validateFormName()
{
    var x=document.forms[0]["Username"].value;
    if (x==null || x=="")
    {
        alert("Username is required");
        return false;
    }
    if(x.length<4)
    {
        alert('Min length is 4 characters')
        return false;
    }
    if(x.length>20)
    {
        alert('Max length is 20 characters')
        return false;
    }
    if(x==='admin')
    {alert("Username ‘admin’ or ‘user’\n" + "or ‘test’ is not allowed")}
    else {
        if(x==='test'){alert("Username ‘admin’ or ‘user’\n" + "or ‘test’ is not allowed")}
        if(x==='user'){alert("Username ‘admin’ or ‘user’\n" + "or ‘test’ is not allowed")}
    }
    vivod(x)
    return true
}
function validateFormEmail() {

    var te = /^\w+([-._]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    let regexp = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
    let threeSymvols = /\w{3,99}@([\w-]+\.)+[\w-]+/g;
    var x = document.forms[0]["Email"].value;
    if (x == null || x == "") {
        alert("Email is required");
        return false
    }
    else{
        if (!te.test(x)) {
            if (!regexp.test(x)) {
                if (!threeSymvols.test(x)) {
                    alert("Enter valid email address");
                    return false
                }
                return false
            }
            return false
        }
    }
    vivod1(x);
    return true
}

function validateFormPassword(){
    var x=document.forms[0]["Password"].value;
    if (x==null || x=="")
    {
        alert("Password  is required");
        return false;
    }
    else{
        if(x.length<6){
            alert('Min length is 6 characters')
            return false;
        }
        else
            if(x.length>30){
            alert('Max length is 30 characters')
            return false;
        }
    }
    if(x.match(/^[0-9]/g)){
        div.innerHTML="Very eazy";
        return false
    }
    else{
        if(x.match(/[a-z-0-9]/g)){
            div.innerHTML="Eazy";
        }
        if(x.match(/[a-zA-Z-0-9]/g)){
            div.innerHTML="Normal";
        }
        if(x.match(/[.*+?^${}()|[\]\\]/g) && x.match(/[a-zA-Z-0-9]/g)){
            div.innerHTML="Hard";
        }
    }
    vivod2(x)
    return true
}

function validateFormReturn()
{
    var x=document.forms[0]["Repeat"].value;
    var x1=document.forms[0]["Password"].value;
    if (x==null || x=="")
    {
        alert("Repeat is required");
        return false;
    }
    else{
        if(x1!=x){
        alert('The passwords must match')
        return false;
        }
    }

}

function validateFormFullName()
{

    let  validfullname= /[a-zA-Z/s]/g
    var x=document.forms[1]["Fullname"].value;
    if (x==null || x=="")
    {
        alert("Username is required");
        return false;
    }
    if(x.length<2)
    {
        alert('Min length is 2 characters')
        return false;
    }
    if(x.length>50)
    {
        alert('Max length is 50 characters')
        return false;
    }
    if (!validfullname.test(x)){
        alert('Full name may only contain letters, spaces, and  dashes')
        return false;
    }
    Name(x);
    return true;
}
function validateFormBirthday()
{

    var x=document.forms[1]["birthday"].value;
    if (x==null || x=="")
    {
        alert("Birthday is required");
        return false;
    }
    arr=x.split('-');
    if(Number(arr[0])<1900)
    {

        alert("Min birthday is 01/01/1900");
        return false;
    }
    Birthday(x);
    return true;
}
function ISchecked(name) {

    var elements = document.getElementsByName(name);

    for (var i=0; i<elements.length; i++)  {

        if  (elements[i].checked) return true

    }
    return false

}

function validateFormGender()
{

    var x=document.forms[1]["Gender"].value;
    if (x==null || x=="")
    {
        alert("Gender is required");
        return false;
    }
    Gender(x)
    return true;

}
function Name(x) {
seconddiv.innerHTML+=`<p>Full name: ${x}</p>`
}
function Birthday(x) {
    seconddiv.innerHTML+=`<p>Birthday: ${x}</p>`
}
function Gender(x) {
    if(ISchecked('Gender')===true) {
        console.log(x)

        seconddiv.innerHTML += `<p>Gender: ${x}</p>`
    }
    checkbox();
}
function checkbox(){
    if(checkbox1.checked){
        document.getElementById('sub').innerHTML='Subscribe: ON'
    }
    else{
        document.getElementById('sub').innerHTML='Subscribe: OFF'
    }
}
button.addEventListener('click',ValidateForm1)
button1.addEventListener('click',ValidateForm2)
