customElements.define("my-template1",
    class extends HTMLElement{
        constructor(){
            super();
            let template =  document.getElementById('mytemplate1');
            let content= template.content;
            let div1 = document.createElement('p')
            div1.innerHTML= "Hello Templete 1"
            content.appendChild(div1)
            const shadowRoot =this.attachShadow({mode:'open'});
            shadowRoot.appendChild(content.cloneNode(true));

        }
    }
)
customElements.define("my-template2",
    class extends HTMLElement{
        constructor(){
            super();
            let template =  document.getElementById('mytemplate2');
            let content= template.content;
            let div1 = document.createElement('p')
            div1.innerHTML= "Hello Templete 2"
            content.appendChild(div1)
            const shadowRoot =this.attachShadow({mode:'open'});
            shadowRoot.appendChild(content.cloneNode(true));

        }
    }
)
customElements.define("my-template3",
    class extends HTMLElement{
        constructor(){
            super();
            let template =  document.getElementById('mytemplate3');
            let content= template.content;
            let div1 = document.createElement('p')
            div1.innerHTML= "Hello Templete 3"
            content.appendChild(div1)
            const shadowRoot =this.attachShadow({mode:'open'});
            shadowRoot.appendChild(content.cloneNode(true));

        }
    }
)
