import { Router } from '@vaadin/router';

class Work extends HTMLElement{
  connectedCallback(){
        this.render();

        const rNTitle = document.querySelector(".first-nuki-title") as HTMLElement
        const nText = rNTitle.textContent
        const nukiDirector = document.querySelector(".first-director") as HTMLElement

        const tTitle = document.querySelector(".first-timmia-title") as HTMLElement
        const tText = tTitle.textContent
        const timmiaDirector = document.querySelector(".second-director") as HTMLElement

        const kTitle = document.querySelector(".first-koatl-title") as HTMLElement
        const kText = kTitle.textContent
        const koatlDirector = document.querySelector(".third-director") as HTMLElement

        const sasTitle = document.querySelector(".first-sas-title") as HTMLElement
        const sasText = sasTitle.textContent
        const sasDirector = document.querySelector(".fourth-director") as HTMLElement

        const olbTitle = document.querySelector(".first-olb-title") as HTMLElement
        const olbText = olbTitle.textContent
        const olbDirector = document.querySelector(".fifth-director") as HTMLElement

        const stsTitle = document.querySelector(".first-sts-title") as HTMLElement
        const stsText = stsTitle.textContent
        const stsDirector = document.querySelector(".sixth-director") as HTMLElement


        const nukiImg = document.querySelector(".nuki-img") 
        const runNukiStyle = nukiImg.shadowRoot.querySelector(".run-nuki-img") as HTMLElement

        const timmiaImg = document.querySelector(".timmia-img") 
        const timmiaStyle = timmiaImg.shadowRoot.querySelector(".timmia-img") as HTMLElement

        const koatlImg = document.querySelector(".koatl-img") 
        const koatlStyle = koatlImg.shadowRoot.querySelector(".koatl-img") as HTMLElement

        const sasImg = document.querySelector(".sas-img") 
        const sasStyle = sasImg.shadowRoot.querySelector(".stan-and-sven-img") as HTMLElement

        const olbImg = document.querySelector(".olb-img") 
        const olbStyle = olbImg.shadowRoot.querySelector(".one-last-breath-img") as HTMLElement

        const stsImg = document.querySelector(".sts-img") 
        const stsStyle = stsImg.shadowRoot.querySelector(".sultan-img") as HTMLElement


        const nukiTitle = document.querySelector(".run-nuki-title")
            nukiTitle.addEventListener("click", (e) => {
                e.preventDefault()

                rNTitle.style.display = "inherit"
                nukiDirector.style.display = "inherit"
                tTitle.style.display = "none"
                timmiaDirector.style.display = "none"
                kTitle.style.display = "none"
                koatlDirector.style.display = "none"
                sasTitle.style.display = "none"
                sasDirector.style.display = "none"
                olbTitle.style.display = "none"
                olbDirector.style.display = "none"
                stsTitle.style.display = "none"
                stsDirector.style.display = "none"


                if(nText == "RUN NUKI!"){
                    runNukiStyle.style.filter = "brightness(15%)"
                    timmiaStyle.style.filter = "brightness(100%)"
                    koatlStyle.style.filter = "brightness(100%)"
                    sasStyle.style.filter = "brightness(100%)"
                    olbStyle.style.filter = "brightness(100%)"
                    stsStyle.style.filter = "brightness(100%)"
                }
            })


        const timmiaTitle = document.querySelector(".timmia-title")
            timmiaTitle.addEventListener("click", (e) => {
                e.preventDefault()

                rNTitle.style.display = "none"
                nukiDirector.style.display = "none"
                tTitle.style.display = "inherit"
                timmiaDirector.style.display = "inherit"
                kTitle.style.display = "none"
                koatlDirector.style.display = "none"
                sasTitle.style.display = "none"
                sasDirector.style.display = "none"
                olbTitle.style.display = "none"
                olbDirector.style.display = "none"
                stsTitle.style.display = "none"
                stsDirector.style.display = "none"


                if(tText == "TIMMIA"){
                    runNukiStyle.style.filter = "brightness(100%)"
                    timmiaStyle.style.filter = "brightness(15%)"
                    koatlStyle.style.filter = "brightness(100%)"
                    sasStyle.style.filter = "brightness(100%)"
                    olbStyle.style.filter = "brightness(100%)"
                    stsStyle.style.filter = "brightness(100%)"   
                }
            })

        const koatlTitle = document.querySelector(".koatl-title")
            koatlTitle.addEventListener("click", (e) => {
                e.preventDefault()

                rNTitle.style.display = "none"
                nukiDirector.style.display = "none"
                tTitle.style.display = "none"
                timmiaDirector.style.display = "none"
                kTitle.style.display = "inherit"
                koatlDirector.style.display = "inherit"
                sasTitle.style.display = "none"
                sasDirector.style.display = "none"
                olbTitle.style.display = "none"
                olbDirector.style.display = "none"
                stsTitle.style.display = "none"
                stsDirector.style.display = "none"

                if(kText == "KOATL"){
                    runNukiStyle.style.filter = "brightness(100%)"
                    timmiaStyle.style.filter = "brightness(100%)"
                    koatlStyle.style.filter = "brightness(15%)"
                    sasStyle.style.filter = "brightness(100%)"
                    olbStyle.style.filter = "brightness(100%)"
                    stsStyle.style.filter = "brightness(100%)"
                }
            })    

        const stanASTitle = document.querySelector(".stan-and-sven-title")
            stanASTitle.addEventListener("click", (e) => {
                e.preventDefault()

                rNTitle.style.display = "none"
                nukiDirector.style.display = "none"
                tTitle.style.display = "none"
                timmiaDirector.style.display = "none"
                kTitle.style.display = "none"
                koatlDirector.style.display = "none"
                sasTitle.style.display = "inherit"
                sasDirector.style.display = "inherit"
                olbTitle.style.display = "none"
                olbDirector.style.display = "none"
                stsTitle.style.display = "none"
                stsDirector.style.display = "none"

                if(sasText == "STAN AND SVEN"){
                    runNukiStyle.style.filter = "brightness(100%)"
                    timmiaStyle.style.filter = "brightness(100%)"
                    koatlStyle.style.filter = "brightness(100%)"
                    sasStyle.style.filter = "brightness(15%)"
                    olbStyle.style.filter = "brightness(100%)"
                    stsStyle.style.filter = "brightness(100%)"
                }
            })         

        const oneLBTitle = document.querySelector(".one-last-breath-title")
            oneLBTitle.addEventListener("click", (e) => {
                e.preventDefault()

                rNTitle.style.display = "none"
                nukiDirector.style.display = "none"
                tTitle.style.display = "none"
                timmiaDirector.style.display = "none"
                kTitle.style.display = "none"
                koatlDirector.style.display = "none"
                sasTitle.style.display = "none"
                sasDirector.style.display = "none"
                olbTitle.style.display = "inherit"
                olbDirector.style.display = "inherit"
                stsTitle.style.display = "none"
                stsDirector.style.display = "none"

                if(olbText == "ONE LAST BREATH"){
                    runNukiStyle.style.filter = "brightness(100%)"
                    timmiaStyle.style.filter = "brightness(100%)"
                    koatlStyle.style.filter = "brightness(100%)"
                    sasStyle.style.filter = "brightness(100%)"
                    olbStyle.style.filter = "brightness(15%)"
                    stsStyle.style.filter = "brightness(100%)"
                }
            }) 
            
        const sultanTSTitle = document.querySelector(".sultan-title")
            sultanTSTitle.addEventListener("click", (e) => {
                e.preventDefault()

                rNTitle.style.display = "none"
                nukiDirector.style.display = "none"
                tTitle.style.display = "none"
                timmiaDirector.style.display = "none"
                kTitle.style.display = "none"
                koatlDirector.style.display = "none"
                sasTitle.style.display = "none"
                sasDirector.style.display = "none"
                olbTitle.style.display = "none"
                olbDirector.style.display = "none"
                stsTitle.style.display = "inherit"
                stsDirector.style.display = "inherit"

                if(stsText == "SULTAN T. SLOTH"){
                    runNukiStyle.style.filter = "brightness(15%)"
                    timmiaStyle.style.filter = "brightness(100%)"
                    koatlStyle.style.filter = "brightness(100%)"
                    sasStyle.style.filter = "brightness(100%)"
                    olbStyle.style.filter = "brightness(100%)"
                    stsStyle.style.filter = "brightness(15%)"
                }
            })  
            
        const homeButton = document.querySelector(".back-button")
        homeButton.addEventListener("click", (e) =>{
            e.preventDefault()

            Router.go("./");
        })
        
    };

    render(){
        this.innerHTML = `
            <custom-header class="header"></custom-header>
            <div class="work-section">
                <div class="music-container">
                    <div class="text-container">
                        <h1 class="first-nuki-title">RUN NUKI!</h1>
                        <h3 class="first-director">Directed by Peter Nobody</h3>
                        <h1 class="first-timmia-title">TIMMIA</h1>
                        <h3 class="second-director">Directed by Peter Lalala</h3>
                        <h1 class="first-koatl-title">KOATL</h1>
                        <h3 class="third-director">Directed by Peter Lelele</h3>
                        <h1 class="first-sas-title">STAN AND SVEN</h1>
                        <h3 class="fourth-director">Directed by Peter Lilili</h3>
                        <h1 class="first-olb-title">ONE LAST BREATH</h1>
                        <h3 class="fifth-director">Directed by Peter Lololo</h3>
                        <h1 class="first-sts-title">SULTAN T. SLOTH</h1>
                        <h3 class="sixth-director">Directed by Peter Lululu</h3>
                    </div>
                </div>
                <h3 class="back-button">< Back to home</h3>
                <div class="projects-container">
                    <div class="run-nuki-project">
                        <custom-run-nuki-img class="nuki-img"></custom-run-nuki-img>
                        <h3 class="run-nuki-title">Run Nuki! ></h3>
                    </div>
                    <div class="timmia-project">
                        <custom-timmia-img class="timmia-img"></custom-timmia-img>
                        <h3 class="timmia-title">Timmia ></h3>
                    </div>
                    <div class="koatl-project">
                        <custom-koatl-img class="koatl-img"></custom-koatl-img>
                        <h3 class="koatl-title">Koatl ></h3>
                    </div>
                    <div class="stan-and-sven-project">
                        <custom-stan-and-sven-img class="sas-img"></custom-stan-and-sven-img>
                        <h3 class="stan-and-sven-title">Stan and Sven ></h3>
                    </div>
                    <div class="one-last-breath-project">
                        <custom-one-last-breath-img class="olb-img"></custom-one-last-breath-img>
                        <h3 class="one-last-breath-title">One last breath ></h3>
                    </div>
                    <div class="sultan-project">
                        <custom-sultan-img class="sts-img"></custom-sultan-img>
                        <h3 class="sultan-title">Sultan T. Sloth ></h3>
                    </div>
                </div>
            </div>
            <custom-footer></custom-footer>
        `

        const style = document.createElement("style");
        style.innerHTML = `

            .header{
                width: 100%;
                position: absolute;
            }

            .work-section{
                height: auto;
                padding: 20px 30px;
                background-color: #0F0E0D; 
            }
            @media (min-width: 769px) {
                .work-section{
                    padding: 20px 40px;;
                }
            }    

            .music-container{
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 50px;
                border-radius: 10px;
                margin-top: 100px;
                background-color: #E1E1E3;
            }
            @media (min-width: 769px) {
                .music-container{
                    padding: 20px 40px;;
                }
            }

            .text-container{
                text-align: center;
            }

            .first-nuki-title{
                margin: 0px;
                letter-spacing: 3px;
                font-size: 38px;
                font-family: "Bayon", system-ui;
                font-weight: 400;
                font-style: normal;
                color: #3E3E3E;
            }

            .first-timmia-title,
            .first-koatl-title,
            .first-sas-title,
            .first-olb-title,
            .first-sts-title{
                display: none;
                margin: 0px;
                letter-spacing: 3px;
                font-size: 38px;
                font-family: "Bayon", system-ui;
                font-weight: 400;
                font-style: normal;
                color: #3E3E3E;
            }

            .first-director{
                margin: 0px;
                letter-spacing: 2px;
                font-family: "Bayon", system-ui;
                font-weight: 400;
                font-style: normal;
                color: #3E3E3E;
            }

            .second-director,
            .third-director,
            .fourth-director,
            .fifth-director,
            .sixth-director{
                display: none;
                margin: 0px;
                letter-spacing: 2px;
                font-family: "Bayon", system-ui;
                font-weight: 400;
                font-style: normal;
                color: #3E3E3E;
            }

            .run-nuki{
                display: none;
            }
            @media (min-width: 769px) {
                .run-nuki{
                    display: inherit;
                }
            }

            .back-button{
                font-family: "Poppins", sans-serif;
                font-size: 16px;
                font-weight: 400;
                color: #FFFFFF;
            }
            @media (min-width: 769px) {
                .back-button{
                    font-size: 20px;
                }
            }
            .back-button:hover{
                cursor: pointer;
                color: #d9d2ce;
            }

            .projects-container{
                padding: 40px 0px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 40px;
            }
            @media (min-width: 769px) {
                .projects-container{
                    padding: 50px 50px;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 60px;
                }
            }    

            .run-nuki-title,
            .timmia-title,
            .koatl-title,
            .stan-and-sven-title,
            .one-last-breath-title,
            .sultan-title{
                margin: 0px;
                padding-top: 7px;
                font-family: "Poppins", sans-serif;
                font-size: 15px;
                font-weight: 400;
                font-style: normal;
                text-align: center;
                color: #C1C1C1;
            }

            .run-nuki-title:hover,
            .timmia-title:hover,
            .koatl-title:hover,
            .stan-and-sven-title:hover,
            .one-last-breath-title:hover,
            .sultan-title:hover{
                cursor: pointer;
                color: #d9d2ce;
            }
        `;

        this.appendChild(style)
    };
};
customElements.define('work-page', Work);