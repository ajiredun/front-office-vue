<template>
    <b-row :id="'CT_HALF_IMAGE_HALF_TEXT'+blockInfo.id" v-if="switchToReal"
           :class="'CT_HALF_IMAGE_HALF_TEXT ' + displays">
        <b-col class="rf-block-title" md="12" v-if="title">
            <h2 class="title">{{title}}</h2>
        </b-col>
        <b-col v-if="side=='left'" md="6">
            <b-img fluid-grow :src="image"></b-img>
        </b-col>
        <b-col md="6" v-html="text">

        </b-col>
        <b-col v-if="side=='right'" md="6">
            <b-img fluid-grow :src="image"></b-img>
        </b-col>
    </b-row>
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

                this.switchToReal = true
            },
        },
    }
</script>

<style lang="scss">
    .CT_HALF_IMAGE_HALF_TEXT {
        margin: 0;
        padding: 0;
        padding-bottom: 15px;
        padding-top: 15px;
    }
</style>