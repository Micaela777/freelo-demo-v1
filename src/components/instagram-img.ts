export function initInstagramComponent() {

    const instagramImg = require("url:../img/instagram.png");

    class Instagram extends HTMLElement {
        constructor() {
            super();
            this.render();
        };
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.className = "instagram";
            div.innerHTML = `
                <img class="instagram-img" src="${instagramImg}">
            `

            const style = document.createElement('style');

            style.innerHTML = `

                .instagram-img{
                    height: 20px;
                    width: 20px;
                }
                @media (min-width: 769px) {
                    .instagram-img{
                        height: 30px;
                        width: 30px;
                    }
                }
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    
    customElements.define('custom-instagram', Instagram); 
}