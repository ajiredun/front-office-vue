<template>
    <CT_MENU_MAIN />
    <b-container class="bv-example-row">
        <b-row class="justify-content-md-center">
            <b-col col lg="2">1 of 3</b-col>
            <b-col cols="12" md="auto">Variable width content</b-col>
            <b-col col lg="2">3 of 3</b-col>
        </b-row>

        <b-row>
            <b-col>1 of 3</b-col>
            <b-col cols="12" md="auto">Variable width content</b-col>
            <b-col col lg="2">3 of 3</b-col>
        </b-row>
    </b-container>
</template>

<script>
    import router from '@/router'
    import CT_MENU_MAIN from '@/components/CT_MENU_MAIN.vue'

    export default {
        name: 'L_LAYOUT_01',
        data() {
            let path = this.$route.path;
            console.log(path)

            let params = this.$route.params;
            console.log(params)

            let query = this.$route.query;
            console.log(query)

            return {

            };
        },
        components: {
            CT_MENU_MAIN
        }
    }
</script>
