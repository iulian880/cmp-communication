import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  data: {},
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age)
    }
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

