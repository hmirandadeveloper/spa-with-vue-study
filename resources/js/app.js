
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// Imports
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import {routes} from './routes'
import StoreData from './store/store';
import MainApp from './components/MainApp.vue';


// Adding to vue to use
Vue.use(VueRouter);
Vue.use(Vuex);

// Create the store (Vuex)
const store = new Vuex.Store(StoreData);

//Create the router
const router = new VueRouter({
    routes, // All routes defined in 'routes.js' file
    mode: 'history' // to use History API
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        'main-app': MainApp
    }
});
