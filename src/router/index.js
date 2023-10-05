import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Creer from '../views/Creer.vue';
import Chercher from '../views/Chercher.vue';
import Details from '../views/Details.vue';
import EvenementCree from '../views/EvenementCree.vue';
import Participer from '../views/Participer.vue';
import Ticket from '../views/Ticket.vue';
import RechercheLieu from '../views/RechercheLieu.vue';
import ChoisirLieu from '../views/ChoisirLieu.vue';
import VoirLieu from '../views/VoirLieu.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/creer',
    name: 'creer',
    component: Creer,
    props: (route) => ({
      idLieu: route.query.idLieu,
      idEvent: route.query.idEvent
    }),
  },
  {
    path: '/chercher',
    name: 'chercher',
    component: Chercher
  },
  {
    path: '/details',
    name: 'details',
    component: Details,
    props: (route) => ({
      id: route.query.value,
    }),
  },
  {
    path: '/evenementCree',
    name: 'evenementCree',
    component: EvenementCree,
    props: (route) => ({
      verification: route.query
    }),
  },
  {
    path: '/participer',
    name: 'participer',
    component: Participer,
    props: (route) => ({
      verification: route.query
    }),
  },
  {
    path: '/ticket',
    name: 'ticket',
    component: Ticket,
    props: (route) => ({
      verification: route.query
    }),
  },
  {
    path: '/rechercheLieu',
    name: 'rechercheLieu',
    component: RechercheLieu
  },
  {
    path: '/choisirLieu',
    name: 'choisirLieu',
    component: ChoisirLieu,
    props: (route) => ({
      verification: route.query
    }),
  },
  {
    path: '/voirLieu',
    name: 'voirLieu',
    component: VoirLieu,
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
