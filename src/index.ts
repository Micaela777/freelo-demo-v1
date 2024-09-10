import "./router";
import "./pages/home";
import "./pages/work";

import { initStudioImageComponent } from "./components/studio";
import { initHeaderComponent } from "./components/header";
import { initMenuComponent } from "./components/menu-img";
import { initRunKukiImageComponent } from "./components/run-nuki-img";
import { initTimmiaImageComponent } from "./components/timmia-img";
import { initStanAndSvenImageComponent } from "./components/stan-and-sven-img";
import { initOneLastBreathImageComponent } from "./components/one-last-breath-img";
import { initSultanImageComponent } from "./components/sultan-img";
import { initKoatlImageComponent } from "./components/koatl-img";
import { initFooterComponent } from "./components/footer";
import { initCopiedImgComponent } from "./components/copied-img";
import { initInstagramComponent } from "./components/instagram-img";
import { initYouTubeComponent } from "./components/youtube-img";

(function () {

    initStudioImageComponent();
    initHeaderComponent();
    initMenuComponent();
    initRunKukiImageComponent();
    initTimmiaImageComponent();
    initKoatlImageComponent();
    initStanAndSvenImageComponent();
    initOneLastBreathImageComponent();
    initSultanImageComponent();
    initInstagramComponent();
    initCopiedImgComponent();
    initYouTubeComponent();
    initFooterComponent();

})();