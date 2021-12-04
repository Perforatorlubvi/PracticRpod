
function openbox(id){

    display = document.getElementById(id).style.display;



    if(display=='none'){

        document.getElementById(id).style.display='block';
        display.style.display = '';
    }else{

        document.getElementById(id).style.display='none';

    }


}


