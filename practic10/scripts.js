
let digarr=['1','2','3','4','5','6','7','8','9','0'];

function CheckData() {
    let a = confirm("Are you sure you want to send the entered data?")
    if (a) CheckForm()

}

function checkFillFields() {
    let count = 0;
    for (let i = 0; i < document.querySelectorAll(".inputField").length; i++) {
        if (document.querySelectorAll(".inputField")[i].value === "") {
            count++;
        }
    }

    if (count > 0) {
        alert("Please fill in all fields");
        return false;
    } else return true;

}

function checkNumber(phoneNumber) {
    phoneNumber = phoneNumber.replace(/[\s\-\(\)]/g, '');
    return phoneNumber.match(/^((\+?3)?8)?0\d{9}$/) != null;
}

function CheckValidFields() {

    let pattn = new RegExp("^[\.\-_A-Za-z0-9]+?@[\.\-A-Za-z0-9]+?\.[A-Za-z0-9]{2,6}$");
    if(CheckName()) {
        if(CheckOrg()) {
            if (pattn.test(document.getElementById("email").value)) {
                if (checkNumber(document.getElementById("phone").value)) {
                    return true
                }
            }
        }
    }
}
function CheckName(){
    if(document.getElementById("name").value.length>0 && document.getElementById("name").value.length<30){
        for(let i=0;i<document.getElementById("name").value.split('').length;i++){
            for(let j=0;j<digarr.length;j++){
                if(document.getElementById("name").value.split('')[i]==digarr[j]){
                    return false
                }
            }
        }
        return true
    }else
        return false
}
function CheckOrg(){
    if(document.getElementById("org").value.length>2 && document.getElementById("org").value.length<120){
        return true
    }else
        return false
}

function CheckForm() {
    if (checkFillFields()) {
        if (CheckValidFields()) {
            alert("My congratulations,you send valid data");
        }
        else {
            alert("I`m so sorry,but your data is not valid")
        }
    }

}


document.getElementById("#button_clear").addEventListener("click", () => {
    for (let i = 0; i < document.querySelectorAll(".inputField").length; i++) {
        document.querySelectorAll(".inputField")[i].value = ""
    }
})