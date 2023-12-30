import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import CanvasJSChart from '@canvasjs/vue-charts';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import './assets/style.css'
import './plugins/chart.js'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.use(CanvasJSChart); 
app.use(Toast);
app.mount('#app');  
