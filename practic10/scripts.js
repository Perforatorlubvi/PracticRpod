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
    if (pattn.test(document.getElementById("email").value)) {
        if (checkNumber(document.getElementById("phone").value)) {
            return true;
        }
    }
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