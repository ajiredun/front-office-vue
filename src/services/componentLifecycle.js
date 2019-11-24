import {mapState, mapGetters} from 'vuex';
import GlobalComponents from '@/globalComponents.js'

export default {
    props: {
        currentSlotId: String,
        blockInfo: Object
    },
    components: {
        ...GlobalComponents
    },
    data() {
        return {
            switchToReal: false,
            error_info: '', //use to display access errors
            title: false,
            displays: '',
            padding: false,
            error_message: false, // use within the component template
            follow_up: false // use within the component template for user information
        };
    },
    methods: {
        mapBasicBlockProperties(properties) {
            if (properties.title) {
                this.title = properties.title
            }

            if (properties.padding) {
                this.padding = properties.padding
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
        processApiErrors(error, messageInfo) {
            let selectedMessage = "And error occurred while trying this request"
            if (messageInfo.default !== undefined && messageInfo.default !== null) {
                selectedMessage = messageInfo.default
            }

            if (error.response !== undefined && error.response != null) {
                if (error.response.status !== undefined && error.response.status != null) {
                    let status = error.response.status

                    if (status == 404) {
                        if (messageInfo.error404 !== undefined && messageInfo.error404 !== null) {
                            selectedMessage = messageInfo.error404
                        } else {
                            selectedMessage = 'The resource your are trying to retrieve is: NOT FOUND'
                        }
                    }


                    if (status == 403) {
                        if (messageInfo.error403 !== undefined && messageInfo.error403 !== null) {
                            selectedMessage = messageInfo.error403
                        } else {
                            selectedMessage = 'You are trying to access something that is protected. Please contact us'
                        }
                    }

                    if (status == 401) {
                        if (messageInfo.error401 !== undefined && messageInfo.error401 !== null) {
                            selectedMessage = messageInfo.error401
                        } else {
                            selectedMessage = 'You are trying to access something that is protected. Please contact us'
                        }
                    }

                    if (status == 400) {
                        if (messageInfo.error400 !== undefined && messageInfo.error400 !== null) {
                            selectedMessage = messageInfo.error400
                        } else {
                            selectedMessage = 'And error occurred, we got a bad request'
                        }
                    }
                }
            }
            console.log(selectedMessage)
            return selectedMessage
        },
    },
    computed: {
        ...mapState(['blockDataChanged']),
        ...mapGetters([
            'getCurrentUserInfo',
            'isAuthorized',
            'isAuthenticated',
            'getUrlToken'
        ]),
        classPadding() {

            if (this.padding) {
                return 'rf-padding'
            } else {
                return ''
            }
        }
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
                    this.$store.dispatch('loadBlockData', params)
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