export function initOneLastBreathImageComponent() {

    const oneLastBreathImg = require("url:../img/onelastbreath.png");

    class OneLastBreath extends HTMLElement {
        constructor() {
            super();
            this.render()
        }
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.className = "one-last-breath";
            div.innerHTML = `
                <img class="one-last-breath-img" src="${oneLastBreathImg}">
            `;

            const style = document.createElement('style');

            style.innerHTML = `
                .one-last-breath-img {
                    height: 160px;
                    width: 270px;
                    box-shadow: 10px 10px 20px;
                }
                @media (min-width: 769px) {
                    .one-last-breath-img{
                        height: 180px;
                        width: 300px;
                    }
                }
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-one-last-breath-img', OneLastBreath);
};