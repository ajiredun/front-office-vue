<template>
    <div
        v-if="switchToReal"
        :id="'CT_FULL_TEXT'+blockInfo.id"
        :class="'CT_FULL_TEXT ' + displays + ' ' + classPadding"
        :style="style"
    >

        <b-row class="rf-block-title-row" no-gutters v-if="title">
            <b-col md="12" class="rf-block-title rf-primary">
                <h2 class="title">{{ title }}</h2>
            </b-col>
        </b-row>

        <b-row no-gutters class="content-container">
            <b-col md="12"  v-html="text"></b-col>
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
                //console.log("Processing Full Text block: " + block.id)
                //console.log(block)
                let properties = block.properties
                this.mapBasicBlockProperties(properties)

                if ( properties.background != undefined ) {
                    this.style.backgroundColor = properties.background
                }

                this.switchToReal = true
            }
        },
    }
</script>

<style lang="scss">
    .CT_FULL_TEXT, .content-container {
        margin: 0;
        margin-top:15px;
        margin-bottom:15px;
        padding-bottom: 15px;
        padding-top: 15px;
    }

    .CT_FULL_TEXT {
        .rf-block-title-row {
            padding-top:15px;
            padding-bottom:15px;
            text-align:center;
        }
    }
</style>