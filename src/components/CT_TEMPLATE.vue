<template>
    <div :id="'CT_TEMPLATE_'+blockInfo.id" v-if="switchToReal" class="CT_TEMPLATE">

    </div>
    <div v-else class="CT_TEMPLATE">

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
                switchToReal: false,
                title: false,
            };
        },
        methods: {
            processData(block) {
                console.log("Processing Half Image Half Text block: " + block.id)
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
    .CT_TEMPLATE {

    }
</style>