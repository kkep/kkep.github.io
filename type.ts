class StarRating {
    constructor(c) {
        c.innerHTML = "";
        for (let i = 0; i < 5; i++) {
            let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("height", "25");
            svg.setAttribute("width", "23");
            svg.setAttribute("data-rating", (i + 1) + "");
            svg.classList.add("star");
            svg.classList.add("rating");
            svg.innerHTML = '<polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill-rule:nonzero;" />';
            svg.onclick = function (e) {
                this.parentElement.setAttribute("data-stars", this.getAttribute("data-rating"));
            }
            c.appendChild(svg);
        }
    }
}
