import Vue from 'vue'
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

                console.log(data)

                data.forEach((route) => {
                    let newRoute = {
                        path: `${route.route}`,
                        component: () => import( './views/'+route.layout.code+'.vue'),
                        name: `${route.name}`//,
                        //props: {entity_type_id: route.id}
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
        this.getDynamicRoutes('https://back.dev.ajiredun.com/api/pages?published=true')
    },
    render: h => h(App)
}).$mount('#app')
