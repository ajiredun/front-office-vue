<template>
    <div
        v-if="switchToReal"
        :id="'CT_FULL_TEXT'+blockInfo.id"
        :class="'CT_FULL_TEXT ' + displays">

        <b-row no-gutters v-if="title">
            <b-col md="12" class="rf-block-title rf-primary">
                <h2 class="title">{{ title }}</h2>
            </b-col>
        </b-row>

        <b-row class="content-container">
            <b-col md="12" v-html="text"></b-col>
        </b-row>

    </div>
    <b-row v-else class="CT_FULL_TEXT">
        <b-col md="12" v-if="title">
            <div class="mockup-container">
            <div class="mockup-text-line" style="height:25px;"></div>
            </div>
        </b-col>
        <b-col md="12">
            <div class="mockup-container">
                <div class="mockup-text-line"></div>
                <div class="mockup-text-line"></div>
                <div class="mockup-text-line"></div>
                <div class="mockup-text-line"></div>
                <div class="mockup-text-line"></div>
            </div>
        </b-col>
    </b-row>
</template>

<script>
    import axios from 'axios'
    import componentLifecycle from '@/services/componentLifecycle.js'
    import RfContentTitle from "./base/RF_CONTENT_TITLE";

    export default {
        components: {RfContentTitle},
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
                //console.log("Processing Full Text block: " + block.id)
                //console.log(block)
                let properties = block.properties
                this.mapBasicBlockProperties(properties)




                this.switchToReal = true
            }
        },
    }
</script>

<style lang="scss">
    .CT_FULL_TEXT, .content-container {
        margin: 0;
        padding-bottom: 15px;
        padding-top: 15px;
    }
</style>