<template>
    <div    v-if="switchToReal"
            :id="'CT_TEMPLATE_'+blockInfo.id"
            :class="'CT_TEMPLATE ' + displays">

        <b-row v-if="title">
            <b-col md="12" class="rf-block-title rf-primary">
                <h2 class="title">{{ title }}</h2>
            </b-col>
        </b-row>

        <b-row no-gutters>

        </b-row>

    </div>
    <div v-else :id="'MOCKUP_CT_TEMPLATE_'+blockInfo.id"  class="CT_TEMPLATE">
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
                console.log("Processing TEMPLATE block: " + block.id)
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
    .CT_TEMPLATE {

    }
</style>