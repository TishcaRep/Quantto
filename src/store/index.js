import Vue from 'vue'
import Vuex from 'vuex'


import {auth, db} from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   
    Condomino: null,
    error: null,
  },
  mutations: {
    
    setCondominio(state, playload) {
      state.Condomino = playload;
    },
    setError(state, playload) {
      state.error = playload;
    },
  },
  actions: {
    createCondomino({ commit }, Condomino) {
      auth.createUserWithEmailAndPassword(Condomino.email, Condomino.password)
        .then((res) => {
          console.log(res);
          const CondominoCreado = {
            uid: res.user.uid,
            tipo: res.user.tipo,
            nombre: res.user.nombre,
            telefono: res.user.telefono,
            email: res.user.email,
            direccion: res.user.direccion,
          }
          db.collection(res.user.email).add({
            tipo: res.user.tipo,
            nombre: res.user.nombre,
            telefono: res.user.telefono,
            email: res.user.email,
            direccion: res.user.direccion,
          }).then(doc => {
            commit("setCondominio", CondominoCreado);
          }).catch(error => console.log(error))
          
        })
        .catch((error) => {
          console.log(error);
          commit("setError", error);
        });
    }
  },
  modules: {},
});
