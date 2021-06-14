import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronDown, faCheck, faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronDown, faCheck, faBars)

Vue.component('fa-icon', FontAwesomeIcon)