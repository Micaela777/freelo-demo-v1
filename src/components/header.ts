import { Router } from "@vaadin/router";

export function initHeaderComponent() {

    class Header extends HTMLElement {

        shadow = this.attachShadow({ mode: 'open' });

        constructor() {
            super();
            this.render();

            const workButton = this.shadow.querySelector(".work") 
            workButton.addEventListener("click", (e) => {
                e.preventDefault()
                
                Router.go("./work")
            })
        };
        render() {

            const div = document.createElement('div');
            div.className = "header-section";
            div.innerHTML = `
                <div class="menu-container">
                    <custom-menu class="menu"></custom-menu>
                    <h3 class="work">WORK</h3>
                    <h3 class="about">ABOUT</h3>
                </div>
            `

            const style = document.createElement('style');

            style.innerHTML = `
                
                .menu-container{
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    padding-top: 35px;
                    padding-right: 35px;
                    gap: 40px;
                }
                @media (min-width: 769px) {
                    .menu-container{
                        padding-top: 50px;
                        padding-right: 60px
                    }
                }

                @media (min-width: 769px) {
                    .menu{
                        display: none;
                    }
                }

                .work,
                .about{
                    display: none;
                    margin: 0px;
                    font-family: "Be Vietnam Pro", sans-serif;
                    font-size: 15px;
                    font-weight: 800;
                    font-style: normal;
                    letter-spacing: 3px;
                    color: #ededed;
                }
                @media (min-width: 769px) {
                    .work,
                    .about{
                        display: inherit;
                    }
                }    

                .work:hover{
                    cursor: pointer;
                    color: #d9d2ce;
                }

                .about:hover{
                    cursor: pointer;
                    color: #d9d2ce;
                }
            `;

            this.shadow.appendChild(div);
            this.shadow.appendChild(style);
        };
    };
    
    customElements.define('custom-header', Header); 
}