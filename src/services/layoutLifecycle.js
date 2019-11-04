
import GlobalComponents from '@/globalComponents.js'

export default {
    components: {
        ...GlobalComponents
    },
    pwa: {
        /*workboxOptions: {
            skipWaiting: true
        }*/
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
                { vmid: 'description', name: 'description', content: this.pageInfo.seoMetaDescription },
                { vmid: 'author', name: 'author', content: this.pageInfo.seoAuthor },
                { vmid: 'keywords', name: 'keywords', content: this.pageInfo.seoKeywords },
                { vmid: 'robots', name: 'robots', content: allowRobot }
            ]
        }
    },
    data() {

        this.$store.dispatch('setPageInfo',this.pageInfo)

        return {

        };
    }
};