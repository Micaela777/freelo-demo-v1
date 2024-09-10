export function initTimmiaImageComponent() {

    const timmiaImg = require("url:../img/timmia.jpg");

    class Timmia extends HTMLElement {
        constructor() {
            super();
            this.render()
        }
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.className = "timmia";
            div.innerHTML = `
                <img class="timmia-img" src="${timmiaImg}">
            `;

            const style = document.createElement('style');

            style.innerHTML = `
                .timmia-img {
                    height: 160px;
                    width: 270px;
                    box-shadow: 10px 10px 20px;
                }
                @media (min-width: 769px) {
                    .timmia-img{
                        height: 180px;
                        width: 300px;
                    }
                }
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-timmia-img', Timmia);
};