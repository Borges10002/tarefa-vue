import Vue from "vue";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { BCard } from "bootstrap-vue";
Vue.component("b-card", BCard);

import { BButtonGroup } from "bootstrap-vue";
Vue.component("b-button-group", BButtonGroup);

Vue.use(BootstrapVue);
