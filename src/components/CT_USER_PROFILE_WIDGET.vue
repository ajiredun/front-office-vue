<template>
    <div    v-if="switchToReal"
            :id="'CT_USER_PROFILE_WIDGET_'+blockInfo.id"
            :class="'CT_USER_PROFILE_WIDGET ' + displays + ' ' + classPadding">

        <b-row v-if="title">
            <b-col md="12" class="rf-block-title rf-primary">
                <h2 class="title">{{ title }}</h2>
            </b-col>
        </b-row>

        <b-row no-gutters  class="padding-left-right">
            <div class="card">
                <img class="card-img-top rounded"  :src="user.picture" alt="Profile Picture" />
                <div class="card-body">
                    <h3 class="card-title">{{user.firsname}} {{user.lastname}}</h3>
                    <h5 class="card-text"><em><i class="fas fa-at"></i>&nbsp; &nbsp; {{user.email}}</em></h5>
                    <p v-if="user.address" class="card-text"><i class="fas fa-address-card"></i>&nbsp; &nbsp; {{user.address}}, {{user.country}}, {{user.zipcode}}</p>
                    <p v-if="user.mobile" class="card-text"><i class="fas fa-mobile-alt"></i>&nbsp; &nbsp; {{user.mobile}}</p>
                </div>
            </div>
        </b-row>
    </div>
    <div v-else :id="'MOCKUP_CT_USER_PROFILE_WIDGET_'+blockInfo.id"  class="CT_USER_PROFILE_WIDGET">
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
                user: false
            };
        },
        methods: {
            processData(block) {
                console.log("Processing CT_USER_PROFILE_WIDGET block: " + block.id)
                console.log(block)
                let properties = block.properties
                this.mapBasicBlockProperties(properties)

                axios.get(this.$store.state.api.userDetails + "/" + this.getCurrentUserInfo.id + "?"+ this.$store.getters.getUrlToken)
                    .then((response) => {
                        this.user = response.data
                        this.switchToReal = true
                    })
                    .catch((error) => {
                        this.error_info = this.processApiErrors(error, {
                            default: "An error occured while getting your info",
                            error404: "Page not found",
                            error401: "Unauthorized access"
                        })

                        console.log('Error previewing: ' + error)
                    });

                //do all the necessary and then switch

            }
        }
    }
</script>

<style lang="scss">
    .CT_USER_PROFILE_WIDGET {
        background: #efefef;
        .card {
            width:100%;
            box-shadow: 2px 5px 10px gainsboro;
            border-radius: 20px;
            margin-top:75px;
            margin-bottom: 15px;
            .card-img-top {
                width: 100px;
                height:100px;
                margin-left: auto;
                margin-right: auto;
                margin-top: -50px;
            }
            .card-body {
                text-align: center;
            }
        }
    }
</style>