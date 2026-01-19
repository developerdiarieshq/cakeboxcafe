import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons'

import {
    faUtensils,
    faBreadSlice,
    faBirthdayCake,
    faCoffee,
    faShoppingBag,
    faStar,
    faHeart,
    faBars,
    faXmark,
    faChevronDown,
    faChevronUp,
    faCakeCandles,
    faWheatAwn,
    faPhone,
    faMapMarkerAlt,
    faUser,
    faShoppingCart,
    faCamera
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(
    faUtensils,
    faBreadSlice,
    faBirthdayCake,
    faCoffee,
    faShoppingBag,
    faStar,
    faHeart,
    faBars,
    faXmark,
    faChevronDown,
    faChevronUp,
    faCakeCandles,
    faWheatAwn,
    faPhone,
    faMapMarkerAlt,
    faUser,
    faShoppingCart,
    faCamera,
    faWhatsapp
)

import router from './router'

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
