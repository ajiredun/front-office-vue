<template>
    <div :id="'CT_TEMPLATE_'+blockInfo.id" v-if="switchToReal" :class="'CT_TEMPLATE ' + displays">
        <b-row no-gutters>
            <b-col md="12" class="rf-block-title rf-primary" v-if="title">
                <h2 class="title">{{title}}</h2>
            </b-col>
        </b-row>
        <b-row no-gutters>

        </b-row>
    </div>
    <b-row v-else class="CT_TEMPLATE">
        <b-col md="12">
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
                title: false,
                displays: '',
            };
        },
        methods: {
            processData(block) {
                console.log("Processing Half Image Half Text block: " + block.id)
                console.log(block)
                let properties = block.properties

                if (properties.title) {
                    this.title = properties.title
                }

                if (properties.displays) {
                    this.displays = properties.displays.join(' ')
                }

                //do all the necessary and then change the response
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
    .CT_TEMPLATE {

    }
</style>