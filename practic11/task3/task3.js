// region Task3
function task3() {


    // задаваемые параметры
    var gA = 320;    // длина большой (горизонтальной) полуоси эллипса в пикселях
    var gB = 50;     // длина малой (вертикальной) полуоси эллипса в пикселях

    var gMin = 20;   // длина стороны квадрата на заднем плане в пикселях (минимальная)
    var gMax = 70;   // длина стороны квадрата на переднем плане в пикселях (максимальная)

    var gFPS = 200;  // скорость перемещения квадрата (кадров в секунду)

///////////////////////

    onload = function ()
    {
        gStart = 0;
        gDelta = (gMax - gMin) / Math.PI;
        gX = 2 * gA + gMax;
        gY = gB + gMax;


        move ();
    }

    function move ()
    {
        if (self.gTRM) clearTimeout (gTMR);
        if (gStart > 2 * Math.PI) gStart = -.01;
        gStart += .01;

        var obj = document.getElementById ('cat');
        var le = gX + gA * Math.cos (gStart + 3 / 2 * Math.PI);
        var to = gY + gB * Math.sin (gStart + 3 / 2 * Math.PI);
        obj.style.left = le + 'px';
        obj.style.top  = to + 'px';

        var size = (gStart <= Math.PI) ? Math.max (parseInt (gMin + gDelta * gStart),
                parseInt (obj.style.width))
            : Math.min (parseInt (gMax - gDelta * (gStart - Math.PI)),
                parseInt (obj.style.width));
        obj.style.width = obj.style.height = size + 'px';



        gTMR = setTimeout (move, 1000 / gFPS);
    }
}
// endregion
task3()