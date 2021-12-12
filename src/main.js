import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  computed: {
    user: {
      get() {
        return localStorage.getItem('user') || '';
      }
    }
  },
  created() {
    if (this.user) {
      this.$store.dispatch('SetExistentUser', JSON.parse(this.user));
      if (this.$route.path === '/login') {
        this.$router.push('/app')
      }
    } else {
      if (this.$route.path !== '/login') {
        this.$router.push('Login')
      }
    }
  },
  render: h => h(App)
}).$mount('#app')
