<template>
    <div
            v-if="switchToReal"
            :class="'CT_MENU_MAIN ' + displays">

        <b-navbar toggleable="lg" sticky="true" type="light" variant="white">
            <b-navbar-brand
                    v-if="menuVirtualItems.virtual_logo"
                    :title="menuVirtualItems.virtual_logo.routeInfo.name"
                    :to="menuVirtualItems.virtual_logo.routeInfo.route+menuVirtualItems.virtual_logo.routeInfo.routeParams">
                <b-img class="nav-logo" blank-color="#777"
                       :src="this.$store.state.frontOfficeUrl +'/img/logo.png'"></b-img>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav align="center" v-for="item in menuItems">
                    <b-nav-item-dropdown v-if="hasChildren(item)">
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            {{ item.routeInfo.name }}
                        </template>

                        <b-dropdown-item
                                v-for="subItem in item.children"
                                :title="subItem.routeInfo.name"
                                :to="subItem.routeInfo.route + subItem.routeInfo.routeParams">
                            {{ subItem.routeInfo.name }}
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item
                            v-else
                            :title="item.routeInfo.name"
                            :to="item.routeInfo.route + item.routeInfo.routeParams">
                        {{ item.routeInfo.name }}
                    </b-nav-item>

                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto" justified>
                    <!--<b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>-->

                    <b-nav-item-dropdown v-if="menuVirtualItems.virtual_user_account" right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <img v-if="isAuthenticated" :src="'https://robohash.org/aj'+getCurrentUserInfo.id+'?set=set4&size=40x40'" :title="getCurrentUserInfo.name" />
                            <em v-else><i class="fas fa-user fa-2x"></i></em>
                        </template>

                        <b-dropdown-item
                                v-for="subItem in menuVirtualItems.virtual_user_account.children"
                                :title="subItem.routeInfo.name"
                                :to="subItem.routeInfo.route + subItem.routeInfo.routeParams">
                            {{ subItem.routeInfo.name }}
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
    <div v-else class="CT_MENU_MAIN">
        <b-navbar toggleable="lg" sticky="true" type="light" variant="white">
            <b-navbar-brand to="/">
                <b-img class="nav-logo" blank-color="#777" src="img/logo.png"></b-img>
            </b-navbar-brand>

        </b-navbar>
    </div>
</template>

<script>
    import componentLifecycle from '@/services/componentLifecycle.js'

    export default {
        extends: componentLifecycle,
        data() {
            return {
                menuItems: false,
                menuVirtualItems: false,
            };
        },
        computed: {
        },
        methods: {
            processData(block) {
                let properties = block.properties
                this.mapBasicBlockProperties(properties)

                let pages = this.$store.getters.getPages
                let menu = properties.menu.properties
                let menuItems = []
                let virtualMenuItems = []
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
                            pages.forEach(function (page) {
                                if (page.route == "/") {

                                    routeInfo = {
                                        route: page.route,
                                        routeParams: '',
                                        id: 'virtual_logo'
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
                        } else if (pageId == 'virtual_user_account') {
                            routeInfo = {
                                id: 'virtual_user_account'
                            }
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

                            if (routeInfo.id == "virtual_user_account" || routeInfo.id == "virtual_logo") {
                                virtualMenuItems[routeInfoId] = entry
                            } else {
                                menuItems.push(entry)
                            }
                        }
                    }

                })
                this.menuItems = menuItems
                this.menuVirtualItems = virtualMenuItems
                this.switchToReal = true
            },
            hasChildren(node) {
                if (node.children.length > 0) {
                    return true
                }

                return false
            }
        },
        watch: {
            reloadMenu(reloadMenu) {
                this.processData(block)
            }
        }
    }
</script>

<style lang="scss">
    .CT_MENU_MAIN {
        .nav-logo {
            width: 150px;
            max-height: 60px;
        }

        .navbar-toggler {
            border: none;
        }

        .navbar {
            box-shadow: 0 6px 15px gainsboro;
            border-bottom:3px solid #2866B3;
        }
    }
</style>