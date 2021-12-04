for (let e of Array.from(document.links)) {
    if (e.href.match(/^https:/i)) {
        e.style.borderBottom = "2px dotted"
    }
}

