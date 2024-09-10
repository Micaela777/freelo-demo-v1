export function initStudioImageComponent() {

    const studioImg = require("url:../img/estudio.png");

    class Studio extends HTMLElement {
        constructor() {
            super();
            this.render()
        }
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.className = "studio";
            div.innerHTML = `
                <img class="studio-img" src="${studioImg}">
            `;

            const style = document.createElement('style');

            style.innerHTML = `
                .studio-img {
                    height: 100vh;
                };
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-studio-img', Studio);
};