<template>
    <div v-if="switchToReal"
         :id="'CT_DISPLAY_SMALL_'+blockInfo.id"
         :class="'CT_DISPLAY_SMALL ' + displays">
        <b-row>
            <b-col md="12" style="text-align: center;">
                <a v-if="image01Url" :href="image01Url">
                    <b-img fluid-grow blank-color="#777" :src="image01" class="display-small-image"></b-img>
                </a>
                <b-img v-else fluid-grow blank-color="#777" :src="image01" class="display-small-image"></b-img>
            </b-col>
        </b-row>
    </div>
    <div v-else :id="'MOCKUP_CT_DISPLAY_SMALL_'+blockInfo.id" class="CT_DISPLAY_SMALL">
        <b-row>
            <b-col md="12">
                <div class="mockup-container">
                    <div class="mockup-img"></div>
                </div>
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
                image01: null,
                image01Url: null,
            };
        },
        methods: {
            processData(block) {
                console.log("Processing CT_DISPLAY_SMALL block: " + block.id)
                console.log(block)
                let properties = block.properties
                this.mapBasicBlockProperties(properties)

                if (properties.image01) {
                    this.image01 = properties.image01;
                    if (properties.image01Url) {
                        this.image01Url = properties.image01Url;
                    }
                }


                //do all the necessary and then switch
                this.switchToReal = true
            }
        }
    }
</script>

<style lang="scss">
    .CT_DISPLAY_SMALL {
        .display-small-image {
            max-width: 300px;
        }
    }
</style>