var CLR = ['red', 'yellow', 'green'];
let IND=2;
var dv = document.querySelectorAll( 'li');
function AAA ()
{
    if (++IND > 2) IND = 0;
    dv [IND].style.backgroundColor = CLR [IND];
}