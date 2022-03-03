import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  
  {
    path: '/registroCondomino',
    name: 'RegistroCondomino',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  },
  {
    path: '/registroAdministrador',
    name: 'RegistroAdministrador',
    component: () => import(/* webpackChunkName: "about" */ '../views/Administrador.vue')
  },
  {
    path: '/registroSuperUs',
    name: 'RegistroSuperSu',
    component: () => import(/* webpackChunkName: "about" */ '../views/SuperSu.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
