// region Task2
function task2() {
    cat.onclick = function () {

        let start = Date.now();

        let timer = setInterval(function () {
            let timePassed = Date.now() - start;

            cat.style.left = timePassed / 5 + 'px';


            if (timePassed > 6000) clearInterval(timer);

        }, 20);
    }
}
// endregion
task2();