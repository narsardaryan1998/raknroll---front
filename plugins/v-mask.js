import Vue from 'vue'
// Or as a directive-only
// Or only as a filter-only
import {VueMaskDirective, VueMaskFilter} from 'v-mask'

Vue.directive('mask', VueMaskDirective);

Vue.filter('VMask', VueMaskFilter)
