function fun1() {
    let arr = [];
    arr.push(document.getElementById('student_1')); arr.push(document.getElementById('student_2')); arr.push(document.getElementById('student_3'));
    arr.push(document.getElementById('student_4')); arr.push(document.getElementById('student_5'));

    let x = document.getElementById('name_theme').value
    document.getElementById('res').innerHTML += `<div class = "Names_groups"><h4>${document.getElementById('grup').value}</h4> <h4>${document.getElementById('less').value}</h4> <h4>${x}</h4> </div>`
    for (let index = 0; index < arr.length; index++) {
        if (arr[index].checked) {
            document.getElementById('res').innerHTML += `<p>Student ${index + 1}---Присутствует</p>`
        }
        else {
            document.getElementById('res').innerHTML += `<p>Student ${index + 1}---Отсутствует</p>`
        }
    }
}