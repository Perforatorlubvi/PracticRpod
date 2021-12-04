
function setSelectedSh(e) {
    if(e.shiftKey){
        var selected = document.querySelector('#list .selected');
        e.target.classList.add('selected');
    }
    if(e.ctrlKey){
        var selected = document.querySelector('#list .selected');
        if(selected) selected.classList.remove('selected');
        e.target.classList.add('selected');
    }
}
document.querySelector('#list').addEventListener('click',setSelectedSh);