<template>
    <div
            :id="'CT_USER_ACTIVATE_ACCOUNT_'+blockInfo.id"
            v-if="switchToReal"
           :class="'CT_USER_ACTIVATE_ACCOUNT ' + displays">

        <b-row v-if="title">
            <b-col md="12" class="rf-block-title rf-primary">
                <h2 class="title">{{ title }}</h2>
            </b-col>
        </b-row>

        <b-col md="12" class="rf-block-title rf-primary" v-if="title">
            <h2 class="title">{{title}}</h2>

        </b-col>

        <b-row  v-if="error_message">
            <b-col md="12" class="rf-warning">
                <i class="fas fa-exclamation-triangle fa-3x"/>
                <br/><br/>
                <h3 class="title">{{error_message}}</h3>
            </b-col>
        </b-row>

        <b-row v-if="follow_up">
            <b-col md="12" class="rf-secondary">
                <i v-if="follow_up" class="fas fa-spinner fa-3x fa-spin"></i>
                <br/>
                <br/>
                <h3 class="title">{{follow_up}}</h3>
            </b-col>
        </b-row>

        <br/><br/><br/><br/>
    </div>
    <div v-else class="CT_USER_ACTIVATE_ACCOUNT">
        <b-row>
            <b-col md="12">
                <div class="mockup-container">
                    <div class="mockup-text-line"><p class="simple-paragraph">{{ error_info }}</p></div>
                    <i class="fas fa-spinner fa-3x fa-spin mockup-spinner"></i>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import axios from 'axios'
    import componentLifecycle from '@/services/componentLifecycle.js'
    import router from '@/router'

    export default {
        extends: componentLifecycle,
        data() {
            return {
            };
        },
        methods: {
            processData(block) {
                //console.log("Processing User Activation block: " + block.id)
                //console.log(block)
                let properties = block.properties
                this.mapBasicBlockProperties(properties)

                if (this.isAuthenticated) {
                    this.error_info = "You are already logged in. You should log out first."
                    return false
                } else {
                    //do all the necessary and then change the response
                    this.switchToReal = true
                }

                if (!this.$route.params.activation_token) {
                    this.error_message = "Invalid activation link"
                } else {
                    let activation_token = this.$route.params.activation_token
                    this.follow_up = "Requesting your activation..."

                    axios.get(this.$store.state.api.userActivateAccount + "/" + activation_token)
                        .then((response) => {
                            let data = response.data
                            this.follow_up = "Activating..."
                            if (data.success) {
                                this.follow_up = data.message
                                setTimeout(function () {
                                    this.$router.push({path: '/login', query: {success: true}})
                                }.bind(this), 2000)

                            } else {
                                setTimeout(function () {
                                    this.follow_up = false
                                    this.error_message = data.message
                                }.bind(this), 2000)
                            }
                        })
                        .catch((error) => {

                            this.error_message = this.processApiErrors(error, {
                                default: "An error occured during the activation of your account",
                                error404: "An error occured while trying to sign you in.",
                                error401: "Unauthorized access"
                            })

                            console.log('Error activating the account: ' + error)
                        });

                }
            }
        }
    }
</script>

<style lang="scss">
    .CT_USER_ACTIVATE_ACCOUNT {
        width: 100%;
        text-align: center;
    }
</style>