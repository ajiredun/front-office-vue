import Vue from 'vue'
import VueMeta from 'vue-meta'
import BootstrapVue from 'bootstrap-vue'

import './custom.scss'

import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    methods: {
        getDynamicRoutes(url) {
            axios.get(url).then((response) => {
                this.processData(response)
            }).catch(error => {
                if (error.response) {
                    let status = error.response.status
                    if (status == 401) {
                        this.$store.dispatch('removeAuthInfo')
                        window.location.reload(true)
                    }
                    console.warn('An error occurred while fetching pages')
                }
            })
        },
        processData(response) {
            let data = response.data['hydra:member']

            console.log(data)

            data.forEach((route) => {
                let routing = route.route
                if (route.routeParams) {
                    routing = routing + route.routeParams
                }
                let newRoute = {
                    path: `${routing}`,
                    component: () => import( './views/' + route.layout.code + '.vue'),
                    name: `${route.name}`,
                    props: {pageInfo: route}
                }
                this.$router.addRoutes([newRoute])
            })

            let wildRoute = {
                path: '/**',
                name: 'NotFound',
                component: () => import('./views/NotFound.vue')
            }
            this.$router.addRoutes([wildRoute])

        }
    },
    created() {

        //setting the state.authentication from localstorage
        if (localStorage.getItem('rf-storage') != null) {
            let auths = JSON.parse(localStorage.getItem('rfstorage'))
            if (auths !== undefined && auths !== null && auths.length !== 0) {
                this.$store.dispatch('setAuthInfo', auths)
            }
        }

        if (this.$store.getters.isAuthenticated) {
            console.log("User: "+ this.$store.getters.getCurrentUserInfo.email)
        } else {
            console.log("User: Anonymous")
        }

        this.getDynamicRoutes(this.$store.state.api.pageRoutes)
    },
    render: h => h(App)
}).$mount('#app')
