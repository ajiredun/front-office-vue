<template>
    <b-container fluid class="L_LAYOUTS NotFound">
        <b-row no-gutters>
            <b-col md="12" style="text-align: center;">
                <br/><br/>
                <img alt="Vue logo" :src="this.$store.state.frontOfficeUrl +'/img/logo.png'" style="height:75px;">
                <br/><br/>
                <h4>Ooops! We are getting some difficulty to find what you are searching.</h4>
                <br/><br/>
                <p>Try contacting us directly!</p>
            </b-col>
        </b-row>
    </b-container>

</template>

<script>
    import componentLifecycle from '@/services/componentLifecycle.js'

    export default {
        name: 'NotFound',
        extends: componentLifecycle,
        data: () => {
            return {

            };
        },
        components: {

        }
    }
</script>
