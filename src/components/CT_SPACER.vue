<template>
    <div    v-if="switchToReal"
            :id="'CT_SPACER_'+blockInfo.id"
            :class="'CT_SPACER ' + displays" :style="style">
    </div>
    <div v-else :id="'MOCKUP_CT_SPACER_'+blockInfo.id"  class="CT_SPACER">
        <b-row>
            <b-col md="12">

            </b-col>
        </b-row>
    </div>
</template>

<script>
    import componentLifecycle from '@/services/componentLifecycle.js'

    export default {
        extends: componentLifecycle,
        data() {
            return {
                style: {
                    'marginTop': "50px"
                }
            };
        },
        methods: {
            processData(block) {
                console.log("Processing CT_SPACER block: " + block.id)
                console.log(block)
                let properties = block.properties
                this.mapBasicBlockProperties(properties)

                if ( properties.space ) {
                    this.style.marginTop = properties.space + "px"
                }

                //do all the necessary and then switch
                this.switchToReal = true
            }
        }
    }
</script>

<style lang="scss">
    .CT_SPACER {

    }
</style>