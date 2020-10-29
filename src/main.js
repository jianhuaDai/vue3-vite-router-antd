import { createApp } from 'vue'
import './index.css'
import Router from './router/index'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
const app = createApp(App)
app.config.productionTip = false;
app.use(Router);
app.use(Antd);
app.mount('#app');
