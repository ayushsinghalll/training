class Table extends HTMLElement{

    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const Table = document.createElement('table');
        shadow.appendChild(Table)
    }
}
customElements.define('custom-table', Table)
const add = document.querySelector(".add")
function addd(){

    let rn = document.getAttribute('row')
    let cn = document.getAttribute('col')

    for (let r = 0; r < parseInt(rn, 10); r++) {
        const x = document.getElementById('myTable').insertRow(r);
        for (let c = 0; c < parseInt(cn, 10); c++) {
            const y = x.insertCell(c);
            y.innerHTML = "Row-" + r + " Column-" + c;
        }
    }
}
