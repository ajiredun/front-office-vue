<template>
    <div v-if="switchToReal"
         :id="'CT_DISPLAY_THREE_'+blockInfo.id"
         :class="'CT_DISPLAY_THREE ' + displays + ' ' + classPadding">
        <b-row>
            <b-col sm="4" class="margin-top-mobile">
                <a v-if="image01Url" :href="image01Url">
                    <b-img fluid-grow blank-color="#777" :src="image01" class="display-medium-image"></b-img>
                </a>
                <b-img v-else fluid-grow blank-color="#777" :src="image01" class="display-medium-image"></b-img>
            </b-col>
            <b-col sm="4" class="margin-top-mobile">
                <a v-if="image02Url" :href="image02Url">
                    <b-img fluid-grow blank-color="#777" :src="image02" class="display-medium-image"></b-img>
                </a>
                <b-img v-else fluid-grow blank-color="#777" :src="image02" class="display-medium-image"></b-img>
            </b-col>
            <b-col sm="4" class="margin-top-mobile">
                <a v-if="image03Url" :href="image03Url">
                    <b-img fluid-grow blank-color="#777" :src="image02" class="display-medium-image"></b-img>
                </a>
                <b-img v-else fluid-grow blank-color="#777" :src="image02" class="display-medium-image"></b-img>
            </b-col>
        </b-row>
    </div>
    <div v-else :id="'MOCKUP_CT_DISPLAY_THREE_'+blockInfo.id" class="CT_DISPLAY_THREE">
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
                image02: null,
                image02Url: null,
                image03: null,
                image03Url: null,
            };
        },
        methods: {
            processData(block) {
                console.log("Processing CT_DISPLAY_THREE block: " + block.id)
                console.log(block)
                let properties = block.properties
                this.mapBasicBlockProperties(properties)

                if (properties.image01) {
                    this.image01 = properties.image01;
                    if (properties.image01Url) {
                        this.image01Url = properties.image01Url;
                    }
                }

                if (properties.image02) {
                    this.image02 = properties.image02;
                    if (properties.image02Url) {
                        this.image02Url = properties.image02Url;
                    }
                }

                if (properties.image03) {
                    this.image03 = properties.image03;
                    if (properties.image03Url) {
                        this.image03Url = properties.image03Url;
                    }
                }


                //do all the necessary and then switch
                this.switchToReal = true
            }
        }
    }
</script>

<style lang="scss">
    .CT_DISPLAY_THREE {
        .display-medium-image {
            border: 0px solid white;
            transition: border 0.5s ease-in-out;
        }

        .display-medium-image:hover {
            border:5px solid #ffffff;
        }
    }
</style>