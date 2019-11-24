<template>
    <div v-if="switchToReal"
         :id="'CT_MENU_CATEGORY_'+blockInfo.id"
         :class="'CT_MENU_CATEGORY ' + displays + ' ' + classPadding">

        <b-row v-if="title">
            <b-col md="12" class="rf-block-title rf-primary">
                <h4 class="title">{{ title }}</h4>
            </b-col>
        </b-row>

        <b-row no-gutters>
            <b-col md="12">
                <div  v-for="item in menuItems">
                    <b-dropdown  v-if="hasChildren(item)"  :text="item.routeInfo.name" right  variant="secondary" class="rf-link-menu">
                        <b-dropdown-item v-for="subItem in item.children"
                                         :title="subItem.routeInfo.name"
                                         :to="subItem.routeInfo.route + subItem.routeInfo.routeParams">
                            {{ subItem.routeInfo.name }}
                        </b-dropdown-item>
                    </b-dropdown>
                    <b-button v-else variant="secondary" :to="item.routeInfo.route + item.routeInfo.routeParams" class="rf-link-menu">{{ item.routeInfo.name }}</b-button>
                </div>
            </b-col>
        </b-row>
    </div>
    <div v-else :id="'MOCKUP_CT_MENU_CATEGORY_'+blockInfo.id" class="CT_MENU_CATEGORY">
        <b-row>
            <b-col md="12">
                <div class="mockup-container">
                    <div class="mockup-text-line"><p class="simple-paragraph">{{ error_info }}</p></div>
                    <div class="mockup-text-line"></div>
                    <div class="mockup-text-line"></div>
                    <div class="mockup-text-line"></div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import componentLifecycle from '@/services/componentLifecycle.js'

    export default {
        extends: componentLifecycle,
        data() {
            return {
                menuItems: false,
            };
        },
        methods: {
            processData(block) {
                console.log("Processing CT_MENU_CATEGORY block: " + block.id)
                console.log(block)
                let properties = block.properties
                this.mapBasicBlockProperties(properties)

                let pages = this.$store.getters.getPages
                let menu = properties.menu.properties
                let menuItems = []
                let isUserAlive = this.isAuthenticated
                menu.forEach(function (entry) {
                    let routeInfo = false

                    let pageId = entry.id

                    let show = false
                    if (isUserAlive) {
                        if (entry.authenticated) {
                            show = true
                        }
                    } else {
                        if (entry.public) {
                            show = true
                        }
                    }

                    if (show) {
                        if (pageId == 'virtual_logo') {
                        } else if (pageId == 'virtual_user_account') {
                        } else {
                            pages.forEach(function (page) {
                                if (page.route == pageId) {
                                    routeInfo = {
                                        route: page.route,
                                        routeParams: '',
                                        id:page.id
                                    }

                                    if (page.seoTitle) {
                                        routeInfo.name = page.seoTitle
                                    } else {
                                        routeInfo.name = page.name
                                    }

                                    if (page.routeParams) {
                                        routeInfo.routeParams = page.routeParams
                                    }
                                }
                            })
                        }

                        if (entry.children.length > 0 ){
                            let children = entry.children
                            let childrenItem = []
                            children.forEach(function (entryL) {
                                let routeInfoL = false
                                let pageIdL = entryL.id

                                let subShow = false
                                if (isUserAlive) {
                                    if (entryL.authenticated) {
                                        subShow = true
                                    }
                                } else {
                                    if (entryL.public) {
                                        subShow = true
                                    }
                                }

                                if (subShow) {
                                    pages.forEach(function (page) {
                                        if (page.route == pageIdL) {
                                            routeInfoL = {
                                                route: page.route,
                                                routeParams: '',
                                                id:page.id
                                            }

                                            if (page.seoTitle) {
                                                routeInfoL.name = page.seoTitle
                                            } else {
                                                routeInfoL.name = page.name
                                            }

                                            if (page.routeParams) {
                                                routeInfoL.routeParams = page.routeParams
                                            }
                                        }
                                    })

                                    if (routeInfoL) {
                                        entryL.routeInfo = routeInfoL
                                        childrenItem.push(entryL)
                                    }
                                }

                            })

                            entry.children = childrenItem
                        }

                        if (routeInfo) {
                            entry.routeInfo = routeInfo
                            let routeInfoId = routeInfo.id

                            menuItems.push(entry)
                        }
                    }

                })
                this.menuItems = menuItems

                console.log(this.menuItems)
                this.switchToReal = true
            },
            hasChildren(node) {
                if (node.children.length > 0) {
                    return true
                }

                return false
            }
        }
    }
</script>

<style lang="scss">
    .CT_MENU_CATEGORY {
        margin:0;
        background: #343A40;
        .dropdown button.btn {
            text-align: left;
        }
        .rf-link-menu {
            width:100%;
            text-align: left;
        }
        .dropdown-menu {
            border:0;
            border-bottom:2px solid #2866B3;
        }
    }
</style>