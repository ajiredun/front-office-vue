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
            }).catch(err => console.log(err))
        },
        processData (response) {
            let status = response.status
            if (status == 200) {
                let data = response.data['hydra:member']

                data.forEach((route) => {
                    let newRoute = {
                        path: `${route.route}`,
                        component: () => import( './views/'+route.layout.code+'.vue'),
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
            } else {
                console.log('Error fetching paths')
            }
        }
    },
    created() {
        this.getDynamicRoutes(this.$store.state.api.pageRoutes)
    },
    render: h => h(App)
}).$mount('#app')
