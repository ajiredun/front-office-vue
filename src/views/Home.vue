<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'home',
        metaInfo: {
            // if no subcomponents specify a metaInfo.title, this title will be used
            title: 'Home TITLE',
            // all titles will be injected into this template
            titleTemplate: '%s | My Awesome Webapp'
        },
        mounted() {
            //this.$store.dispatch('loadVisualPack')
        },
        components: {
            HelloWorld
        }
    }
</script>
