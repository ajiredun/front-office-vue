import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
    state: {
        siteName: "Rush Front Office",
        backOfficeUrl: "https://back.dev.ajiredun.com/",
        api: {
            backOffice: "https://back.dev.ajiredun.com/api/",
            //visualPacks : this.state.api.backOffice + "visual_packs",
            //visualPackActive : this.state.api.backOffice + "visual_packs?active=true",
            pageRoutes: "https://back.dev.ajiredun.com/api/pages?published=true",
        },
        pageInfo: null,
        layout: null,
        slots: []
    },
    mutations: {
        setPageInfo(state, value) {
            state.pageInfo = value
        }
    },
    actions: {
        setPageInfo(context, value) {
            context.commit('setPageInfo', value)
        }
    },
    getters: {}
})
