<template>
    <div :ref="slotCode"></div>
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

            let currentSlotCode = this.slotCode
            let blocks = {}
            this.$store.state.pageInfo.blocks.forEach(function(block){
                if (block.slot == currentSlotCode) {
                    blocks[block.blockOrder] = block;
                }
            });


            console.log(blocks)
            /*blocks.forEach(function(block){
                console.log(block.contentType)
            })*/

            for (var key in blocks) {
                if (!blocks.hasOwnProperty(key)) continue
                var obj = blocks[key]
                for (var prop in obj) {
                    if (!obj.hasOwnProperty(prop)) continue;
                    if (prop == "contentType") {
                        //we create the content type
                        let componentImport = import( '@/components/'+obj[prop]+'.vue')

                        var ComponentClass = Vue.extend(componentImport)
                        var instance = new ComponentClass()
                        instance.$mount()
                        console.log(this.$refs)
                        console.log(currentSlotCode)
                        this.$refs.S_SLOT_01.appendChild(instance.$el)
                    }
                }
            }

            return {
                slotCode : currentSlotCode
            };
        }
    }
</script>