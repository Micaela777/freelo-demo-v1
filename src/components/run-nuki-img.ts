export function initRunKukiImageComponent() {

    const runNukiImg = require("url:../img/nuki.jpg");

    class RunNuki extends HTMLElement {
        constructor() {
            super();
            this.render()
        }
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.className = "run-nuki";
            div.innerHTML = `
                <img class="run-nuki-img" src="${runNukiImg}">
            `;

            const style = document.createElement('style');

            style.innerHTML = `
                .run-nuki-img{
                    height: 160px;
                    width: 270px;
                    box-shadow: 10px 10px 20px;
                }
                @media (min-width: 769px) {
                    .run-nuki-img{
                        height: 180px;
                        width: 300px;
                    }
                }
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-run-nuki-img', RunNuki);
};