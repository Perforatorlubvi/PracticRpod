var ul = document.getElementById("days");
    
    for(let children=1;children<31;children++){
        var li = document.createElement("li");
        li.setAttribute( "class", children );
        li.appendChild(document.createTextNode(children));
        
        ul.append(li);
    }





    let nowDate = new Date(),
    nowDateNumber = nowDate.getDate(),
    nowMonth = nowDate.getMonth(),
    nowYear = nowDate.getFullYear(),
    container = document.getElementById('month-calendar'),
    monthContainer = container.getElementsByClassName('month-name')[0],
    yearContainer = container.getElementsByClassName('year-name')[0],
    daysContainer = document.getElementById('days'),
    prev = container.getElementsByClassName('prev')[0],
    next = container.getElementsByClassName('next')[0],
    monthName = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];



let curDate = nowDate.setMonth(nowDate.getMonth() - 1);


function setMonthCalendar(year,month) {
    let monthDays = new Date(year, month + 1, 0).getDate(),
        monthPrefix = new Date(year, month, 0).getDay(),
        monthDaysText = '';

    monthContainer.textContent = monthName[month];
    yearContainer.textContent = year;
    daysContainer.innerHTML = '';

    if (monthPrefix > 0){
        for (let i = 1  ; i <= monthPrefix; i++){
            monthDaysText += '<li></li>';
        }
    }

    for (let i = 1; i <= monthDays; i++){
        monthDaysText += `<li id="${i}">${ i}</li>`;
    }

    daysContainer.innerHTML = monthDaysText;

    if (month == nowMonth && year == nowYear){
        days = daysContainer.getElementsByTagName('li');
        days[monthPrefix + nowDateNumber - 1].classList.add('date-now');
    }
}

setMonthCalendar(nowYear,nowMonth);

prev.onclick = function () {
    let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));

    curDate.setMonth(curDate.getMonth() - 1);

    var curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();

    setMonthCalendar(curYear,curMonth);
}

next.onclick = function () {
    let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));

    curDate.setMonth(curDate.getMonth() + 1);

    let curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();

    setMonthCalendar(curYear,curMonth);
}

    var a;
document.querySelector('#days').addEventListener('click', function(e){ 
    var id = e.target.id;
    swa()

    let sp=document.getElementById("modalSpan");
    let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));
    let mouth=curDate.getMonth()+1;
    sp.textContent=e.target.id+"/"+mouth+"/"+curDate.getFullYear();

    a=id;

    });

    var b = document.getElementById('overlay');
    function swa(){
        b.style.visibility = 'visible';
        b.style.opacity = '1';
        b.style.transition = 'all 0.7s ease-out 0s';
    }
    function swa2(){
        for(let i=0;i<document.getElementsByTagName("input").length;i++){
            document.getElementsByTagName("input")[i].value="";
        }
        
        b.style.visibility = 'hidden';
        b.style.opacity = '0';
    }
    function Savedata(){
        var data=document.getElementById("taskName");
        var data_task=document.getElementById("task");

        document.getElementById(a).innerHTML+=`<span style="color:red"><br>${data.value}<br>${data_task.value}</span>`;
        swa2();
    }
    




    

    
