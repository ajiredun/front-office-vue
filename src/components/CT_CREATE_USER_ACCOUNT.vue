<template>
    <div no-gutters :id="'CT_CREATE_USER_ACCOUNT_'+blockInfo.id" v-if="switchToReal"
         :class="'CT_CREATE_USER_ACCOUNT rf-title-margin-div ' + displays ">
        <b-row no-gutters class="rf-title-margin">
            <b-col md="12" class="rf-block-title rf-neutral rf-background-primary" v-if="title">
                <h2 class="title">{{title}}</h2>
            </b-col>
        </b-row>
        <b-row no-gutters>
            <b-col md="12">
                <b-form @submit="onSubmit" id="form_register" @reset="onReset" v-if="show" class="mb-3"
                        style="margin-top: 27px;">
                    <b-form-group id="input-group-2" label="Personal Info" label-for="input-2">
                        <b-row>
                            <b-col md="6">
                                <b-form-input
                                        id="input-2"
                                        v-model="form.input_firstname"
                                        required
                                        placeholder="Name"
                                ></b-form-input>
                            </b-col>
                            <b-col md="6">
                                <b-form-input
                                        id="input-3"
                                        v-model="form.input_lastname"
                                        required
                                        placeholder="Surname"
                                ></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col md="6">
                                <b-form-input
                                        id="input-9"
                                        v-model="form.input_mobile"
                                        required
                                        placeholder="Telephone / Mobile"
                                ></b-form-input>
                            </b-col>
                            <b-col md="6">

                            </b-col>
                        </b-row>
                    </b-form-group>

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
                            <b-col md="6">
                                <b-form-input
                                        id="input-6"
                                        v-model="form.input_password"
                                        type="password"
                                        required
                                        placeholder="Password"
                                ></b-form-input>
                            </b-col>
                            <b-col md="6">
                                <b-form-input
                                        id="input-7"
                                        v-model="form.input_confirm_password"
                                        type="password"
                                        required
                                        placeholder="Confirm Password"
                                ></b-form-input>
                            </b-col>
                        </b-row>
                    </b-form-group>

                    <b-form-group id="input-group-4">
                        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                            <!--<b-form-checkbox value="newsletter">Subscribe to our newsletter</b-form-checkbox>-->
                            <b-form-checkbox required="required" @change="onCheckTermsAndConditions($event)"
                                             value="termsAndConditions">I agree with the Terms & Conditions
                            </b-form-checkbox>
                        </b-form-checkbox-group>
                        <div class="error_message" v-if="error_terms_and_conditions"><span
                                style="font-size:10px; color:red;">You must agree with our Terms & Conditions to be able to register</span>
                        </div>

                        <div v-if="response.status">
                            <span style="color:green;font-weight: bold;">{{response.message}}</span>
                        </div>
                        <div v-else style="width:96%;padding:2%;color:red;font-weight: bold;">
                            <span>{{response.message}}</span>
                        </div>
                    </b-form-group>

                    <b-spinner v-if="rf_loading" style="width: 2rem; height: 2rem;" label="Large Spinner" type="grow"></b-spinner>
                    <div v-else>
                        <b-button type="submit" variant="primary">Submit</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </div>
                </b-form>
                <b-row>
                    <b-col md="12">
                        <div class="d-flex justify-content-between">
                            <b-button size="sm" type="button" :to="'login'" variant="outline-dark">Login</b-button>
                            <b-button size="sm" type="button" :to="'password-recovery'" variant="outline-warning">Forgot Password ?</b-button>
                        </div>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
    <b-row no-gutters v-else class="CT_CREATE_USER_ACCOUNT">
        <b-col md="12">
            <div class="mockup-container">
                <div class="mockup-text-line"><p class="simple-paragraph">{{ error_info }}</p></div>
            </div>
        </b-col>
        <b-col md="12">
            <div class="mockup-container">
                <div class="mockup-img" style="height: 270px;"></div>
            </div>
        </b-col>
    </b-row>
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
                    input_email: '',
                    input_firstname: '',
                    input_mobile: '',
                    input_lastname: '',
                    input_password: '',
                    input_confirm_password: '',
                    checked: []
                },
                show: true,
                error_terms_and_conditions: false,
                response: {
                    success: true,
                    message: null
                }
            };
        },
        methods: {
            processData(block) {
                //console.log("Processing CT_CREATE_USER_ACCOUNT block: " + block.id)
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
                if (this.form.checked.indexOf('termsAndConditions') < 0) {
                    this.error_terms_and_conditions = true
                    this.rf_loading = false
                    return false
                } else {
                    this.error_terms_and_conditions = false
                }

                axios.post(this.$store.state.api.userRegister, {
                    input_email: this.form.input_email,
                    input_lastname: this.form.input_lastname,
                    input_firstname: this.form.input_firstname,
                    input_mobile: this.form.input_mobile,
                    input_password: this.form.input_password,
                    input_confirm_password: this.form.input_confirm_password
                })
                    .then((response) => {
                        let data = response.data
                        if (data.success) {
                            this.response.success = data.success;
                            this.response.message = data.message;
                        } else {
                            this.response.success = data.success;
                            this.response.message = data.message;
                        }
                        this.rf_loading = false
                    })
                    .catch((error) => {

                        this.response.success = false;
                        this.response.message = this.processApiErrors(error, {
                            default: "An error occurred. Please contact admin",
                            error404: "Block not found",
                            error401: "Unauthorized access",
                            error403: "You do not have access to this content"
                        })
                        this.rf_loading = false
                    });
            },
            onCheckTermsAndConditions(evt) {
                if (this.form.checked.indexOf('termsAndConditions') < 0) {
                    this.error_terms_and_conditions = false
                } else {
                    this.error_terms_and_conditions = true
                }
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.input_email = ''
                this.form.input_firstname = ''
                this.form.input_lastname = ''
                this.form.input_mobile = ''
                this.form.input_password = ''
                this.form.input_confirm_password = ''
                this.form.checked = []
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        },
    }
</script>

<style lang="scss">
    .CT_CREATE_USER_ACCOUNT {
        border-radius: 10px;
        max-width: 450px;
        margin-right: auto;
        margin-left: auto;

        .form-control {
            margin-top: 10px;
            margin-bottom: 10px;
        }

        .btn {
            //margin-right: 10px;
        }
    }
</style>