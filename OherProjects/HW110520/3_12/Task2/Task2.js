document.addEventListener('click',look);
function look(e){
    if(e.target.className == 'main'){
        let param = e.target.children[0];
        param.style.display = param.style.display === "block" ? "none" : "block";
    }
}
