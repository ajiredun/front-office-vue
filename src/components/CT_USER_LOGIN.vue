<template>
    <div
            v-if="switchToReal"
            :style="{ fontSize: postFontSize + 'em' }"
            :id="'CT_USER_LOGIN_'+blockInfo.id"
            :class="'CT_USER_LOGIN rf-title-margin-div ' + displays">

        <b-row no-gutters class="rf-title-margin">
            <b-col md="12"  v-if="title" class="rf-block-title rf-neutral rf-background-secondary">
                <h2 class="title">{{ title }}</h2>
            </b-col>
        </b-row>

        <b-row no-gutters>
            <b-col md="12">
                <b-form @submit="onSubmit" id="form_login" v-if="show" class="mb-3"
                        style="margin-top: 27px;">
                    <b-form-group
                            id="input-group-1"
                            label="Login Info"
                            label-for="input-1"
                    >

                        <b-row no-gutters>
                            <b-col md="12">
                                <b-form-input
                                        id="input-1"
                                        v-model="form.input_email"
                                        type="email"
                                        required
                                        placeholder="Email"
                                ></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col md="12">
                                <b-form-input
                                        id="input-6"
                                        v-model="form.input_password"
                                        type="password"
                                        required
                                        placeholder="Password"
                                ></b-form-input>
                            </b-col>
                        </b-row>
                    </b-form-group>

                    <b-button v-if="rf_loading" type="button" class="btn-block" variant="neutral">
                        <b-spinner style="width: 2rem; height: 2rem;" label="Large Spinner" type="grow"></b-spinner>
                    </b-button>
                    <div v-else>
                        <b-button type="submit" class="btn-block" variant="primary">Login</b-button>
                    </div>
                </b-form>
                <b-row v-if="error_message">
                    <b-col md="12" class="rf-warning">
                        <p><i class="fas fa-exclamation-triangle fa-2x"/> {{error_message}}</p>
                    </b-col>
                </b-row>
                <div v-else></div>
                <b-row v-if="follow_up">
                    <b-col md="12" class="rf-success">
                        <p>{{follow_up}}</p>
                    </b-col>
                </b-row>
                <div v-else></div>

                <br/>
                <b-row>
                    <b-col md="12">
                        <div class="d-flex justify-content-between">
                            <b-button size="sm" type="button" :to="'register'" variant="outline-dark">Register
                            </b-button>
                            <b-button size="sm" type="button" :to="'password-recovery'" variant="outline-warning">Forgot
                                Password ?
                            </b-button>
                        </div>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
    <div no-gutters v-else :id="'MOCKUP_CT_USER_LOGIN_'+blockInfo.id" class="CT_USER_LOGIN">
        <b-row>
            <b-col md="12">
                <div class="mockup-container">
                    <div class="mockup-text-line"><p class="simple-paragraph">{{ error_info }}</p></div>
                </div>
            </b-col>
            <b-col md="12">
                <div class="mockup-container">
                    <div class="mockup-img" style="height: 250px;"></div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import axios from 'axios'
    import componentLifecycle from '@/services/componentLifecycle.js'
    import RfFormTitle from "./base/RF_FORM_TITLE";

    export default {
        components: {RfFormTitle},
        extends: componentLifecycle,
        data() {
            return {
                rf_loading: false,
                form: {
                    input_email: '',
                    input_password: ''
                },
                show: true,
            };
        },
        methods: {
            processData(block) {
                //console.log("Processing User Login block: " + block.id)
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
            },
            onSubmit(evt) {
                evt.preventDefault()
                this.rf_loading = true

                const formData = new FormData();
                formData.append('email', this.form.input_email);
                formData.append('password', this.form.input_password);

                axios.post(this.$store.state.api.userLogin, formData)
                    .then((response) => {
                        let data = response.data
                        //console.log(response)
                        //this.follow_up = "HELL YEAH"
                        if (data.success) {
                            this.error_message = false
                            this.follow_up = "Logged In."
                            let userInfo = {
                                email: data.email,
                                token: data.token,
                                roles: data.roles,
                                user_id: data.user_id,
                                user_name: data.user_name,
                            }
                            this.$store.dispatch('setAuthInfo', userInfo)

                            if (!this.$route.query.redirectUrl) {
                                this.$router.push({
                                    path: '/'
                                })
                            } else {
                                let redirectUrl = this.$route.query.redirectUrl
                                this.$router.push({
                                    path: redirectUrl
                                })
                            }
                        } else {
                            this.follow_up = false
                            this.error_message = data.message
                        }
                        this.rf_loading = false
                    })
                    .catch((error) => {
                        this.error_message = this.processApiErrors(error, {
                            default: "An error occured while trying to sign you in.",
                            error404: "An error occured while trying to sign you in.",
                            error401: "Invalid Credentials. Please contact us",
                            error403: "You do not have access to this content"
                        })
                        this.rf_loading = false
                    });
            },
        }
    }
</script>

<style lang="scss">
    .CT_USER_LOGIN {
        border-radius: 10px;
        max-width: 350px;
        margin-right: auto;
        margin-left: auto;

        .form-control {
            margin-top: 10px;
            margin-bottom: 10px;
        }
    }
</style>