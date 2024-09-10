export function initStanAndSvenImageComponent() {

    const stanAndSvenImg = require("url:../img/stanandsven.png");

    class StanAndSven extends HTMLElement {
        constructor() {
            super();
            this.render()
        }
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.className = "stan-and-sven";
            div.innerHTML = `
                <img class="stan-and-sven-img" src="${stanAndSvenImg}">
            `;

            const style = document.createElement('style');

            style.innerHTML = `
                .stan-and-sven-img {
                    height: 160px;
                    width: 270px;
                    box-shadow: 10px 10px 20px;
                }
                @media (min-width: 769px) {
                    .stan-and-sven-img{
                        height: 180px;
                        width: 300px;
                    }
                }
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-stan-and-sven-img', StanAndSven);
};