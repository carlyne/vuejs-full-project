import Vue from 'vue';

// fichier de traduction, penser à installer la dépendance vue-i18n
import VueI18n from 'vue-i18n';
import Messages from './locale/index';

import App from './views/app/App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '@/styles/styles.scss';

Vue.config.productionTip = false;
Vue.use(VueI18n);

// Gestion de la traduction
const i18n = new VueI18n({
  locale: 'en',
  messages: Messages
})

new Vue({
  // rajout de l'instance de traduction
  i18n,

  router,
  store,
  render: h => h(App)
}).$mount('#app');
