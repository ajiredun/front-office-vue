<template>
    <b-row :id="'CT_ONE_THIRD_IMAGE_TWO_THIRD_TEXT'+blockInfo.id"  v-if="switchToReal" :class="'CT_ONE_THIRD_IMAGE_TWO_THIRD_TEXT ' + displays">
        <b-col  class="rf-block-title"  md="12" v-if="title">
            <h2 class="title">{{title}}</h2>
        </b-col>
        <b-col v-if="side=='left'" md="4">
            <b-img fluid-grow :src="image"></b-img>
        </b-col>
        <b-col md="8" v-html="text">

        </b-col>
        <b-col v-if="side=='right'" md="4">
            <b-img fluid-grow :src="image"></b-img>
        </b-col>
    </b-row>
    <b-row v-else class="CT_ONE_THIRD_IMAGE_TWO_THIRD_TEXT">
        <b-col md="12" v-if="title">
            <div class="mockup-text-line" style="height:25px;"></div>
        </b-col>
        <b-col md="4">
            <div class="mockup-img"></div>
        </b-col>
        <b-col md="8">
            <div class="mockup-paragraph">
                <div class="mockup-text-line"></div>
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
    import {mapState} from 'vuex';

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
                displays: '',
                image : false,
                side: 'left',
                text: false,
                title: false
            };
        },
        methods: {
            processData(block) {
                console.log("Processing One third Image and Two third Text block: " + block.id)
                console.log(block)
                let properties = block.properties

                if (properties.title) {
                    this.title = properties.title
                }

                if (properties.side) {
                    this.side = properties.side
                }

                if (properties.text) {
                    this.text = properties.text
                }

                if (properties.displays) {
                    this.displays = properties.displays.join(' ')
                }

                if (properties.image) {
                    this.image = properties.image
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
    .CT_ONE_THIRD_IMAGE_TWO_THIRD_TEXT {
        margin:0;
        padding:0;
        padding-bottom: 15px;
        padding-top:15px;
    }
</style>