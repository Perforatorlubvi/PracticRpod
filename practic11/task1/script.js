// region Task1
function task1() {
    window.addEventListener('load', posElem, false);

    function posElem(EO) {

        var elems = document.getElementsByClassName('box');

        for (var i = elems.length - 1; i >= 0; i--) {
            var elem = elems[i];

            elem.style.top = elem.offsetTop + 'px';
            elem.style.left = elem.offsetLeft + 'px';
            elem.style.position = 'absolute';
            elem.onmousedown = imgMouseDown;
            elem.onmouseup = imgMouseUp;
        }


        function imgMouseDown(EO) {
            EO = EO || window.event;
            EO.preventDefault();
            console.log('Нажал на кота');

            var dounShiftCoordX = EO.pageX - EO.target.offsetLeft;
            var dounShiftCoordY = EO.pageY - EO.target.offsetTop;


            window.onmousemove = imgMouseMove;

            function imgMouseMove(EO) {
                EO = EO || window.event;
                EO.preventDefault();
                console.log('Тащу кота');

                EO.target.style.top = (EO.pageY - dounShiftCoordY) + 'px';
                EO.target.style.left = (EO.pageX - dounShiftCoordX) + 'px';

                var cont = document.getElementById('box');
                EO = EO


            }
        }

        function imgMouseUp(EO) {
            EO.preventDefault();
            console.log('Отпустил кота');

            window.onmousemove = null; // Как отменить  onmousemove после mauseup

        }


    }
}
// endregion





task1()
