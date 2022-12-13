customElements.define("my-template1",
    class extends HTMLElement{

        constructor(){

            super();
            let template =  document.getElementById('mytemplate1');
            let content= template.content;
            let date = Date.now()
            let div = document.createElement('div')
            div.innerHTML= new Date(date)
            content.appendChild(div)
            const shadowRoot =this.attachShadow({mode:'open'});
            shadowRoot.appendChild(content.cloneNode(true));

        }


    }


)
