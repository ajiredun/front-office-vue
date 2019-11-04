import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
    state: {
        siteName: "Godigitalshop",
        frontOfficeUrl: "https://www.godigitalshop.com",
        loginUrl: "https://www.godigitalshop.com/login",
        backOfficeUrl: "https://www.admin.godigitalshop.com",
        api: {
            backOffice: "https://www.admin.godigitalshop.com/api/",
            //visualPacks : this.state.api.backOffice + "visual_packs",
            //visualPackActive : this.state.api.backOffice + "visual_packs?active=true",
            pageRoutes: "https://www.admin.godigitalshop.com/api/pages?published=true",
            getBlockData: "https://www.admin.godigitalshop.com/api/blocks/",
            userRegister: "https://www.admin.godigitalshop.com/api/register",
            userLogin: "https://www.admin.godigitalshop.com/api/login",
            userLogout: "https://www.admin.godigitalshop.com/api/logout",
            userDetails: "https://www.admin.godigitalshop.com/api/users",
            userForgetPassword: "https://www.admin.godigitalshop.com/api/forgot-password",
            userModifyPassword: "https://www.admin.godigitalshop.com/api/modify-password",
            userActivateAccount: "https://www.admin.godigitalshop.com/api/activate",
            userModifyAccount: "https://www.admin.godigitalshop.com/api/modify-account",
            previewPage: "https://www.admin.godigitalshop.com/api/pages",
        },
        authentication: {
            email: null,
            token: '',
            roles: [],
            user_id: null,
            user_name: null,
        },
        pageInfo: null,
        container: {
            'blockData': []
        },
        blockDataChanged: 0,
        pages: false,
        reloadMenu: 0,
    },
    mutations: {
        setPageInfo(state, value) {
            state.pageInfo = value
        },
        setPages(state, value) {
            state.pages = value
        },
        setAuthInfo(state, arrayInfo) {
            state.authentication.email = arrayInfo.email
            state.authentication.token = arrayInfo.token
            state.authentication.roles = arrayInfo.roles
            state.authentication.user_id = arrayInfo.user_id
            state.authentication.user_name = arrayInfo.user_name
            localStorage.setItem('rfstorage', JSON.stringify(state.authentication))
            //https://scotch.io/tutorials/handling-authentication-in-vue-using-vuex
        },
        removeAuthInfo(state) {
            state.authentication.email = null
            state.authentication.token = ''
            state.authentication.roles = []
            state.authentication.user_id = null
            state.authentication.user_name = null
            localStorage.removeItem('rfstorage')
        },
        setBlockData(state, data) {
            state.container.blockData = data
        },
        addBlockData(state, arrayInfo) {
            state.container.blockData[arrayInfo['blockId']] = arrayInfo['data']
            state.blockDataChanged = arrayInfo['blockId']
        },
        updateReloadMenu(state) {
            state.reloadMenu = state.reloadMenu + 1
        }
    },
    actions: {
        setPageInfo(context, value)  {

            let pageRoles = value.roles
            if (pageRoles !== undefined && pageRoles.length !== 0) {
                if (context.getters.isAuthenticated) {
                    let userRoles = context.getters.getCurrentUserInfo.roles
                    let found = pageRoles.some(r=> userRoles.indexOf(r) >= 0)
                    if (found) {
                        //console.log("User has access")
                    } else {
                        let currentUrl = window.location.pathname + window.location.search
                        window.location.href = context.state.loginUrl + "?redirectUrl="+currentUrl
                    }

                } else {
                    let currentUrl = window.location.pathname + window.location.search
                    window.location.href = context.state.loginUrl + "?redirectUrl="+currentUrl
                }
            }
            context.commit('setPageInfo', value)

            let blocks = {}
            value.blocks.forEach(function (block) {
                blocks[block.id] = block;
            });

            context.commit('setBlockData', blocks)
        },
        setPages(context, value)  {

            context.commit('setPages', value)
        },
        setAuthInfo(context, value) {
            context.commit('setAuthInfo', value)
        },
        removeAuthInfo(context) {
            context.commit('removeAuthInfo')
            context.commit('updateReloadMenu')
        },
        updateReloadMenu(context) {
            context.commit('updateReloadMenu')
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
                                if (error.response.data.message == "INVALID_TOKEN" || error.response.data.message == "TOKEN_EXPIRED") {
                                    context.commit('removeAuthInfo')
                                    window.location.reload(true)
                                }
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
        getPages: state => state.pages,
        container: state => state.container,
        getUrlToken: state => 'rf-auth='+state.authentication.token,
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
