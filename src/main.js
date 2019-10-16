import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'

import MainComponent from './views/MainComponent.vue'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    methods: {
        getDynamicRoutes(url) {
            axios
                .get(url)
                .then(this.processData)
                .catch(err => console.log(err))
        },
        processData: ({data}) => {
            data.forEach(this.createAndAppendRoute)
        },

        createAndAppendRoute: (route) => {
            let newRoute = {
                path: `/${route.name}`,
                component: MainComponent,
                name: `${route.name}_index`,
                props: {entity_type_id: route.id}
            }

            this.$router.addRoutes([newRoute])
        }
    },
    created() {
        this.getDynamicRoutes('https://back.dev.ajiredun.com/api/pages?published=true')
    },
    render: h => h(App)
}).$mount('#app')
