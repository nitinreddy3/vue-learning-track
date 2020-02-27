import Vue from 'vue'
import App from './App.vue'
// import router from './router';
import store from './store';
import firebase from 'firebase';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css';
// import 'vue-material/dist/theme/default-dark.css';

Vue.use(VueMaterial);

Vue.config.productionTip = false

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_APIKEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APPID,
  measurementId: process.env.VUE_APP_FIREBASE_MESSUREMENTID
};

firebase.initializeApp(config);

export const db = firebase.firestore();

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
