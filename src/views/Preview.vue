<template>
    <div>
        <b-row  style="text-align: center;" v-if="error_message">
            <b-col md="12" class="rf-warning">
                <br/><br/><br/><br/>
                <i class="fas fa-exclamation-triangle fa-3x"/>
                <br/><br/>
                <h3 class="title">{{error_message}}</h3>
            </b-col>
        </b-row>
        <b-row  style="text-align: center;" v-if="follow_up">
            <b-col md="12" class="rf-secondary">
                <br/><br/><br/><br/>
                <i v-if="follow_up" class="fas fa-spinner fa-3x fa-spin"></i>
                <br/>
                <br/>
                <h3 class="title">{{follow_up}}</h3>
            </b-col>
        </b-row>
        <b-row v-if="previewMode">
            <b-col md="12" class="rf-background-danger rf-neutral">
                <h3 class="title">Preview Mode</h3>
            </b-col>
        </b-row>
        <div :id="previewCodeId" :ref="previewCodeId"></div>
    </div>
</template>

<script>

    import Vue from 'vue'
    import LayoutComponents from '@/globalLayouts.js'
    import axios from 'axios'

    export default {
        name: 'Preview',
        components: {
            ...LayoutComponents
        },
        data: () => {
            let previewCodeId = "PREVIEW_CONTAINER"
            return {
                error_message : false,
                follow_up: false,
                availableComponents: LayoutComponents,
                previewCodeId,
                previewMode: false
            };
        },
        mounted() {
            let pageId = this.$route.params.id
            let currentPreviewId = this.previewCodeId

            this.follow_up = "Previewing"

            if (this.$store.getters.isAuthenticated) {
                let userRoles = this.$store.getters.getCurrentUserInfo.roles
                let pageRoles = ['ROLE_PAGE_MANAGEMENT_EDITOR', 'ROLE_PAGE_MANAGEMENT_VIEWER', 'ROLE_ADMIN', 'ROLE_VIEWER']
                let found = pageRoles.some(r=> userRoles.indexOf(r) >= 0)
                if (found) {

                    //get the page info
                    axios.get(this.$store.state.api.previewPage + "/" + pageId + "?"+ this.$store.getters.getUrlToken)
                        .then((response) => {
                            let page = response.data
                            let layoutCode = page.layout.code
                            var ComponentClass = Vue.extend(this.availableComponents[layoutCode])
                            var instance = new ComponentClass({
                                store: this.$store,
                                parent: this.$parent,
                                propsData: { pageInfo: page }
                            })
                            instance.$mount()
                            this.$refs[currentPreviewId].appendChild(instance.$el)
                            this.previewMode = true
                            this.follow_up = false
                            this.error_message = false
                        })
                        .catch((error) => {
                            this.follow_up = false
                            this.error_message = this.processApiErrors(error, {
                                default: "An error occured while previewing",
                                error404: "Page not found",
                                error401: "Unauthorized access"
                            })
                        });


                } else {
                    this.follow_up = false
                    this.error_message = "You don't have the permission recquired"
                }

            } else {
                let currentUrl = window.location.pathname + window.location.search
                window.location.href = this.$store.state.loginUrl + "?redirectUrl="+currentUrl
            }
        },
        methods: {
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
    }
</script>
