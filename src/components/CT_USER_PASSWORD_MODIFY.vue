<template>
    <div v-if="switchToReal"
         :id="'CT_USER_PASSWORD_MODIFY_'+blockInfo.id"
         :class="'CT_USER_PASSWORD_MODIFY ' + displays">
        <b-row no-gutters class="padding-left-right">
            <b-col md="12">

                <div class="card">
                    <div class="card-header rf-background-secondary rf-neutral"></div>
                    <div class="card-body">
                        <h4 class="card-title">Password</h4>
                        <transition name="fade"  mode="out-in">
                            <b-form @submit="onSubmit" id="form_register" v-if="formVisible"
                                    class="mb-3"
                                    style="margin-top: 27px;">

                                <b-row>
                                    <b-col md="12">
                                        <b-form-input
                                                id="input-6"
                                                v-model="form.input_old_password"
                                                type="password"
                                                required
                                                style="margin-bottom:10px;margin-top:10px;"
                                                placeholder="Old Password"
                                        ></b-form-input>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col md="12">
                                        <b-form-input
                                                id="input-8"
                                                v-model="form.input_password"
                                                type="password"
                                                required
                                                style="margin-bottom:10px;margin-top:10px;"
                                                placeholder="New Password"
                                        ></b-form-input>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col md="12">
                                        <b-form-input
                                                id="input-7"
                                                v-model="form.input_confirm_password"
                                                type="password"
                                                required
                                                style="margin-bottom:10px;margin-top:10px;"
                                                placeholder="Confirm Password"
                                        ></b-form-input>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col md="12">
                                        <b-button v-if="rf_loading" type="button" class="btn-block" variant="neutral">
                                            <b-spinner style="width: 2rem; height: 2rem;" label="Large Spinner" type="grow"></b-spinner>
                                        </b-button>
                                        <div v-else class="d-flex justify-content-between">
                                            <b-button type="submit" variant="warning">
                                                <i class="fab fa-expeditedssl"></i> &nbsp;&nbsp; Change My Password
                                            </b-button>
                                            <b-button type="button" variant="neutral" @click="toggleFormVisible">
                                                <i class="fas fa-times-circle"></i>
                                            </b-button>
                                        </div>
                                    </b-col>
                                </b-row>
                                <b-row  class="rf-request-information" v-if="error_message">
                                    <b-col md="12" class="rf-warning">
                                        <i class="fas fa-exclamation-triangle fa-2x"/>
                                        <br/><br/>
                                        <h5 class="title">{{error_message}}</h5>
                                    </b-col>
                                </b-row>
                                <b-row  class="rf-request-information"  v-if="follow_up">
                                    <b-col md="12" class="rf-secondary">
                                        <i v-if="follow_up" class="fas fa-spinner fa-2x fa-spin"></i>
                                        <br/>
                                        <br/>
                                        <h5 class="title">{{follow_up}}</h5>
                                    </b-col>
                                </b-row>
                            </b-form>
                            <b-button v-else
                                      @click="toggleFormVisible"
                                      class="btn-block" variant="secondary">
                                <i class="fab fa-expeditedssl"></i> &nbsp;&nbsp; Change My Password
                            </b-button>
                        </transition>
                    </div>
                </div>

            </b-col>
        </b-row>
    </div>
    <div v-else :id="'CT_USER_PASSWORD_MODIFY'+blockInfo.id" class="CT_USER_PASSWORD_MODIFY">
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

    export default {
        extends: componentLifecycle,
        data() {
            return {
                form: {
                    input_old_password: '',
                    input_password: '',
                    input_confirm_password: '',
                },
                formVisible: false,
                rf_loading: false,
            };
        },
        methods: {
            processData(block) {
                console.log("Processing CT_USER_PASSWORD_MODIFY block: " + block.id)
                console.log(block)
                let properties = block.properties
                this.mapBasicBlockProperties(properties)


                //do all the necessary and then switch
                this.switchToReal = true
            },
            toggleFormVisible() {
                if (this.formVisible === true) {
                    this.formVisible = false
                } else {
                    this.formVisible = true
                }
            },
            onSubmit(evt) {
                evt.preventDefault()
                this.rf_loading = true

                axios.post(this.$store.state.api.userModifyPassword + "?" + this.$store.getters.getUrlToken, {
                    input_old_password: this.form.input_old_password,
                    input_password: this.form.input_password,
                    input_confirm_password: this.form.input_confirm_password
                })
                    .then((response) => {
                        let data = response.data
                        if (data.success) {
                            this.error_message = false
                            this.follow_up = data.message

                            axios.get(this.$store.state.api.userLogout + "?" + this.$store.getters.getUrlToken)
                                .then((response) => {
                                    let data = response.data
                                    this.follow_up = data.message
                                    this.$store.dispatch('removeAuthInfo')
                                    this.$router.push({
                                        path : '/'
                                    })
                                })
                                .catch((error) => {
                                    this.error_message = this.processApiErrors(error, {
                                        default: "An error occurred during logging out",
                                        error404: "Block not found",
                                        error401: "Unauthorized access",
                                        error403: "You do not have access to this content"
                                    })
                                });


                        } else {
                            this.error_message = data.message
                            this.follow_up = false
                        }
                        this.rf_loading = false
                    })
                    .catch((error) => {
                        this.error_message = this.processApiErrors(error, {
                            default: "An error occurred. Please contact admin",
                            error404: "Block not found",
                            error401: "Unauthorized access",
                            error403: "You do not have access to this content"
                        })
                        this.rf_loading = false
                    });
            },
        }
    }
</script>

<style lang="scss">
    .CT_USER_PASSWORD_MODIFY {
        .card {
            width: 100%;
            box-shadow: 2px 5px 10px gainsboro;
            border-radius: 20px;
            margin-bottom: 15px;
        }
    }
</style>