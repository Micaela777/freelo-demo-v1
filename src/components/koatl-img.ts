export function initKoatlImageComponent() {

    const koatlImg = require("url:../img/koatl.jpg");

    class Koatl extends HTMLElement {
        constructor() {
            super();
            this.render()
        }
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.className = "koatl";
            div.innerHTML = `
                <img class="koatl-img" src="${koatlImg}">
            `;

            const style = document.createElement('style');

            style.innerHTML = `
                .koatl-img {
                    height: 160px;
                    width: 270px;
                    box-shadow: 10px 10px 20px;
                }
                @media (min-width: 769px) {
                    .koatl-img{
                        height: 180px;
                        width: 300px;
                    }
                }
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-koatl-img', Koatl);
};