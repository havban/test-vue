import {createLocalVue, mount} from '@vue/test-utils'
import App from '@/App'
import i18n from '@/i18n'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

const routes = []

const router = new VueRouter({
  routes
})

function getStore () {
  const actions = {
    getUserData: jest.fn()
  }
  const getters = {
    userData: () => { return {} }
  }
  const store = new Vuex.Store({
    states: [],
    actions,
    getters
  })
  return {
    actions,
    store
  }
}

describe('App.vue', () => {
  it('one equal 1', () => {
    expect(1).toEqual(1)
  })

  it('mount well', () => {
    const store = getStore()
    const wrapper = mount(App, {
      localVue,
      router,
      store: store.store,
      i18n
    })
  })

  it('on created', () => {
    const store = getStore()
    const wrapper = mount(App, {
      localVue,
      router,
      store: store.store,
      i18n
    })
    expect(store.actions.getUserData).toHaveBeenCalledOnce
  })
})
