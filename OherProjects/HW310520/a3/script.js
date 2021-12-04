let text_all = document.getElementById('text').textContent;

$('#checkbox_check').on('click', function () {
    let checkboxStatus = $(this).prop('checked')
    console.log(checkboxStatus)
})

function ckcik_button() {
    let bold = "font-weight: normal;";
    let line = "text-decoration: none;";
    let italic = "font-style: normal;";
    let pos = "";

    if (document.getElementById('bold').checked) {
        bold = "font-weight: 900;"
    }
    if (document.getElementById('line').checked) {
        line = "text-decoration: underline;"
    }
    if (document.getElementById('italic').checked) {
        italic = "font-style: italic;";
    }
    if (document.getElementById('left').checked) {
        pos = "text-align:start;"
    } else if (document.getElementById('right').checked) {
        pos = "text-align:right;"
    }
    else if (document.getElementById('center').checked) {
        pos = "text-align:center;"
    }

    let text_ = document.getElementById('text_area').value;
    document.getElementById('text').innerHTML = `<p style = "${bold} ${line} ${italic} ${pos}">${text_}</p>`;
}

document.getElementById('button').addEventListener('click', () => {
    alert(123);
})