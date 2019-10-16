import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
      siteName: "Rush Front Office",
      backOfficeUrl: "https://back.dev.ajiredun.com/",
      api: {
          backOffice : "https://back.dev.ajiredun.com/api/",
          //visualPacks : this.state.api.backOffice + "visual_packs",
          //visualPackActive : this.state.api.backOffice + "visual_packs?active=true",
      },
      visualPack: null,
      layout: null,
      slots:[]
  },
  mutations: {

  },
  actions: {
      loadVisualPack() {
          /*axios.get(this.state.boApiUrl+'visual_packs').then((response) => {
              let status = response.status
              if (status == 200) {

              }
          }).catch(err => console.log(err))*/
      }
  },
  getters: {
      visualPack: state => {
          return state.boApiUrl
      }
  }
})
