import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
    state: {
        siteName: "Rush Front Office",
        frontOfficeUrl: "https://front.dev.ajiredun.com",
        backOfficeUrl: "https://back.dev.ajiredun.com",
        api: {
            backOffice: "https://back.dev.ajiredun.com/api/",
            //visualPacks : this.state.api.backOffice + "visual_packs",
            //visualPackActive : this.state.api.backOffice + "visual_packs?active=true",
            pageRoutes: "https://back.dev.ajiredun.com/api/pages?published=true",
            getBlockData: "https://back.dev.ajiredun.com/api/blocks/",
            userRegister: "https://back.dev.ajiredun.com/api/register",
            userLogin: "https://back.dev.ajiredun.com/api/login",
            userActivateAccount: "https://back.dev.ajiredun.com/api/activate",
        },
        authentication: {
            email: null,
            token: null,
            roles: [],
            user_id: null,
            user_name: null,
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
        setAuthInfo(state, arrayInfo) {
            state.authentication.email = arrayInfo.email
            state.authentication.token = arrayInfo.token
            state.authentication.roles = arrayInfo.roles
            state.authentication.user_id = arrayInfo.user_id
            state.authentication.user_name = arrayInfo.user_name
            localStorage.setItem('rf-storage', state.authentication)
            //https://scotch.io/tutorials/handling-authentication-in-vue-using-vuex
        },
        setBlockData(state, data) {
            state.container.blockData = data
        },
        addBlockData(state, arrayInfo) {
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
        setAuthInfo(context, value) {
            context.commit('setAuthInfo', value)
        },
        setBlockData(context, data) {
            context.commit('setBlockData', data)
        },
        loadBlockData(context, params) {
            let errorReturn = false
            let url = params.url + "?"+ context.getters.getUrlToken
            let blockId = params.id
            axios.get(url).then((response) => {
                    let data = response.data
                    let arrayInfo = {
                        blockId: data.id,
                        data: data
                    }
                    context.commit('addBlockData', arrayInfo)
            }).catch(error => {
                errorReturn =  'An error occurred while fetching this block'
                if (error.response) {
                    let status = error.response.status
                    if (status == 403) {
                        errorReturn =  'User do not have access to block: ' + blockId
                    } else {
                        if (status == 404) {
                            errorReturn =  'Block not found: ' + blockId
                        } else {
                            if (status == 401) {
                                errorReturn =  'Unauthorised access'
                            } else {
                                errorReturn =  'Error loading block: ' + blockId
                            }
                        }
                    }
                }
                let block_mockup = document.getElementById('MOCKUP_'+params.ct + "_" + params.id);
                block_mockup.innerHTML = "<h3 class='rf-warning'>"+errorReturn+"</h3>";
            })

        }
    },
    getters: {
        blockData: state => state.container.blockData,
        container: state => state.container,
        getUrlToken: state => 'rf-token='+state.authentication.token,
        isAuthenticated: state => {
            if (state.authentication.email && state.authentication.token && state.authentication.user_id) {
                return true
            }
            return false
        },
        isAuthorized: state => (role) => {
            console.log("comparing roles")
            console.log(role)
            console.log(state.authentication.roles)
            if (state.authentication.roles.indexOf(role) < 0) {
                return false
            }
            return true
        },
        getCurrentUserInfo: state => {
            if (state.authentication.user_id) {
                return {
                    'id' : state.authentication.user_id,
                    'name' : state.authentication.user_name,
                    'email' : state.authentication.email,
                    'roles': state.authentication.roles
                }
            } else {
                return false
            }
        }
    }
})
