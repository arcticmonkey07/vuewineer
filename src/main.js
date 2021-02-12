import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';
import firebase from 'firebase';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCQKYR2AX8bMisD9ojx8jLWJf07s8UGvzw',
      authDomain: 'vuewineer.firebaseapp.com',
      projectId: 'vuewineer',
      storageBucket: 'vuewineer.appspot.com',
      messagingSenderId: '945307459887',
      appId: '1:945307459887:web:ee9b7f39cbe677bbfd81da',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user);
      }
    });
  },
}).$mount('#app');
