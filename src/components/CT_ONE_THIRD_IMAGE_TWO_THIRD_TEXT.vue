<template>
    <b-row v-if="switchToReal" class="CT_ONE_THIRD_IMAGE_TWO_THIRD_TEXT">
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
                image : false,
                side: 'left',
                text: false,
                title: false
            };
        },
        methods: {
            processData(block) {
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

                if (properties.image) {
                    this.image = this.$store.state.backOfficeUrl+properties.image
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