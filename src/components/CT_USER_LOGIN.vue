<template>
    <div :id="'CT_USER_LOGIN_'+blockInfo.id" v-if="switchToReal" :class="'CT_USER_LOGIN rf-title-margin-div ' + displays">
        <b-row no-gutters class="rf-title-margin">
            <b-col md="12" class="rf-block-title rf-neutral rf-background-secondary" v-if="title">
                <h2 class="title">{{title}}</h2>
            </b-col>
        </b-row>
        <b-row no-gutters>
            <b-col md="1"></b-col>
            <b-col md="10">
                <b-form @submit="onSubmit" id="form_register" v-if="show" class="mb-3"
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

                    <b-button  v-if="rf_loading"  type="button" class="btn-block" variant="neutral"><i class="fas fa-spinner fa-2x fa-spin"></i></b-button>
                    <div v-else>
                        <b-button type="submit" class="btn-block" variant="primary">Login</b-button>
                    </div>
                </b-form>
                <b-row no-gutters v-if="error_message" >
                    <b-col md="12" class="rf-warning">
                        <p><i class="fas fa-exclamation-triangle fa-2x" /> {{error_message}}</p>
                    </b-col>
                </b-row>
                <b-row v-if="follow_up">
                    <b-col md="12" class="rf-secondary">
                        <p>{{follow_up}}</p>
                    </b-col>
                </b-row>
            </b-col>
            <b-col md="1"></b-col>
        </b-row>
    </div>
    <b-row no-gutters v-else class="CT_USER_LOGIN">
        <b-col md="12">
            <div class="mockup-text-line" style="height:25px;"></div>
        </b-col>
        <b-col md="12">
            <div class="mockup-img" style="height: 350px;"></div>
        </b-col>
    </b-row>
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
                rf_loading: false,
                form: {
                    input_email: '',
                    input_password: ''
                },
                show: true,
                error_message: false,
                follow_up:false
            };
        },
        methods: {
            processData(block) {
                console.log("Processing User Login block: " + block.id)
                console.log(block)
                let properties = block.properties

                if (properties.title) {
                    this.title = properties.title
                }

                if (properties.displays) {
                    this.displays = properties.displays.join(' ')
                }

                //do all the necessary and then change the response
                this.switchToReal = true
            },
            onSubmit(evt) {
                evt.preventDefault()
                this.rf_loading = true

                axios.post(this.$store.state.api.userLogin, {
                    email: this.form.input_email,
                    password: this.form.input_password
                })
                    .then((response) => {
                        let status = response.status
                        if (status == 200) {
                            //let data = response.data
                            console.log(response)
                            this.follow_up = "HELL YEAH"
                        } else {
                            if (status == 403) {
                                this.error_message = 'You do not have access to this contet'
                                console.log('User do not have access to block: ' + blockId)
                            } else {
                                if (status == 404) {
                                    this.error_message = 'An error occured while trying to sign you in. '
                                    console.log('Block not found: ' + blockId)
                                } else {
                                    this.error_message = 'An error occured while trying to sign you in. '
                                    console.log('Error loading block: ' + blockId)
                                }
                            }
                        }
                        this.rf_loading = false
                    })
                    .catch((error) => {
                        console.log('An error occured while trying to sign you in. ' + error)
                        this.error_message = 'An error occured while trying to sign you in. '
                        this.rf_loading = false
                    });
            },
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
    .CT_USER_LOGIN {
        border-radius: 10px;
        max-width:300px;
        margin-right: auto;
        margin-left: auto;

        .form-control {
            margin-top:10px;
            margin-bottom:10px;
        }

        .rf-block-title {
            padding-top: 15px;
            font-size: 30px;
            padding-bottom: 10px;
            text-align: center;
            box-shadow: 0 6px 6px #efefef;
            border-radius: 10px;
        }
        .btn {
            margin-right:10px;
        }
    }
</style>