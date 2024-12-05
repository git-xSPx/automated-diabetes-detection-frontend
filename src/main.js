import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles.css'; // Import the global styles
import vuetify from './plugins/vuetify'; // Import the Vuetify plugin
import axios from './plugins/axios';

console.log(process.env.VUE_APP_API_URL);

createApp(App)
  .use(router)
  .use(axios)
  .use(vuetify) // Use Vuetify
  .mount('#app');
