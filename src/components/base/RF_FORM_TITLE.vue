<template>
    <b-row no-gutters class="rf-title-margin">
        <b-col md="12" :class="'rf-block-form-title '+ rfvariant">
            <h2 class="title">{{ title }}</h2>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: 'rf-form-title',
        props: ['title', 'rfvariant'],
        data() {
            return {
            };
        },
    }
</script>

<style lang="scss">
    .rf-block-form-title {
        padding-top: 15px;
        font-size: 30px;
        padding-bottom: 10px;
        text-align: center;
        box-shadow: 0 6px 6px #c1c1c1;
        border-radius: 10px;
    }
</style>