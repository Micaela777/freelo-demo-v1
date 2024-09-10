export function initFooterComponent() {

    class Footer extends HTMLElement {

         shadow = this.attachShadow({ mode: 'open' });

        constructor() {
            super();
            this.render();

            const copyEmail = this.shadow.querySelector(".email") as any
            copyEmail.addEventListener("click", (e) =>{
                e.preventDefault()

                navigator.clipboard.writeText(copyEmail.textContent)

                const copiedText = this.shadow.querySelector(".copied-text") as HTMLElement
                const copiedImg = this.shadow.querySelector(".ok-img") as HTMLElement

                copiedText.style.display = "inherit"
                copiedImg.style.display = "inherit"
                copyEmail.style.display = "none"
                

                setTimeout(() => {
                    copiedText.style.display = "none"
                    copiedImg.style.display = 'none';
                    copyEmail.style.display = "inherit";
                }, 2000)
            })
        };
        render() {

            const div = document.createElement('div');
            div.className = "footer-section";
            div.innerHTML = `
                <div class="email-container">
                    <h1 class="email">contact@luccatorres.com</h1>
                    <h4 class="copied-text">Copied!</h4>
                    <custom-copied-img class="ok-img"></custom-copied-img>
                </div>
                <div class="info-container">
                    <h3 class="copyright">© Lucca Torres, 2024</h3>
                    <div class="social-media-container">
                        <custom-youtube></custom-youtube>
                        <custom-instagram></custom-instagram>
                    </div>
                </div>
            `

            const style = document.createElement('style');

            style.innerHTML = `
                
                .footer-section{
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    gap: 50px;
                    padding: 12px 15px; 
                    background-color: #050505;
                }

                .email-container{
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    padding-top: 50px;
                    gap: 10px;
                }
                 @media (min-width: 769px) {
                    .email-container{
                        padding-top: 65px;
                    }
                }    

                .email{
                    margin: 0px;
                    font-family: "Belleza", sans-serif;
                    font-size: 22px;
                    font-weight: 400;
                    font-style: normal;
                    color: #C1C1C1;
                }
                @media (min-width: 769px) {
                    .email{
                        font-size: 27px;
                    }
                }

                .email:hover{
                    cursor: pointer;
                    text-decoration: underline;
                }

                .copied-text{
                    display: none;
                    margin: 0px;
                    font-family: "Belleza", sans-serif;
                    font-size: 22px;
                    font-weight: 400;
                    color: #D5F7DE;
                }
                @media (min-width: 769px) {
                    .copied-text{
                        font-size: 27px;
                    }
                }    

                .ok-img{
                    display: none;
                }

                .info-container{
                    width:  100%;
                    display: flex;
                    justify-content: space-between;
                }

                .copyright{
                    margin: 0px;
                    font-family: "Poppins", sans-serif;
                    font-size: 10px;
                    font-weight: 400;
                    font-style: normal;
                    align-self: end;
                    color: #C1C1C1;
                }

                .social-media-container{
                    display: flex;
                    gap: 15px;
                }

                
            `;

            this.shadow.appendChild(div);
            this.shadow.appendChild(style);
        };
    };
    
    customElements.define('custom-footer', Footer); 
}