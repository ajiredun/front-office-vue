<template>
    <div    v-if="switchToReal"
            :id="'CT_USER_ACCOUNT_MODIFY_'+blockInfo.id"
            :class="'CT_USER_ACCOUNT_MODIFY ' + displays">

        <b-row no-gutters class="padding-left-right">
            <b-col md="12">

                <div class="card">
                    <div class="card-header rf-background-info rf-neutral"></div>
                    <div class="card-body">
                        <h4 class="card-title">Account Details</h4>
                        <transition name="fade"  mode="out-in">
                            <b-form @submit="onSubmit" id="form_register" v-if="formVisible"
                                    class="mb-3"
                                    style="margin-top: 27px;">

                                <b-row>
                                    <b-col md="12">
                                        <b-form-input
                                                id="input-1"
                                                v-model="form.input_mobile"
                                                type="text"
                                                required
                                                style="margin-bottom:10px;margin-top:10px;"
                                                placeholder="Mobile Number"
                                        ></b-form-input>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col md="6">
                                        <b-form-input
                                                id="input-2"
                                                v-model="form.input_firstname"
                                                type="text"
                                                required
                                                style="margin-bottom:10px;margin-top:10px;"
                                                placeholder="Firstname"
                                        ></b-form-input>
                                    </b-col>
                                    <b-col md="6">
                                        <b-form-input
                                                id="input-3"
                                                v-model="form.input_lastname"
                                                type="text"
                                                required
                                                style="margin-bottom:10px;margin-top:10px;"
                                                placeholder="Lastname"
                                        ></b-form-input>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col md="12">
                                        <b-form-input
                                                id="input-4"
                                                v-model="form.input_address"
                                                type="text"
                                                required
                                                style="margin-bottom:10px;margin-top:10px;"
                                                placeholder="Address"
                                        ></b-form-input>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col md="6">
                                        <b-form-input
                                                id="input-5"
                                                v-model="form.input_country"
                                                type="text"
                                                required
                                                style="margin-bottom:10px;margin-top:10px;"
                                                placeholder="Country"
                                        ></b-form-input>
                                    </b-col>
                                    <b-col md="6">
                                        <b-form-input
                                                id="input-6"
                                                v-model="form.input_zipcode"
                                                type="text"
                                                required
                                                style="margin-bottom:10px;margin-top:10px;"
                                                placeholder="Postal Code"
                                        ></b-form-input>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col md="12">
                                        <iframe src="https://www.mauritiuspost.mu/products-and-services/post-code-finder"
                                                style="width:100%; height:200px;"></iframe>
                                    </b-col>
                                </b-row>

                                <b-row>
                                    <b-col md="12">
                                        <b-button v-if="rf_loading" type="button" class="btn-block" variant="neutral">
                                            <b-spinner style="width: 2rem; height: 2rem;" label="Large Spinner" type="grow"></b-spinner>
                                        </b-button>
                                        <div v-else class="d-flex justify-content-between">
                                            <b-button type="submit"  variant="warning">
                                                <i class="fab fa-user-edit"></i> &nbsp;&nbsp; Update
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
                                      class="btn-block" variant="info">
                                <i class="fab fa-user-edit"></i> &nbsp;&nbsp; Update
                            </b-button>
                        </transition>
                    </div>
                </div>

            </b-col>
        </b-row>

    </div>
    <div v-else :id="'MOCKUP_CT_USER_ACCOUNT_MODIFY_'+blockInfo.id"  class="CT_USER_ACCOUNT_MODIFY">
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
                    input_mobile: '',
                    input_address: '',
                    input_country: '',
                    input_zipcode: '',
                    input_firstname: '',
                    input_lastname: '',
                },
                formVisible: false,
                rf_loading: false,
            };
        },
        methods: {
            processData(block) {
                console.log("Processing CT_USER_ACCOUNT_MODIFY block: " + block.id)
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
        }
    }
</script>

<style lang="scss">
    .CT_USER_ACCOUNT_MODIFY {
        .card {
            width: 100%;
            box-shadow: 2px 5px 10px gainsboro;
            border-radius: 20px;
            margin-bottom: 15px;
        }
    }
</style>