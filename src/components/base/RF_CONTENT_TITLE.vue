<template>
    <b-row>
        <b-col md="12" :class="'rf-block-content-title '+ rfvariant">
            <h2 class="title">{{ title }}</h2>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: 'rf-content-title',
        props: ['title', 'rfvariant'],
        data() {
            return {
            };
        },
    }
</script>

<style lang="scss">
    .rf-block-content-title {
        text-align: center;
    }
</style>