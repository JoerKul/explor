import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { Auth0Plugin } from "./auth";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

// Import the Auth0 configuration
import { domain, clientId } from "../auth_config.json";

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
