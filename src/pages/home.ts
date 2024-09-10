import { Router } from '@vaadin/router';

class Home extends HTMLElement{
  connectedCallback(){
        this.render();

        const firstOption = document.querySelector(".first-option") as HTMLElement;
        firstOption.addEventListener("click", (e)=>{
            e.preventDefault()

            firstOption.style.width = "40px";
            secondOption.style.width = "20px"
            thirdOption.style.width = "20px"
            fourthOption.style.width = "20px"

            const first = document.querySelector(".first-video") as HTMLElement
            first.style.display = "inherit";

            const second = document.querySelector(".second-video") as HTMLElement
            second.style.display = "none";

            const third = document.querySelector(".third-video") as HTMLElement
            third.style.display = "none";

            const fourth = document.querySelector(".fourth-video") as HTMLElement
            fourth.style.display = "none";
            
        })

        const secondOption = document.querySelector(".second-option") as HTMLElement;
        secondOption.addEventListener("click", (e)=>{
            e.preventDefault()

            firstOption.style.width = "20px"
            secondOption.style.width = "40px"
            thirdOption.style.width = "20px"
            fourthOption.style.width = "20px"

            const first = document.querySelector(".first-video") as HTMLElement
            first.style.display = "none";

            const second = document.querySelector(".second-video") as HTMLElement
            second.style.display = "inherit";

            const third = document.querySelector(".third-video") as HTMLElement
            third.style.display = "none";

            const fourth = document.querySelector(".fourth-video") as HTMLElement
            fourth.style.display = "none";
        })

        const thirdOption = document.querySelector(".third-option") as HTMLElement
        thirdOption.addEventListener("click", (e)=>{
            e.preventDefault()

            firstOption.style.width = "20px"
            secondOption.style.width = "20px"
            thirdOption.style.width = "40px"
            fourthOption.style.width = "20px"

            const first = document.querySelector(".first-video") as HTMLElement
            first.style.display = "none";

            const second = document.querySelector(".second-video") as HTMLElement
            second.style.display = "none";

            const third = document.querySelector(".third-video") as HTMLElement
            third.style.display = "inherit";

            const fourth = document.querySelector(".fourth-video") as HTMLElement
            fourth.style.display = "none";
        })

        const fourthOption = document.querySelector(".fourth-option") as HTMLElement
        fourthOption.addEventListener("click", (e)=>{
            e.preventDefault()

            firstOption.style.width = "20px"
            secondOption.style.width = "20px"
            thirdOption.style.width = "20px"
            fourthOption.style.width = "40px"

            const first = document.querySelector(".first-video") as HTMLElement
            first.style.display = "none";

            const second = document.querySelector(".second-video") as HTMLElement
            second.style.display = "none";

            const third = document.querySelector(".third-video") as HTMLElement
            third.style.display = "none";

            const fourth = document.querySelector(".fourth-video") as HTMLElement
            fourth.style.display = "inherit";
        })
    };

    render(){
        this.innerHTML = `
            <custom-header class="header"></custom-header>
            <div class="home-section">
                <h1 class="name">LUCCA TORRES</h1>
            </div>
            <div class="work-section">
                <hr class="first-line"></hr>
                <div class="projects-container">
                    <div class="run-nuki-project">
                        <custom-run-nuki-img></custom-run-nuki-img>
                        <h3 class="run-nuki-title">Run Nuki! ></h3>
                    </div>
                    <div class="timmia-project">
                        <custom-timmia-img></custom-timmia-img>
                        <h3 class="timmia-title">Timmia ></h3>
                    </div>
                    <div class="koatl-project">
                        <custom-koatl-img></custom-koatl-img>
                        <h3 class="koatl-title">Koatl ></h3>
                    </div>
                    <div class="stan-and-sven-project">
                        <custom-stan-and-sven-img></custom-stan-and-sven-img>
                        <h3 class="stan-and-sven-title">Stan and Sven ></h3>
                    </div>
                    <div class="one-last-breath-project">
                        <custom-one-last-breath-img></custom-one-last-breath-img>
                        <h3 class="one-last-breath-title">One last breath ></h3>
                    </div>
                    <div class="sultan-project">
                        <custom-sultan-img></custom-sultan-img>
                        <h3 class="sultan-title">Sultan T. Sloth ></h3>
                    </div>
                </div>
                <hr class="second-line"></hr>
            </div>
            <div class="video-section">
                <div class="slider">
                    <div class="slider-inner">
                        <iframe class="first-video" src="https://www.youtube.com/embed/dbGAGD5m594?list=UULP2FMiJP2WytzWGsjRgIITPQ" title="Test Drive - John Powell - HTTYD (Midi Mockup)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe class="second-video" src="https://www.youtube.com/embed/8gNia3S95R0" title="Spider-man - John Paesano (Midi Mockup)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe class="third-video" src="https://www.youtube.com/embed/DYe0LlFQuWc" title="Ratatouille - Michael Giacchino (Midi Mockup)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe class="fourth-video" width="853" height="480" src="https://www.youtube.com/embed/1YQU2MwJwbg" title="Run Nuki! - &quot;Ice Palace&quot; (Original Music) - Lucca Torres" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <input type="radio" name="slider" id="slideOne" checked>
                    <input type="radio" name="slider" id="slideTwo">
                    <input type="radio" name="slider" id="slideThree">
                    <input type="radio" name="slider" id="slideFour">

                    <div class="buttons">
                        <label class="first-option" for="slideOne"></label>
                        <label class="second-option" for="slideTwo"></label>
                        <label class="third-option" for="slideThree"></label>
                        <label class="fourth-option" for="slideFour"></label>
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

            .home-section{
                height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .name{
                margin: 0px;
                text-align: center;
                font-family: "Be Vietnam Pro", sans-serif;
                font-weight: 100;
                font-size: 21px;
                font-style: normal;
                letter-spacing: 12px;
                color: #d1d1d1;
            }
            @media (min-width: 769px) {
                .name{
                    font-size: 37px;
                }
            }

            .work-section{
                height: auto;
                padding: 50px 0px 0px 0px;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: #0F0E0D;
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

            .first-line,
            .second-line{
                height: 1px;
                width: 80%;
                margin: 0px;
                border: none;
                background-color: #494949;
            }

            .video-section{
                display: flex;
                justify-content: center;
                overflow: hidden;
                padding: 70px 0px;
                background-color: #0F0E0D;
            }

            .slider{
                display: flex; 
                flex-direction: column;
                gap: 20px;
            }

            .slider-inner{
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                width: 100%;
                height: 100%;
            }

            .first-video{
                width: 320px; 
                height: 260px;
            }
            @media (min-width: 769px) {
                .first-video{
                    width: 640px; 
                    height: 480px;
                }
            }
            @media (min-width: 954px) {
                .first-video{
                    width: 840px; 
                    height: 480px;
                }
            }    

            .second-video{
                display: none;
                width: 320px; 
                height: 260px;
            }
            @media (min-width: 769px) {
                .second-video{
                    width: 640px; 
                    height: 480px;
                }
            }
            @media (min-width: 954px) {
                .second-video{
                    width: 840px; 
                    height: 480px;
                }
            }  
            
            .third-video{
                display: none;
                width: 320px; 
                height: 260px;
            }
            @media (min-width: 769px) {
                .third-video{
                    width: 640px; 
                    height: 480px;
                }
            }
            @media (min-width: 954px) {
                .third-video{
                    width: 840px; 
                    height: 480px;
                }
            }  
            
            .fourth-video{
                display: none;
                width: 320px; 
                height: 260px;
            }
            @media (min-width: 769px) {
                .fourth-video{
                    width: 640px; 
                    height: 480px;
                }
            }
            @media (min-width: 954px) {
                .fourth-video{
                    width: 840px; 
                    height: 480px;
                }
            }  
        
            .slider input{
                visibility: hidden;
                display: none;
            }
            
            .buttons{
                width: 100%;
                display: flex;
                justify-content: center;
                bottom: 50px;
                gap: 10px;
            }

            .second-option,
            .third-option,
            .fourth-option{
                width: 20px;
                height: 20px;
                border-radius: 5px;
                background-color: white;
                opacity: 0.5;
                cursor: pointer;
                z-index: 1;
                transition: 300ms ease-in-out;
            }

            .buttons label:hover{
                scale: 1.2;
                opacity: 1;
            }

            .first-option{
                width: 40px;
                height: 20px;
                border-radius: 5px;
                background-color: white;
                opacity: 0.5;
                cursor: pointer;
                z-index: 1;
                transition: 300ms ease-in-out;
            }
        `;

        this.appendChild(style)
    };
};
customElements.define('home-page', Home);