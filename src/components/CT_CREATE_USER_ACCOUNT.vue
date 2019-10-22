<template>
    <div :id="'CT_CREATE_USER_ACCOUNT_'+blockInfo.id" v-if="switchToReal" :class="'CT_CREATE_USER_ACCOUNT ' + displays ">
        <b-col md="12" class="rf-block-title" v-if="title">
            <h2 class="title">{{title}}</h2>
        </b-col>
        <b-row no-gutters>
            <b-col md="1"></b-col>
            <b-col md="10" style="padding-right:20px;padding-left:20px;">
                <b-form @submit="onSubmit" id="form_register" @reset="onReset" v-if="show" class="mb-3" style="margin-top: 27px;">
                    <b-form-group id="input-group-2" label="Personal Info" label-for="input-2">
                        <b-form-input
                                id="input-2"
                                v-model="form.input_firstname"
                                required
                                placeholder="Name"
                        ></b-form-input>

                        <b-form-input
                                id="input-3"
                                v-model="form.input_lastname"
                                required
                                placeholder="Surname"
                        ></b-form-input>

                        <b-form-input
                                id="input-9"
                                v-model="form.input_mobile"
                                required
                                placeholder="Telephone / Mobile"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                            id="input-group-1"
                            label="Login Info"
                            label-for="input-1"
                    >
                        <b-form-input
                                id="input-1"
                                v-model="form.input_email"
                                type="email"
                                required
                                placeholder="Email"
                        ></b-form-input>
                        <b-form-input
                                id="input-6"
                                v-model="form.input_password"
                                type="password"
                                required
                                placeholder="Password"
                        ></b-form-input>
                        <b-form-input
                                id="input-7"
                                v-model="form.input_confirm_password"
                                type="password"
                                required
                                placeholder="Confirm Password"
                        ></b-form-input>
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

                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
            </b-col>
            <b-col md="1"></b-col>
        </b-row>
    </div>
    <div v-else class="CT_CREATE_USER_ACCOUNT">
        <b-col md="12" v-if="title">
            <div class="mockup-text-line" style="height:25px;"></div>
        </b-col>
        <b-col md="12">
            <div class="mockup-paragraph">
                <div class="mockup-text-line"></div>
                <div class="mockup-text-line"></div>
                <div class="mockup-text-line"></div>
                <div class="mockup-text-line"></div>
                <div class="mockup-text-line"></div>
                <div class="mockup-text-line"></div>
                <div class="mockup-text-line"></div>
                <div class="mockup-text-line"></div>
                <div class="mockup-text-line"></div>
            </div>
        </b-col>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import axios from 'axios'

    export default {
        props: {
            currentSlotId: String,
            blockInfo: Object
        },
        computed: {
            ...mapState(['blockDataChanged'])
        },
        data() {
            return {
                switchToReal: false,
                title: false,
                displays: '',
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
                console.log("Processing CT_CREATE_USER_ACCOUNT block: " + block.id)
                console.log(block)
                let properties = block.properties

                if (properties.displays) {
                    this.displays = properties.displays.join(' ')
                }

                if (properties.title) {
                    this.title = properties.title
                }

                //do all the necessary and then change the response
                this.switchToReal = true
            },
            onSubmit(evt) {
                evt.preventDefault()
                if (this.form.checked.indexOf('termsAndConditions') < 0) {
                    this.error_terms_and_conditions = true

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
                        let status = response.status
                        if (status == 200) {
                            let data = response.data
                            if (data.success) {
                                this.response.success = data.success;
                                this.response.message = data.message;
                            } else {
                                this.response.success = data.success;
                                this.response.message = data.message;
                            }
                        } else {
                            if (status == 403) {
                                console.log('User do not have access to block: ' + blockId)
                            } else {
                                if (status == 404) {
                                    console.log('Block not found: '+blockId)
                                } else {
                                    console.log('Error loading block: '+blockId)
                                }
                            }
                        }
                    })
                    .catch((error) => {
                        console.log('Error loading block: '+error)
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
        mounted() {
            let url = this.$store.state.api.getBlockData + this.blockInfo.id
            let params = {
                url: url,
                id: this.blockInfo.id
            }
            this.$store.dispatch('loadBlockData', params)
        },
        watch: {
            blockDataChanged(blockDataChanged) {
                if (this.$store.state.blockDataChanged == this.blockInfo.id) {
                    let block = this.$store.getters.blockData[this.blockInfo.id]
                    this.processData(block)
                }
            }
        },
    }
</script>

<style lang="scss">
    .CT_CREATE_USER_ACCOUNT {
        border: 1px solid gainsboro;
        border-radius: 10px;
        margin-right: 15px;
        margin-left: 15px;
    }
</style>