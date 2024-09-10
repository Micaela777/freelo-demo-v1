export function initMenuComponent() {

    const menuImg = require("url:../img/menu.png");

    class Menu extends HTMLElement {
        constructor() {
            super();
            this.render();
        };
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.className = "menu";
            div.innerHTML = `
                <img class="menu-img" src="${menuImg}">
            `

            const style = document.createElement('style');

            style.innerHTML = `

                .menu-img{
                    height: 35px;
                    width: 55px;
                }
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    
    customElements.define('custom-menu', Menu); 
}