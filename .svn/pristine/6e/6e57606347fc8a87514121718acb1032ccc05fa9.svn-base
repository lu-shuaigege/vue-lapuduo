import Vue from 'vue';
import Vuex from 'vuex'

import user from './module/user.js'
import permission from './module/permission.js'

Vue.use(Vuex)

import getters from './getters'


const store = new Vuex.Store({
  modules: {
    user,
    permission,
    getters,
    tags: [],
    id: "",
  },
  
  mutations: {
    SET_CURTAGS: (state, id) => {
      state.id = id
    },
  },

})

export default store
