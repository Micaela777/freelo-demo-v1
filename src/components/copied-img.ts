export function initCopiedImgComponent() {

    const copiedImg = require("url:../img/ok.png");

    class CopiedImg extends HTMLElement {
        constructor() {
            super();
            this.render();
        };
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.className = "copied";
            div.innerHTML = `
                <img class="copied-img" src="${copiedImg}">
            `

            const style = document.createElement('style');

            style.innerHTML = `

                .copied-img{
                    height: 12px;
                    width: 12px;
                }
                @media (min-width: 769px) {
                    .copied-img{
                        height: 17px;
                        width: 17px;
                    }
                }
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    
    customElements.define('custom-copied-img', CopiedImg); 
}