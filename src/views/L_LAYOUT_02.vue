<template>
    <b-container fluid class="L_LAYOUTS L_LAYOUT_02">
        <b-row no-gutters>
            <b-col md="12">
                <rf-slot slotCode="S_SLOT_01"/>
                <!--<ct-main-menu/>-->
            </b-col>
        </b-row>
        <b-row no-gutters class="content-rows">
            <b-col md="6">
                <rf-slot slotCode="S_SLOT_02" />
            </b-col>
            <b-col md="6">
                <rf-slot  slotCode="S_SLOT_03" />
                <!--<ct-half-image-half-text/>-->
            </b-col>
        </b-row>
        <b-row no-gutters>
            <b-col md="12">
                <rf-slot  slotCode="S_SLOT_04" />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import layoutLifecycle from '@/services/layoutLifecycle.js'

    export default {
        name: 'L_LAYOUT_02',
        extends: layoutLifecycle,
    }
</script>
