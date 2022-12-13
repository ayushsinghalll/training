class MyElements extends HTMLElement{

    constructor() {
        super();
        this.attachShadow({mode:'open'})
        let p = document.createElement('p')
        let style = this.getAttribute('style')
        let message = this.getAttribute('message')

        p.style = style
        p.innerText = message
        this.shadowRoot.appendChild(p)
    }
}/*
let templete =  document.getElementById('id-template')
let content = templete.content
document.body.appendChild(content)*/

customElements.define('my-element',MyElements)

customElements.define("my-template1",
    class extends HTMLElement{
    constructor() {
        super();
        let templete1 = document.getElementById('my-template1')
        let content = templete1.content
        const root=  this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(content.cloneNode(true))

    }
    })
