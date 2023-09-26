import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/creer',
    name: 'creer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Creer.vue'),
    props: (route) => ({
      idLieu: route.query.idLieu,
      idEvent: route.query.idEvent
    }),
  },
  {
    path: '/chercher',
    name: 'chercher',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Chercher.vue')
  },
  {
    path: '/details',
    name: 'details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Details.vue'),
    props: (route) => ({
      id: route.query.value,
    }),
  },
  {
    path: '/evenementCree',
    name: 'evenementCree',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/EvenementCree.vue'),
    props: (route) => ({
      verification: route.query
    }),
  },
  {
    path: '/participer',
    name: 'participer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Participer.vue'),
    props: (route) => ({
      verification: route.query
    }),
  },
  {
    path: '/ticket',
    name: 'ticket',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Ticket.vue'),
    props: (route) => ({
      verification: route.query
    }),
  },
  {
    path: '/rechercheLieu',
    name: 'rechercheLieu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/RechercheLieu.vue')
  },
  {
    path: '/choisirLieu',
    name: 'choisirLieu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/ChoisirLieu.vue'),
    props: (route) => ({
      verification: route.query
    }),
  },
  {
    path: '/voirLieu',
    name: 'voirLieu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/VoirLieu.vue'),
    props: (route) => ({
      id: route.query.id,
    }),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
