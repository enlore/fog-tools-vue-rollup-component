/* jshint esversion: 6, asi: true */

import Vue from 'vue'
import ComponentSled from './ComponentSled.vue'

const app = new Vue({
  el: '#app',
  render: h => h(ComponentSled)
})
