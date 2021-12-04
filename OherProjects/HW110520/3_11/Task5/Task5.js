
function setSelected(e) {
    if(true){
        var selected = document.querySelector('#list .selected');
        if(selected) selected.classList.remove('selected');
        e.target.classList.add('selected');
    }
}
document.querySelector('#list').addEventListener('click',setSelected);


