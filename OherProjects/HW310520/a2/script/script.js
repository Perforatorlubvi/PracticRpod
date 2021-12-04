let mark = 0;

function test_mark() {
    if (mark == 0) {
        mark = 0;
    }
    else {
        mark -= 2;
    }
}

document.getElementById('first').onclick = function (e) {
    if (e.target.value == 2) {
        mark += 2;
    }
}
document.getElementById('second').onclick = function (e) {
    if (e.target.value == 1) {
        mark += 2;
    }
}
document.getElementById('third').onclick = function (e) {
    if (e.target.value == 2) {
        mark += 2;
    }
}
document.getElementById('fourth').onclick = function (e) {
    if (e.target.value == 1) {
        mark += 2;
    }
}
document.getElementById('fifth').onclick = function (e) {
    if (e.target.value == 2) {
        mark += 2;
    }
}
document.getElementById('last').onclick = function (e) {
    if (e.target.value == 1) {
        mark += 2;
    }
}

function button() {
    if (mark > 12) {
        mark = 12;
    }
    document.getElementById('mark').innerHTML = `<p>Ваша оценка:${mark}</p>`
}