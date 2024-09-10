export function initYouTubeComponent() {

    const youtubeImg = require("url:../img/youtube.png");

    class YouTube extends HTMLElement {
        constructor() {
            super();
            this.render();
        };
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.className = "youtube";
            div.innerHTML = `
                <img class="youtube-img" src="${youtubeImg}">
            `

            const style = document.createElement('style');

            style.innerHTML = `

                .youtube-img{
                    height: 20px;
                    width: 20px;
                }
                @media (min-width: 769px) {
                    .youtube-img{
                        height: 30px;
                        width: 30px;
                    }
                }
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    
    customElements.define('custom-youtube', YouTube); 
}