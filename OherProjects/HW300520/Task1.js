 let f1=document.forms[0],
    button=document.getElementById('Button');
let arr=[];
let k=0;
function Save() {

    var newdiv = document.createElement("div");
    newdiv.innerHTML = `
<div style="background: ${f1.code.value};width: 300px">
 <div class="content">
 <div class="div">
 <h1>${f1.name.value}</h1>
 ${f1.type.value}<br>
 ${f1.code.value}
 </div>
 </div>
</div>`
    if(validateFormName()==true,codeValid()==true) {
        document.getElementById("allcol").appendChild(newdiv);
        return false;
    }
}
 function validateFormName() {
     var x = document.forms[0]["name"].value;
     if (x == null || x == "") {
         alert("Необходимо заполнить поле Color!");
         return false;
     } else {
         if (/^[a-zA-Z1]+$/.test(x) === false) {
             alert('В логине должны быть только латинские буквы');
             return false;
         }
         }
     return true;
 }
function codeValid() {
    var x = document.forms[0]["code"].value;
    if (x == null || x == "") {
        alert("Необходимо заполнить поле Code!");
        return false;
    } else {
        if (`${document.forms[0]["type"].value}` === 'RGB')
            if (/^[rgb(][0-255][,][0-255][,][0-255][)]+$/.test(x) === false)
                alert('Заполните поле Code за образцом rgb(117,113,13)');
            if (`${document.forms[0]["type"].value}` === 'RGBA')
                if (/^[rgba(][0-255][,][0-255][,][0-255][0-1][)]+$/.test(x) === false)
                    alert('Заполните поле Code за образцом rgba(117,113,13,1)');
                if (`${document.forms[0]["type"].value}` === 'HEX')
                    if (/^#[a-zA-Z0-9]{6}$/.test(x) === false) {
                        alert('Заполните поле Code за образцом #ADFF2F');
                        return false;
                    }else{
                        return true;
                    }

                    }
}
 button.addEventListener('click',Save);


