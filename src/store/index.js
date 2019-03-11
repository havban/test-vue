import Vue from 'vue'
import Vuex from 'vuex'

import usersApi from '@/api/users'
import productsApi from '@/api/products'

Vue.use(Vuex)

const state = {
  userData: {},
  products: [],
  productDetail: {}
}

const mutations = {
  setUserData (state, value) {
    state.userData = value
  },
  setProducts (state, value) {
    state.products = value
  },
  setProductDetail (state, value) {
    state.productDetail = value
  }
}

const getters = {
  userData (state) {
    return state.userData
  },
  products: state => state.products,
  productDetail: state => state.productDetail
}

const actions = {
  getUserData ({commit}) {
    usersApi.getUser().then((resp) => {
      commit('setUserData', resp.data.data)
    })
  },
  getProducts ({commit}) {
    productsApi.getProducts().then(resp => {
      commit('setProducts', resp.data.data)
    })
  },
  getProductDetail ({commit}, {id}) {
    productsApi.getProductById(id).then(resp => {
      commit('setProductDetail', resp.data.data)
    })
  }
}

const store = new Vuex.Store({
  state: state,
  mutations,
  getters,
  actions
})

export default store
