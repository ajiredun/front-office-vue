<template>
    <b-container fluid class="L_LAYOUTS L_LAYOUT_05">
        <b-row no-gutters>
            <b-col md="12">
                <rf-slot slotCode="S_SLOT_01"/>
                <!--<ct-main-menu/>-->
            </b-col>
        </b-row>
        <b-row no-gutters class="content-rows">
            <b-col md="3">
                <rf-slot slotCode="S_SLOT_02"/>
            </b-col>
            <b-col md="3">
                <rf-slot slotCode="S_SLOT_03"/>
            </b-col>
            <b-col md="6">
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
    import router from '@/router'
    import GlobalComponents from '@/globalComponents.js'

    export default {
        name: 'L_LAYOUT_05',
        components: {
            ...GlobalComponents
        },
        pwa: {
            workboxOptions: {
                skipWaiting: true
            }
        },
        props: ['pageInfo'],
        metaInfo() {

            let pageTitle = this.pageInfo.name;
            if (this.pageInfo.seoTitle != null) {
                pageTitle = this.pageInfo.seoTitle
            }

            let allowRobot = this.pageInfo.seoAllowRobot
            if (allowRobot) {
                allowRobot = 'index,follow'
            } else {
                allowRobot = 'noindex,nofollow'
            }

            return {
                // if no subcomponents specify a metaInfo.title, this title will be used
                title: pageTitle,
                // all titles will be injected into this template
                titleTemplate: '%s | ' + this.$store.state.siteName,
                meta: [
                    {vmid: 'description', name: 'description', content: this.pageInfo.seoMetaDescription},
                    {vmid: 'author', name: 'author', content: this.pageInfo.seoAuthor},
                    {vmid: 'keywords', name: 'keywords', content: this.pageInfo.seoKeywords},
                    {vmid: 'robots', name: 'robots', content: allowRobot}
                ]
            }
        },
        data() {

            this.$store.dispatch('setPageInfo', this.pageInfo)

            let path = this.$route.path;
            //console.log(path)

            let params = this.$route.params;
            //console.log(params)

            let query = this.$route.query;
            //console.log(query)

            return {};
        }
    }
</script>
