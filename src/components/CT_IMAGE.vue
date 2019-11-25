<template>
    <div v-if="switchToReal"
         :id="'CT_IMAGE_'+blockInfo.id"
         :class="'CT_IMAGE ' + displays + ' ' + classPadding">
        <b-row no-gutters>
            <b-col md="12" style="text-align: center;">
                <a v-if="image01Url" :href="image01Url">
                    <b-img-lazy fluid-grow blank-color="#777" :src="image01" class="display-image"></b-img-lazy>
                </a>
                <b-img-lazy v-else fluid-grow blank-color="#777" :src="image01" class="display-image"></b-img-lazy>
            </b-col>
        </b-row>
    </div>
    <div v-else :id="'MOCKUP_CT_IMAGE_'+blockInfo.id" class="CT_IMAGE">
        <b-row>
            <b-col md="12">
                <div class="mockup-container">
                    <div class="mockup-img" style="max-height: 150px;"></div>
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
                console.log("Processing CT_IMAGE block: " + block.id)
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
    .CT_IMAGE {
        .display-image {
            width:100%;
        }
    }
</style>