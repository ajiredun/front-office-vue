<template>
    <div    v-if="switchToReal"
            :id="'CT_USER_PROFILE_WIDGET_'+blockInfo.id"
            :class="'CT_USER_PROFILE_WIDGET ' + displays">

        <b-row v-if="title">
            <b-col md="12" class="rf-block-title rf-primary">
                <h2 class="title">{{ title }}</h2>
            </b-col>
        </b-row>

        <b-row no-gutters>
            <div class="card">
                <img src="https://picsum.photos/600/300/?image=25" class="card-img-top rounded" alt="...">
                <div class="card-body">
                    <h3 class="card-title">John Doe</h3>
                    <h5 class="card-text"><em><i class="fas fa-at"></i>&nbsp; &nbsp; ajir.edun@gmail.com</em></h5>
                    <p class="card-text"><i class="fas fa-address-card"></i>&nbsp; &nbsp; Royal Road, 9th Mile, Triolet</p>
                    <p class="card-text"><i class="fas fa-mobile-alt"></i>&nbsp; &nbsp; 59033978</p>
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
            };
        },
        methods: {
            processData(block) {
                console.log("Processing CT_USER_PROFILE_WIDGET block: " + block.id)
                console.log(block)
                let properties = block.properties
                this.mapBasicBlockProperties(properties)


                //do all the necessary and then switch
                this.switchToReal = true
            }
        }
    }
</script>

<style lang="scss">
    .CT_USER_PROFILE_WIDGET {
        .card {
            width:100%;
            //border:1px solid gainsboro;
            background: rgb(204,201,201);
            background: linear-gradient(180deg,#9cbfd2,#d9e4f2 6%,#fff 24%,#fff 101%);
            box-shadow: 2px 5px 10px #e4e4e4;
            margin-top:75px;
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