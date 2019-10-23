<template>
    <b-container fluid class="L_LAYOUTS L_LAYOUT_04">
        <b-row no-gutters>
            <b-col md="12">
                <rf-slot slotCode="S_SLOT_01"/>
                <!--<ct-main-menu/>-->
            </b-col>
        </b-row>
        <b-row no-gutters class="content-rows">
            <b-col md="6">
                <rf-slot slotCode="S_SLOT_02"/>
            </b-col>
            <b-col md="3">
                <rf-slot slotCode="S_SLOT_03"/>
            </b-col>
            <b-col md="3">
                <rf-slot slotCode="S_SLOT_04"/>
            </b-col>
        </b-row>
        <b-row no-gutters>
            <b-col md="12">
                <rf-slot slotCode="S_SLOT_05"/>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import layoutLifecycle from '@/services/layoutLifecycle.js'

    export default {
        name: 'L_LAYOUT_04',
        extends: layoutLifecycle,
    }
</script>
