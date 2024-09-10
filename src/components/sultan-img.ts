export function initSultanImageComponent() {

    const sultanImg = require("url:../img/sultan.png");

    class Sultan extends HTMLElement {
        constructor() {
            super();
            this.render()
        }
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.className = "sultan";
            div.innerHTML = `
                <img class="sultan-img" src="${sultanImg}">
            `;

            const style = document.createElement('style');

            style.innerHTML = `
                .sultan-img {
                    height: 160px;
                    width: 270px;
                    box-shadow: 10px 10px 20px;
                }
                @media (min-width: 769px) {
                    .sultan-img{
                        height: 180px;
                        width: 300px;
                    }
                }
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-sultan-img', Sultan);
};