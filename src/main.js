import { createApp } from 'vue'
import './assets/scss/main.scss';

// per importare il javascript di bootstrap
import * as bootstrap from 'bootstrap'
import "@fontsource/montserrat"; // Defaults to weight 400.
import App from './App.vue'

createApp(App).mount('#app')
