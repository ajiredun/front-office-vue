<template>
    <div    v-if="switchToReal"
            :id="'CT_MENU_SIDE_'+blockInfo.id"
            :class="'CT_MENU_SIDE ' + displays">

        <b-row v-if="title">
            <b-col md="12" class="rf-block-title rf-primary">
                <h2 class="title">{{ title }}</h2>
            </b-col>
        </b-row>

        <b-row no-gutters>
            <b-col md="12">
                <div class="wrapper">
                    <!-- Sidebar -->
                    <nav id="sidebar">
                        <div class="sidebar-header">
                            <h3>Bootstrap Sidebar</h3>
                        </div>

                        <ul class="list-unstyled components">
                            <p>Dummy Heading</p>
                            <li class="active">
                                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                                <ul class="collapse list-unstyled" id="homeSubmenu">
                                    <li>
                                        <a href="#">Home 1</a>
                                    </li>
                                    <li>
                                        <a href="#">Home 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Home 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                                <ul class="collapse list-unstyled" id="pageSubmenu">
                                    <li>
                                        <a href="#">Page 1</a>
                                    </li>
                                    <li>
                                        <a href="#">Page 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Page 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Portfolio</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </nav>

                </div>
            </b-col>
        </b-row>
    </div>
    <div v-else :id="'MOCKUP_CT_MENU_SIDE_'+blockInfo.id"  class="CT_MENU_SIDE">
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
    import axios from 'axios'
    import componentLifecycle from '@/services/componentLifecycle.js'

    export default {
        extends: componentLifecycle,
        data() {
            return {
            };
        },
        methods: {
            processData(block) {
                console.log("Processing CT_MENU_SIDE block: " + block.id)
                console.log(block)
                let properties = block.properties
                this.mapBasicBlockProperties(properties)


                //do all the necessary and then switch
                this.switchToReal = true
            }
        }
    }
</script>

<style lang="scss">
    .CT_MENU_SIDE {

    }
</style>