
function myFunc() {
    let name = document.getElementById('name').value;
    let text = document.getElementById('textaere_').value;

    let add = `<div class = "post"> <h2>${name}</h2> <p>${text}</p></div>`;

    document.getElementById('all_posts').innerHTML += add;
}