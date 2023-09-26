import { createStore } from 'vuex';
import {data, lieux} from '@/data/evenement-data';

export default createStore({
  state: {
    evenement: data,
    lieux: lieux
  },
  getters: {
    
  },
  mutations: {
    nouvelEvenement(state, nouvelleValeur){
      state.evenement.push(nouvelleValeur);
    },
    modifierEvenement(state, {idEvent, nouvelleValeur}){
      state.evenement.splice(idEvent, 1, nouvelleValeur);
    },
    setEvenement(state, nouvelEvenement){
      state.evenement = nouvelEvenement;
    }
  },
  actions: {
    loadEvenements({ commit }) {
      commit('setEvenement', data);
    }
  },
  modules: {
  }
})
