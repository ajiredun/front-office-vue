import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
      siteName: "Rush Front Office",
      boUrl: "https://back.dev.ajiredun.com/",
      boApiUrl: "https://back.dev.ajiredun.com/api/",
      visualPack: null,
      layout: null,
      slots:[]
  },
  mutations: {

  },
  actions: {
      loadVisualPack() {
          axios.get(this.state.boApiUrl+'visual_packs').then((response) => {
              console.log(response)
          })
          console.log(this.state.boApiUrl+'visual_packs')
      }
  },
  getters: {
      visualPack: state => {
          return state.boApiUrl
      }
  }
})
