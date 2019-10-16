<template>
    <div class="Main">
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>L_LAYOUT_01 component</h1>
    </div>
</template>

<script>
    import router from '@/router'

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
        }
    }
</script>
