import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from "./store";
import router from "./router";
import Axios from './utils/axios';


// Import the Auth0 configuration
import { domain, clientId, audience } from "../auth_config.json";

// Import the plugin here
import { Auth0Plugin } from "./auth";

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    router.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
  }
});

Vue.config.productionTip = false

Vue.use(Axios, { router, store });

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
