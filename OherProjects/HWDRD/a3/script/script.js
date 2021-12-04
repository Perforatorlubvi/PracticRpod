function MyFunction() {
    let parametrs = {
        color: null,
        size: 0,
        border_: 0,
        border_color: null,
        text: null,
    }

    parametrs.color = document.getElementById('color').value;
    parametrs.size = document.getElementById('size_').value;
    parametrs.border_ = document.getElementById('border__').value;
    parametrs.border_color = document.getElementById('border_color').value;
    parametrs.text = document.getElementById('text_').value;

    document.body.innerHTML = `<p class = "style_" style="color:${parametrs.color}; font-size:${parametrs.size}px; border-bottom: ${parametrs.border_}px solid ${parametrs.border_color};">${parametrs.text}</p>`;
}