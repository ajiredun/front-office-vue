<template>
    <div :id="'CT_USER_LOGOUT_'+blockInfo.id" v-if="switchToReal" :class="'CT_USER_LOGOUT ' + displays">
        <b-row no-gutters>
            <b-col md="12" class="rf-block-title rf-primary" v-if="title">
                <h2 class="title">{{title}}</h2>
            </b-col>
        </b-row>
        <b-row no-gutters>
            <b-col md="12" style="text-align: center;" class="rf-secondary">
                <i v-if="follow_up" class="fas fa-spinner fa-3x fa-spin"></i>
                <br/>
                <br/>
                <h3 class="title">{{follow_up}}</h3>
            </b-col>
        </b-row>
    </div>
    <div v-else :id="'MOCKUP_CT_USER_LOGOUT_'+blockInfo.id" class="CT_TEMPLATE">
        <b-row>
            <b-col md="12">
                <div class="mockup-paragraph">
                    <div class="mockup-text-line"><p class="simple-paragraph">{{ error_info }}</p></div>
                    <div class="mockup-text-line"></div>
                    <div class="mockup-text-line"></div>
                    <div class="mockup-text-line"></div>
                    <div class="mockup-text-line"></div>
                    <div class="mockup-text-line"></div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import axios from 'axios'
    import componentLifecycle from '@/services/componentLifecycle.js'

    export default {
        extends: componentLifecycle,
        data() {
            return {};
        },
        methods: {
            processData(block) {
                console.log("Processing CT_USER_LOGOUT block: " + block.id)
                console.log(block)
                let properties = block.properties
                this.mapBasicBlockProperties(properties)

                if (!this.isAuthenticated) {
                    this.error_info = "You are not logged in"
                    this.follow_up = false
                    return false
                } else {
                    this.follow_up = "Please wait while we try to log you out."

                    axios.get(this.$store.state.api.userLogout + "?" + this.$store.getters.getUrlToken)
                        .then((response) => {
                            let data = response.data
                            this.follow_up = data.message
                            this.$store.dispatch('removeAuthInfo')
                            window.location.href = this.$store.state.frontOfficeUrl
                        })
                        .catch((error) => {
                            console.log("error")
                            console.log(error)
                            let status = error.response.status
                            if (status == 403) {
                                console.log('User do not have access to block')
                            } else {
                                if (status == 404) {
                                    console.log('Block not found')
                                } else {
                                    if (status == 401) {
                                        console.log('Unauthorized access')
                                    } else {
                                        console.log('Error loading block')
                                    }
                                }
                            }

                            this.error_message = "An error occured during the activation of your account"
                            console.log('Error logging out: ' + error)
                        });

                    //do all the necessary and then change the response
                    this.switchToReal = true
                }
            }
        }
    }
</script>

<style lang="scss">
    .CT_USER_LOGOUT {

    }
</style>