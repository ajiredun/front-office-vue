<template>
    <div    v-if="switchToReal"
            :id="'CT_USER_PASSWORD_FORGET_'+blockInfo.id"
            :class="'CT_USER_PASSWORD_FORGET  rf-title-margin-div' + displays + ' ' + classPadding">


        <b-row v-if="title">
            <b-col md="12" class="rf-block-title rf-primary">
                <h2 class="title">{{ title }}</h2>
            </b-col>
        </b-row>


        <b-row no-gutters>

            <b-col md="12">
                <b-form @submit="onSubmit" id="form_login" v-if="show" class="mb-3"
                        style="margin-top: 27px;">
                    <b-form-group
                            id="input-group-1"
                            label="Your email address"
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
                    </b-form-group>

                    <b-button v-if="rf_loading" type="button" class="btn-block" variant="neutral">
                        <b-spinner style="width: 2rem; height: 2rem;" label="Large Spinner" type="grow"></b-spinner>
                    </b-button>
                    <div v-else>
                        <b-button type="submit" class="btn-block" variant="primary">Reset Password</b-button>
                    </div>
                </b-form>
            </b-col>

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


        </b-row>
    </div>
    <div v-else :id="'MOCKUP_CT_USER_PASSWORD_FORGET_'+blockInfo.id" class="CT_USER_PASSWORD_FORGET">
        <b-row>
            <b-col md="12">
                <div class="mockup-container">
                    <div class="mockup-text-line"><p class="simple-paragraph">{{ error_info }}</p></div>
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
            return {
                rf_loading: false,
                form: {
                    input_email: ''
                },
                show: true,
                error_message: false,
                follow_up: false
            };
        },
        methods: {
            processData(block) {
                console.log("Processing CT_USER_PASSWORD_FORGET block: " + block.id)
                console.log(block)
                let properties = block.properties
                this.mapBasicBlockProperties(properties)

                if (this.isAuthenticated) {
                    this.error_info = "You are already logged in. You should log out first."
                    return false
                } else {
                    //do all the necessary and then change the response
                    this.switchToReal = true
                }

                //do all the necessary and then switch
                this.switchToReal = true
            },
            onSubmit(evt) {
                evt.preventDefault()
                this.rf_loading = true

                const formData = new FormData();
                formData.append('input_email', this.form.input_email);

                axios.post(this.$store.state.api.userForgetPassword + "?" + this.$store.getters.getUrlToken, formData)
                    .then((response) => {
                        let data = response.data
                        if (data.success) {
                            this.error_message = false
                            this.follow_up = data.message
                        } else {
                            this.follow_up = false
                            this.error_message = data.message
                        }
                        this.rf_loading = false
                    })
                    .catch((error) => {
                        this.error_message = this.processApiErrors(error, {
                            default: "An error occurred while trying to recover your password",
                            error404: "An error occurred while trying to recover your password",
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
    .CT_USER_PASSWORD_FORGET {
        border-radius: 10px;
        max-width: 350px;
        margin-right: auto;
        margin-left: auto;

        .form-control {
            margin-top: 10px;
            margin-bottom: 10px;
        }

        .rf-block-title {
            padding-top: 15px;
            font-size: 30px;
            padding-bottom: 10px;
            text-align: center;
            box-shadow: 0 6px 6px #c1c1c1;
            border-radius: 10px;
        }

        .btn {
            //margin: 10px;
        }
    }
</style>