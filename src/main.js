import Vue from 'vue'
import App from './App.vue'
// import router from './router';
import store from './store';
import firebase from 'firebase';

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyAH5eNQC_SrL5xhKsAJtrkY083XrQuxdwE",
  authDomain: "vue-learning-track.firebaseapp.com",
  databaseURL: "https://vue-learning-track.firebaseio.com",
  projectId: "vue-learning-track",
  storageBucket: "vue-learning-track.appspot.com",
  messagingSenderId: "305624742426",
  appId: "1:305624742426:web:634360e9ff4027e7cc2fa3",
  measurementId: "G-K0QJ7DDQ1X"
};

firebase.initializeApp(config);

export const db = firebase.firestore();

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
