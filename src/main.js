// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

//firebase config should be in more secure location
let app;
const config = {
  apiKey: "AIzaSyBNAkQJQmCMFLYFEWfKKkzbtLE-Gi2aMfI",
  authDomain: "vue-firebase-tutorial-edb4d.firebaseapp.com",
  databaseURL: "https://vue-firebase-tutorial-edb4d.firebaseio.com",
  projectId: "vue-firebase-tutorial-edb4d",
  storageBucket: "",
  messagingSenderId: "253854901115"
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if(!app) {
    app = new Vue({
      el: '#app',
      components: { App },
      template: '<App/>',
      router
    })
  }
})
