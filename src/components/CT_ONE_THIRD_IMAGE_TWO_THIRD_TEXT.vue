<template>
    <div
            v-if="switchToReal"
            :id="'CT_ONE_THIRD_IMAGE_TWO_THIRD_TEXT'+blockInfo.id"
            :class="'CT_ONE_THIRD_IMAGE_TWO_THIRD_TEXT ' + displays">

        <b-row v-if="title" class="rf-block-title-row">
            <b-col md="12" class="rf-block-title rf-primary">
                <h2 class="title">{{ title }}</h2>
            </b-col>
        </b-row>

        <b-row  class="content-container  d-flex"  :style="style">
            <b-col v-if="side=='left'" md="4"  class="align-self-center">
                <b-img fluid-grow :src="image"></b-img>
            </b-col>
            <b-col md="8" v-html="text"  class="align-self-center">

            </b-col>
            <b-col v-if="side=='right'" md="4"  class="align-self-center">
                <b-img fluid-grow :src="image"></b-img>
            </b-col>
        </b-row>

    </div>
    <div v-else class="CT_ONE_THIRD_IMAGE_TWO_THIRD_TEXT">
        <b-row>
            <b-col md="12">
                <div class="mockup-container">
                    <div class="mockup-text-line" style="height:25px;"></div>
                </div>
            </b-col>
            <b-col md="4">
                <div class="mockup-container">
                    <div class="mockup-img"></div>
                </div>
            </b-col>
            <b-col md="8">
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
                //console.log("Processing One third Image and Two third Text block: " + block.id)
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
            }
        },
    }
</script>

<style lang="scss">
    .CT_ONE_THIRD_IMAGE_TWO_THIRD_TEXT, .content-container {
        margin: 0;
        padding: 0;
        padding-bottom: 15px;
        padding-top: 15px;
        .col-md-8 {
            padding-top: 15px;
            padding-bottom: 15px;
            vertical-align: middle;
        }
        .col-md-4 {
            padding-top: 15px;
            padding-bottom: 15px;
            vertical-align: middle;
        }
        .rf-block-title-row {
            padding-top:15px;
            padding-bottom:15px;
            text-align:center;
        }
    }
</style>