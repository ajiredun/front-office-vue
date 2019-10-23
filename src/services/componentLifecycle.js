import {mapState, mapGetters} from 'vuex';
import axios from 'axios'

export default {
    props: {
        currentSlotId: String,
        blockInfo: Object
    },
    data() {
        return {
            switchToReal: false,
            error_info: '',
            title: false,
            displays: '',
        };
    },
    methods: {
        mapBasicBlockProperties(properties) {
            if (properties.title) {
                this.title = properties.title
            }

            if (properties.text) {
                this.text = properties.text
            }

            if (properties.displays) {
                this.displays = properties.displays.join(' ')
            }

            if (properties.image) {
                this.image = properties.image
            }
        },
        hideWhenCreated(element) {

        }
    },
    computed: {
        ...mapState(['blockDataChanged']),
        ...mapGetters([
            'getCurrentUserInfo',
            'isAuthorized',
            'isAuthenticated',
            'getUrlToken'
        ])
    },
    mounted() {
        let url = this.$store.state.api.getBlockData + this.blockInfo.id
        let params = {
            url: url,
            id: this.blockInfo.id,
            ct: this.blockInfo.contentType
        }


        if (this.blockInfo.roles !== undefined && this.blockInfo.roles !== null && this.blockInfo.roles.length !== 0) {
            //this block has roles
            let blockRoles = this.blockInfo.roles
            if (this.isAuthenticated) {
                let userRoles = this.getCurrentUserInfo.roles
                let found = blockRoles.some(r=> userRoles.indexOf(r) >= 0)
                if (found) {
                    this.$store.dispatch('removeAuthInfo', params)
                } else {
                    // user don't have access
                    //let block_mockup = document.getElementById('MOCKUP_'+ params.ct + "_" + params.id)
                    //block_mockup.style.display = "none"
                }
            } else {
                // user don't have access
                //let block_mockup = document.getElementById('MOCKUP_'+ params.ct + "_" + params.id)
                //block_mockup.style.display = "none"
            }
        } else {
            this.$store.dispatch('loadBlockData', params)
        }



    },
    watch: {
        blockDataChanged(blockDataChanged) {
            if (this.$store.state.blockDataChanged == this.blockInfo.id) {
                let block = this.$store.getters.blockData[this.blockInfo.id]
                this.processData(block)
            }
        }
    },
};