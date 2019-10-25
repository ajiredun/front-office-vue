<template>
    <div
            v-if="switchToReal"
            :id="'CT_ONE_THIRD_IMAGE_TWO_THIRD_TEXT'+blockInfo.id"
            :class="'CT_ONE_THIRD_IMAGE_TWO_THIRD_TEXT ' + displays">

        <b-row v-if="title">
            <b-col md="12" class="rf-block-title rf-primary">
                <h2 class="title">{{ title }}</h2>
            </b-col>
        </b-row>

        <b-row  class="content-container">
            <b-col v-if="side=='left'" md="4">
                <b-img fluid-grow :src="image"></b-img>
            </b-col>
            <b-col md="8" v-html="text">

            </b-col>
            <b-col v-if="side=='right'" md="4">
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
                text: false
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
    }
</style>