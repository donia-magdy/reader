import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../src/assets/bootstrap.bundle.min";
import "../src/assets/bootstrap.min.css";
import "../src/assets/swiper-bundle.min.css";
import "../src/assets/swiper-bundle.min";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas} from '@fortawesome/free-solid-svg-icons'
import { fab} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(fas,fab)

createApp(App).component('fa', FontAwesomeIcon).use(router).mount("#app");
