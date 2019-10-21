<template>
    <b-row v-if="switchToReal" class="CT_SLIDER_THUMBNAIL">

    </b-row>
    <b-row v-else class="CT_SLIDER_THUMBNAIL">
        <b-col md="12" v-if="title">
            <div class="mockup-text-line" style="height:25px;"></div>
        </b-col>
        <b-col md="12"  no-gutters>
            <carousel paginationSize="5" easing="linear" speed="300" :autoplay="true" :autoplayTimeout="3000" :autoplayHoverPause="true" :scrollPerPage="false" :perPageCustom="[[100, 1],[576, 2],[768,3],[992,3]]">
                <slide>
                    <div class="rf-fill-align-center justify-content-center">
                        <b-img fluid-grow blank-color="#777" src="img/temp/slider_thumbnail_01.jpg"></b-img>
                        <a class="btn btn-sm btn-outline-dark" href="#sjsk" style="margin-top:10px;">Learn More</a>
                    </div>
                </slide>
                <slide>
                    <div class="rf-fill-align-center justify-content-center">
                        <b-img fluid-grow blank-color="#777" src="img/temp/slider_thumbnail_02.jpg"></b-img>
                        <a class="btn btn-sm btn-outline-dark" href="#sjsk" style="margin-top:10px;">Learn More</a>
                    </div>
                </slide>
                <slide>
                    <div class="rf-fill-align-center justify-content-center">
                        <b-img fluid-grow blank-color="#777" src="img/temp/slider_thumbnail_03.jpg"></b-img>
                        <a class="btn btn-sm btn-outline-dark" href="#sjsk" style="margin-top:10px;">Learn More</a>
                    </div>
                </slide>
                <slide>
                    <div class="rf-fill-align-center justify-content-center">
                        <b-img fluid-grow blank-color="#777" src="img/temp/slider_thumbnail_04.jpg"></b-img>
                        <a class="btn btn-sm btn-outline-dark" href="#sjsk" style="margin-top:10px;">Learn More</a>
                    </div>
                </slide>
                <slide>
                    <div class="rf-fill-align-center justify-content-center">
                        <b-img fluid-grow blank-color="#777" src="img/temp/slider_thumbnail_05.jpg"></b-img>
                        <a class="btn btn-sm btn-outline-dark" href="#sjsk" style="margin-top:10px;">Learn More</a>
                    </div>
                </slide>
                <slide>
                    <div class="rf-fill-align-center justify-content-center">
                        <b-img fluid-grow blank-color="#777" src="img/temp/slider_thumbnail_06.jpg"></b-img>
                        <a class="btn btn-sm btn-outline-dark" href="#sjsk" style="margin-top:10px;">Learn More</a>
                    </div>
                </slide>
                <slide>
                    <div class="rf-fill-align-center justify-content-center">
                        <b-img fluid-grow blank-color="#777" src="img/temp/slider_thumbnail_07.jpg"></b-img>
                        <a class="btn btn-sm btn-outline-dark" href="#sjsk" style="margin-top:10px;">Learn More</a>
                    </div>
                </slide>
                <slide>
                    <div class="rf-fill-align-center justify-content-center">
                        <b-img fluid-grow blank-color="#777" src="img/temp/slider_thumbnail_08.jpg"></b-img>
                        <a class="btn btn-sm btn-outline-dark" href="#sjsk" style="margin-top:10px;">Learn More</a>
                    </div>
                </slide>
            </carousel>
        </b-col>
    </b-row>
</template>

<script>
    import {mapState} from 'vuex';
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        props: {
            currentSlotId: String,
            blockInfo: Object
        },
        computed: {
            ...mapState(['blockDataChanged'])
        },
        data() {
            return {
                switchToReal: false,
                title: false
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
                console.log("Processing CT_SLIDER_THUMBNAIL: " + block.id)
                console.log(block)
                let properties = block.properties

                if (properties.title) {
                    this.title = properties.title
                }


                this.switchToReal = true
            }
        },
        mounted() {
            let url = this.$store.state.api.getBlockData + this.blockInfo.id
            let params = {
                url: url,
                id: this.blockInfo.id
            }
            this.$store.dispatch('loadBlockData', params)
        },
        watch: {
            blockDataChanged(blockDataChanged) {
                if (this.$store.state.blockDataChanged == this.blockInfo.id) {
                    let block = this.$store.getters.blockData[this.blockInfo.id]
                    this.processData(block)
                }
            }
        },
    }
</script>

<style lang="scss">
    .CT_SLIDER_THUMBNAIL {
        .VueCarousel-pagination {
            .VueCarousel-dot-container {
                margin-top:0;
            }
            button {
                margin-top:0;
            }
        }
        margin:0;
        padding:0;
        padding-bottom: 15px;
        padding-top:15px;
    }
</style>