<template>
    <div
            v-if="switchToReal"
            :id="'CT_SLIDER_THUMBNAIL_'+blockInfo.id"
            :class="'CT_SLIDER_THUMBNAIL ' + displays">

        <b-row  v-if="title"  class="rf-block-title-row">
            <b-col md="12" class="rf-block-title rf-primary">
                <h2 class="title">{{ title }}</h2>
            </b-col>
        </b-row>

        <b-row no-gutters>
            <b-col md="12">
                <carousel
                        :id="'slider-thumbnail-'+blockInfo.id"
                        easing="linear"
                        speed="300"
                        :loop="true"
                        :autoplay="autoplay"
                        :autoplayTimeout="autoplayTimeout"
                        :autoplayHoverPause="true"
                        :scrollPerPage="false"
                        :perPageCustom="[[100, 1],[576, slideQtyInMobile],[768,slideQtyInTablet],[992,slideQtyInDesktop]]">
                    <slide v-if="image01">
                        <div style="width:100%;">
                            <div v-if="adv_height"
                                 class="image-as-background"
                                 :style="{ 'background-image':  'url(' + image01 + ')' ,'height': adv_height }"
                            ></div>
                            <b-img v-else fluid-grow blank-color="#777" :src="image01"></b-img>
                            <a v-if="image01Url" class="btn btn-sm btn-outline-dark" :href="image01Url"
                               style="margin-top:15px;">{{image01UrlText}}</a>
                        </div>
                    </slide>
                    <slide v-if="image02">
                        <div style="width:100%;">
                            <div v-if="adv_height"
                                 class="image-as-background"
                                 :style="{ 'background-image':  'url(' + image02 + ')' ,'height': adv_height}"
                            ></div>
                            <b-img v-else fluid-grow blank-color="#777" :src="image02"></b-img>
                            <a v-if="image02Url" class="btn btn-sm btn-outline-dark" :href="image02Url"
                               style="margin-top:15px;">{{image02UrlText}}</a>
                        </div>
                    </slide>
                    <slide v-if="image03">
                        <div style="width:100%;">
                            <div v-if="adv_height"
                                 class="image-as-background"
                                 :style="{ 'background-image':  'url(' + image03 + ')' ,'height': adv_height }"
                            ></div>
                            <b-img v-else fluid-grow blank-color="#777" :src="image03"></b-img>
                            <a v-if="image03Url" class="btn btn-sm btn-outline-dark" :href="image03Url"
                               style="margin-top:15px;">{{image03UrlText}}</a>
                        </div>
                    </slide>
                    <slide v-if="image04">
                        <div style="width:100%;">
                            <div v-if="adv_height"
                                 class="image-as-background"
                                 :style="{ 'background-image':  'url(' + image04 + ')' ,'height': adv_height }"
                            ></div>
                            <b-img v-else fluid-grow blank-color="#777" :src="image04"></b-img>
                            <a v-if="image04Url" class="btn btn-sm btn-outline-dark" :href="image04Url"
                               style="margin-top:15px;">{{image04UrlText}}</a>
                        </div>
                    </slide>
                    <slide v-if="image05">
                        <div style="width:100%;">
                            <div v-if="adv_height"
                                 class="image-as-background"
                                 :style="{ 'background-image':  'url(' + image05 + ')' ,'height': adv_height }"
                            ></div>
                            <b-img v-else fluid-grow blank-color="#777" :src="image05"></b-img>
                            <a v-if="image05Url" class="btn btn-sm btn-outline-dark" :href="image05Url"
                               style="margin-top:15px;">{{image05UrlText}}</a>
                        </div>
                    </slide>
                    <slide v-if="image06">
                        <div style="width:100%;">
                            <div v-if="adv_height"
                                 class="image-as-background"
                                 :style="{ 'background-image':  'url(' + image06 + ')' ,'height': adv_height }"
                            ></div>
                            <b-img v-else fluid-grow blank-color="#777" :src="image06"></b-img>
                            <a v-if="image06Url" class="btn btn-sm btn-outline-dark" :href="image06Url"
                               style="margin-top:15px;">{{image06UrlText}}</a>
                        </div>
                    </slide>
                    <slide v-if="image07">
                        <div style="width:100%;">
                            <div v-if="adv_height"
                                 class="image-as-background"
                                 :style="{ 'background-image':  'url(' + image07 + ')' ,'height': adv_height }"
                            ></div>
                            <b-img v-else fluid-grow blank-color="#777" :src="image07"></b-img>
                            <a v-if="image07Url" class="btn btn-sm btn-outline-dark" :href="image07Url"
                               style="margin-top:15px;">{{image07UrlText}}</a>
                        </div>
                    </slide>
                    <slide v-if="image08">
                        <div style="width:100%;">
                            <div v-if="adv_height"
                                 class="image-as-background"
                                 :style="{ 'background-image':  'url(' + image08 + ')' ,'height': adv_height }"
                            ></div>
                            <b-img v-else fluid-grow blank-color="#777" :src="image08"></b-img>
                            <a v-if="image08Url" class="btn btn-sm btn-outline-dark" :href="image08Url"
                               style="margin-top:15px;">{{image08UrlText}}</a>
                        </div>
                    </slide>
                    <slide v-if="image09">
                        <div style="width:100%;">
                            <div v-if="adv_height"
                                 class="image-as-background"
                                 :style="{ 'background-image':  'url(' + image09 + ')' ,'height': adv_height }"
                            ></div>
                            <b-img v-else fluid-grow blank-color="#777" :src="image09"></b-img>
                            <a v-if="image09Url" class="btn btn-sm btn-outline-dark" :href="image09Url"
                               style="margin-top:15px;">{{image09UrlText}}</a>
                        </div>
                    </slide>
                    <slide v-if="image10">
                        <div style="width:100%;">
                            <div v-if="adv_height"
                                 class="image-as-background"
                                 :style="{ 'background-image':  'url(' + image10 + ')' ,'height': adv_height }"
                            ></div>
                            <b-img v-else fluid-grow blank-color="#777" :src="image10"></b-img>
                            <a v-if="image10Url" class="btn btn-sm btn-outline-dark" :href="image10Url"
                               style="margin-top:15px;">{{image10UrlText}}</a>
                        </div>
                    </slide>
                </carousel>
            </b-col>
        </b-row>

    </div>
    <div v-else :id="'MOCKUP_CT_SLIDER_THUMBNAIL_'+blockInfo.id" class="CT_SLIDER_THUMBNAIL">
        <b-row>
            <b-col md="12">
                <div class="mockup-container">
                    <div class="mockup-text-line" style="height:25px;"></div>
                </div>
            </b-col>
        </b-row>
        <b-row no-gutters>
            <b-col md="12">
                <b-row>
                    <b-col>
                        <div style="background:gainsboro;width:100%;height:200px;"></div>
                    </b-col>
                    <b-col>
                        <div style="background:gainsboro;width:100%;height:200px;"></div>
                    </b-col>
                    <b-col>
                        <div style="background:gainsboro;width:100%;height:200px;"></div>
                    </b-col>
                    <b-col>
                        <div style="background:gainsboro;width:100%;height:200px;"></div>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import axios from 'axios'
    import componentLifecycle from '@/services/componentLifecycle.js'
    import {Carousel, Slide} from 'vue-carousel';

    export default {
        extends: componentLifecycle,
        data() {
            return {
                autoplay: true,
                autoplayTimeout: 3000,
                slideQtyInMobile: 1,
                slideQtyInTablet: 2,
                slideQtyInDesktop: 3,
                image01: null,
                image01Url: null,
                image01UrlText: null,
                image02: null,
                image02Url: null,
                image02UrlText: null,
                image03: null,
                image03Url: null,
                image03UrlText: null,
                image04: null,
                image04Url: null,
                image04UrlText: null,
                image05: null,
                image05Url: null,
                image05UrlText: null,
                image06: null,
                image06Url: null,
                image06UrlText: null,
                image07: null,
                image07Url: null,
                image07UrlText: null,
                image08: null,
                image08Url: null,
                image08UrlText: null,
                image09: null,
                image09Url: null,
                image09UrlText: null,
                image10: null,
                image10Url: null,
                image10UrlText: null,
                adv_height: false,
            };
        },
        components: {
            Carousel,
            Slide
        },
        methods: {
            processData(block) {

                // carousel docs
                // :: https://ssense.github.io/vue-carousel/api/
                //console.log("Processing CT_SLIDER_THUMBNAIL: " + block.id)
                //console.log(block)
                let properties = block.properties
                this.mapBasicBlockProperties(properties)

                if (properties.autoplay) {
                    this.autoplay = properties.autoplay;
                }

                if (properties.autoplayTimeout) {
                    this.autoplayTimeout = properties.autoplayTimeout;
                }

                if (properties.slideQtyInMobile) {
                    this.slideQtyInMobile = properties.slideQtyInMobile;
                }

                if (properties.slideQtyInTablet) {
                    this.slideQtyInTablet = properties.slideQtyInTablet;
                }

                if (properties.slideQtyInDesktop) {
                    this.slideQtyInDesktop = properties.slideQtyInDesktop;
                }

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
                if (properties.image03) {
                    this.image03 = properties.image03;
                    if (properties.image03UrlText) {
                        this.image03UrlText = properties.image03UrlText;
                        if (properties.image03Url) {
                            this.image03Url = properties.image03Url;
                        }
                    }
                }
                if (properties.image04) {
                    this.image04 = properties.image04;
                    if (properties.image04UrlText) {
                        this.image04UrlText = properties.image04UrlText;
                        if (properties.image04Url) {
                            this.image04Url = properties.image04Url;
                        }
                    }
                }
                if (properties.image05) {
                    this.image05 = properties.image05;
                    if (properties.image05UrlText) {
                        this.image05UrlText = properties.image05UrlText;
                        if (properties.image05Url) {
                            this.image05Url = properties.image05Url;
                        }
                    }
                }
                if (properties.image06) {
                    this.image06 = properties.image06;
                    if (properties.image06UrlText) {
                        this.image06UrlText = properties.image06UrlText;
                        if (properties.image06Url) {
                            this.image06Url = properties.image06Url;
                        }
                    }
                }
                if (properties.image07) {
                    this.image07 = properties.image07;
                    if (properties.image07UrlText) {
                        this.image07UrlText = properties.image07UrlText;
                        if (properties.image07Url) {
                            this.image07Url = properties.image07Url;
                        }
                    }
                }
                if (properties.image08) {
                    this.image08 = properties.image08;
                    if (properties.image08UrlText) {
                        this.image08UrlText = properties.image08UrlText;
                        if (properties.image08Url) {
                            this.image08Url = properties.image08Url;
                        }
                    }
                }
                if (properties.image09) {
                    this.image09 = properties.image09;
                    if (properties.image09UrlText) {
                        this.image09UrlText = properties.image09UrlText;
                        if (properties.image09Url) {
                            this.image09Url = properties.image09Url;
                        }
                    }
                }
                if (properties.image10) {
                    this.image10 = properties.image10;
                    if (properties.image10UrlText) {
                        this.image10UrlText = properties.image10UrlText;
                        if (properties.image10Url) {
                            this.image10Url = properties.image10Url;
                        }
                    }
                }

                if (properties.adv_height) {
                    //we need to make sure that the smaller images grow to match the height,
                    //it should be as background cover
                    if (properties.adv_height != '' && properties.adv_height != '0' && properties.adv_height != 0) {
                        this.adv_height = parseInt(properties.adv_height) + 'px'
                    }
                }

                this.switchToReal = true
            }
        },
    }
</script>

<style lang="scss">
    .CT_SLIDER_THUMBNAIL {
        .rf-block-title-row {
            padding-top:15px;
            padding-bottom:15px;
            text-align:center;
        }
        .VueCarousel-pagination {

            margin-top: -35px;
            z-index: 10;

            .VueCarousel-dot-container {
                margin-top: 0;
            }

            button {
                margin-top: 0;
            }
        }

        .col-md-12 {
            padding-right: 0;
            padding-left: 0;
        }

        .image-as-background {
            width: 100%;
            background-color: gainsboro;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        margin: 0;
        padding: 0;
        padding-bottom: 15px;
        padding-top: 5px;
    }
</style>