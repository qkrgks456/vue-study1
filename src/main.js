import {createApp} from 'vue'
import App from './App.vue'
import Routes from "@/routes";
import Store from "@/store";
/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUserSecret} from '@fortawesome/free-solid-svg-icons'
import {faUsers} from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faUsers)


createApp(App)
    .use(Routes)
    .use(Store)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
