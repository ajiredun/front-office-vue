<template>
    <div :id="'CT_CREATE_USER_ACCOUNT_'+blockInfo.id" v-if="switchToReal" class="CT_CREATE_USER_ACCOUNT">

    </div>
    <div v-else class="CT_CREATE_USER_ACCOUNT">
        <b-col md="12" v-if="title">
            <div class="mockup-text-line" style="height:25px;"></div>
        </b-col>
        <b-col md="12">
            <div class="mockup-paragraph">
                <div class="mockup-text-line"></div>
                <div class="mockup-text-line"></div>
                <div class="mockup-text-line"></div>
                <div class="mockup-text-line"></div>
                <div class="mockup-text-line"></div>
                <div class="mockup-text-line"></div>
                <div class="mockup-text-line"></div>
                <div class="mockup-text-line"></div>
                <div class="mockup-text-line"></div>
            </div>
        </b-col>
    </div>
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
                switchToReal: false
            };
        },
        methods: {
            processData(block) {
                console.log("Processing CT_CREATE_USER_ACCOUNT block: " + block.id)
                console.log(block)

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
    .CT_CREATE_USER_ACCOUNT {

    }
</style>