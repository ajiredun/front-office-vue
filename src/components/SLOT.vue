<template>
    <div :id="slotCodeId" :ref="slotCodeId"></div>
</template>

<script>
    import Vue from 'vue'
    import GlobalComponents from '@/globalComponents.js'

    export default {
        name: 'rf-slot',
        components: {
            ...GlobalComponents
        },
        props: {
            slotCode: String
        },
        data() {
            let slotCodeId = this.slotCode + "_" + this.$store.state.pageInfo.id

            return {
                slotCode: this.slotCode,
                slotCodeId,
                availableComponents: GlobalComponents
            };
        },
        mounted() {
            let currentSlotCode = this.slotCode
            let currentSlotId = this.slotCodeId

            let blocks = {}

            this.$store.state.pageInfo.blocks.forEach(function (block) {
                if (block.slot == currentSlotCode) {
                    blocks[block.blockOrder] = block;
                }
            });

            for (var key in blocks) {
                if (!blocks.hasOwnProperty(key)) continue
                var obj = blocks[key]
                for (var prop in obj) {
                    if (!obj.hasOwnProperty(prop)) continue;
                    if (prop == "contentType") {
                        //we create the content type
                        var ComponentClass = Vue.extend(this.availableComponents[obj[prop]])
                        var instance = new ComponentClass({
                            store: this.$store,
                            parent: this.$parent,
                            propsData: { currentSlotId, blockInfo: obj }
                        })
                        instance.$mount()
                        this.$refs[currentSlotId].appendChild(instance.$el)
                    }
                }
            }
        },
        methods: {
            onClick() {
                alert('Hello')
            }
        }
    }
</script>