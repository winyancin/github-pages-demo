import { createApp } from 'vue'
import App from './App.vue'
import { App2 } from './App2'
import { createMemoryHistory, createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './HomeView.vue'
import AboutView from './AboutView.vue'
import { Foo } from './views/Foo'
import { Bar } from './views/Bar'

const routes = [
  { path: '/', component: Bar },
  { path: '/foo', component: Foo },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App2)
app.use(router);
app.mount('#app')
