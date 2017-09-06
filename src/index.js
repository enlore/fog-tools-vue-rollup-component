/* jshint esversion: 6, asi: true */

import Vue from 'vue'
import Component from './Component.vue'

const app = new Vue({
  el: '#app',
  render: h => h(Component)
})
