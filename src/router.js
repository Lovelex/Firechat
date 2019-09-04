import Vue from 'vue'
import Router from 'vue-router'

// Components
import Welcome from './components/Welcome.vue'
import Chat from './components/Chat.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'Welcome',
      path: '/',
      component: Welcome
    },
    {
      name: 'Chat',
      path: '/chat',
      props: true,
      component: Chat,
      beforeEnter(to, from, next) {
        to.params.name ? next() : next({ name: 'Welcome' })
      } 
    }
  ]
})
