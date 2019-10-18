import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
    state: {
        siteName: "Rush Front Office",
        backOfficeUrl: "https://back.dev.ajiredun.com",
        api: {
            backOffice: "https://back.dev.ajiredun.com/api/",
            //visualPacks : this.state.api.backOffice + "visual_packs",
            //visualPackActive : this.state.api.backOffice + "visual_packs?active=true",
            pageRoutes: "https://back.dev.ajiredun.com/api/pages?published=true",
            getBlockData: "https://back.dev.ajiredun.com/api/blocks/",
        },
        pageInfo: null,
        container: {
            'blockData': []
        },
        blockDataChanged: 0
    },
    mutations: {
        setPageInfo(state, value) {
            state.pageInfo = value
        },
        setBlockData(state, data) {
            state.container.blockData = data
        },
        addBlockData(state,arrayInfo) {
            state.container.blockData[arrayInfo['blockId']] = arrayInfo['data']
            state.blockDataChanged = arrayInfo['blockId']
        }
    },
    actions: {
        setPageInfo(context, value) {
            context.commit('setPageInfo', value)

            let blocks = {}
            value.blocks.forEach(function (block) {
                blocks[block.id] = block;
            });

            context.commit('setBlockData', blocks)
        },
        setBlockData(context, data) {
            context.commit('setBlockData', data)
        },
        loadBlockData(context, params) {

            let url = params.url
            let blockId = params.id
            axios.get(url).then((response) => {

                let status = response.status
                if (status == 200) {
                    let data = response.data
                    let arrayInfo = {
                        blockId: data.id,
                        data: data
                    }
                    context.commit('addBlockData', arrayInfo)
                } else {
                    if (status == 403) {
                        console.log('User do not have access to block: ' + blockId)
                    } else {
                        if (status == 404) {
                            console.log('Block not found: '+blockId)
                        } else {
                            console.log('Error loading block: '+blockId)
                        }
                    }
                }

            }).catch(err => console.log(err))

        }
    },
    getters: {
        blockData: state => state.container.blockData,
        container: state => state.container
    }
})
