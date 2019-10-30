<template>
    <div
        :id="'CT_HALF_IMAGE_HALF_TEXT'+blockInfo.id"
        v-if="switchToReal"
        :class="'CT_HALF_IMAGE_HALF_TEXT ' + displays">

        <b-row class="rf-block-title-row" v-if="title">
            <b-col md="12" class="rf-block-title rf-primary">
                <h2 class="title">{{ title }}</h2>
            </b-col>
        </b-row>


        <b-row  class="content-container  d-flex"  :style="style">
            <b-col v-if="side=='left'" md="6" class="align-self-center">
                <b-img fluid-grow :src="image"></b-img>
            </b-col>
            <b-col md="6" v-html="text" class="align-self-center">

            </b-col>
            <b-col v-if="side=='right'" md="6" class="align-self-center">
                <b-img fluid-grow :src="image"></b-img>
            </b-col>
        </b-row>
    </div>
    <div v-else class="CT_HALF_IMAGE_HALF_TEXT">
        <b-row>
            <b-col md="12" v-if="title">
                <div class="mockup-container">
                <div class="mockup-text-line" style="height:25px;"></div>
                </div>
            </b-col>
            <b-col md="6">
                <div class="mockup-container">
                    <div class="mockup-img"></div>
                </div>
            </b-col>
            <b-col md="6">
                <div class="mockup-container">
                    <div class="mockup-text-line"></div>
                    <div class="mockup-text-line"></div>
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
                image: false,
                side: 'left',
                text: false,
                style: {
                    'backgroundColor': "rgba(255,255,255,0);"
                }
            };
        },
        methods: {
            processData(block) {
                //console.log("Processing Half Image Half Text block: " + block.id)
                //console.log(block)
                let properties = block.properties
                this.mapBasicBlockProperties(properties)

                if (properties.side) {
                    this.side = properties.side
                }

                if ( properties.background != undefined ) {
                    this.style.backgroundColor = properties.background
                }

                this.switchToReal = true
            },
        },
    }
</script>

<style lang="scss">

    .CT_HALF_IMAGE_HALF_TEXT {
        .rf-block-title-row {
            padding-top:15px;
            padding-bottom:15px;
            text-align:center;
        }
    }

    .CT_HALF_IMAGE_HALF_TEXT , .content-container {
        margin: 0;
        padding: 0;
        padding-bottom: 15px;
        padding-top: 15px;
        .col-md-6 {
                padding-top: 15px;
                padding-bottom: 15px;
                vertical-align: middle;
        }
    }
</style>