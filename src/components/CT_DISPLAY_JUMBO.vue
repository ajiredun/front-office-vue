<template>
    <div    v-if="switchToReal"
            :id="'CT_DISPLAY_JUMBO_'+blockInfo.id"
            :class="'CT_DISPLAY_JUMBO ' + displays">

        <b-row no-gutters  class="justify-content-center">
            <b-col md="4" :style="{ 'max-width':adv_width }">
                <div :style="{ 'width':'100%', 'text-align':'center', 'max-width':adv_width }" class="jumbo">
                    <div v-if="adv_height"
                         class="image-as-background"
                         :style="{ 'background-image':  'url(' + image01 + ')' ,'height': adv_height }"
                    ></div>
                    <b-img v-else fluid-grow blank-color="#777" :src="image01"></b-img>
                    <a v-if="image01Url" class="btn btn-outline-dark btn-link-slider" :href="image01Url"
                       style="margin-top:-150px;">{{image01UrlText}}</a>
                </div>
            </b-col>
            <b-col md="4" :style="{ 'max-width':adv_width }">
                <div style="width:100%; text-align:center;"  class="jumbo">
                    <div v-if="adv_height"
                         class="image-as-background"
                         :style="{ 'background-image':  'url(' + image02 + ')' ,'height': adv_height }"
                    ></div>
                    <b-img v-else fluid-grow blank-color="#777" :src="image02"></b-img>
                    <a v-if="image02Url" class="btn btn-outline-dark btn-link-slider" :href="image02Url"
                       style="margin-top:-150px;">{{image02UrlText}}</a>
                </div>
            </b-col>
        </b-row>

    </div>
    <div v-else :id="'MOCKUP_CT_DISPLAY_JUMBO_'+blockInfo.id"  class="CT_DISPLAY_JUMBO">
        <b-row>
            <b-col md="6">
                <div class="mockup-container">
                    <div class="mockup-img"></div>
                </div>
            </b-col>
            <b-col md="6">
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
                image01UrlText: null,
                image02: null,
                image02Url: null,
                image02UrlText: null,
                adv_height: false,
                adv_width: false,
            };
        },
        methods: {
            processData(block) {
                console.log("Processing CT_DISPLAY_JUMBO block: " + block.id)
                console.log(block)
                let properties = block.properties
                this.mapBasicBlockProperties(properties)

                if (properties.image01) {
                    this.image01 = properties.image01;
                    if (properties.image01UrlText) {
                        this.image01UrlText = properties.image01UrlText;
                        if (properties.image01Url) {
                            this.image01Url = properties.image01Url;
                        }
                    }
                }

                if (properties.image02) {
                    this.image02 = properties.image02;
                    if (properties.image02UrlText) {
                        this.image02UrlText = properties.image02UrlText;
                        if (properties.image02Url) {
                            this.image02Url = properties.image02Url;
                        }
                    }
                }

                if (properties.adv_height) {
                    if (properties.adv_height != '' && properties.adv_height != '0' && properties.adv_height != 0) {
                        this.adv_height = parseInt(properties.adv_height) + 'px'
                    }
                }

                if (properties.adv_width) {
                    if (properties.adv_width != '' && properties.adv_width != '0' && properties.adv_width != 0) {
                        this.adv_width = parseInt(properties.adv_width) + 'px'
                    }
                }


                //do all the necessary and then switch
                this.switchToReal = true
            }
        }
    }
</script>

<style lang="scss">
    .CT_DISPLAY_JUMBO {

        background: #efefef;
        background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
        padding-top: 25px;


        .btn-link-slider {
            color: #fff;
            box-shadow: 2px 2px 5px white;
            border: 2px solid #000000;
        }

        .image-as-background {
            width: 100%;
            background-color: gainsboro;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        .jumbo:hover {
            border-top:5px solid #000000;
        }
    }
</style>