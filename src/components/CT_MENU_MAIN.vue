<template>
    <div v-if="switchToReal" class="CT_MENU_MAIN">
        <b-navbar toggleable="lg" sticky="true" type="light" variant="white">
            <b-navbar-brand to="/">
                <b-img class="nav-logo" blank-color="#777" src="img/logo.png"></b-img>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav align="center">
                    <b-nav-item to="/about-us">About us</b-nav-item>
                    <b-nav-item to="/login">Login</b-nav-item>
                    <b-nav-item to="/create">Create Account</b-nav-item>
                    <b-nav-item to="/profile">My Account</b-nav-item>
                    <b-nav-item to="/about-us">{{ blockInfo.contentType }}</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto" justified>
                    <!--<b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>-->

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em><i class="fas fa-user fa-2x"></i></em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
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

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav align="center">
                    <b-nav-item to="/about-us">About us</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto" justified>
                    <!--<b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>-->

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em><i class="fas fa-user fa-2x"></i></em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        props: {
            currentSlotId: String,
            blockInfo: Object
        },
        computed: {
            ...mapState(['blockDataChanged'])
        },
        data() {
            return {
                switchToReal: false
            };
        },
        methods: {
            processData(block) {
                this.switchToReal = true
            }
        },
        mounted() {
            let url = this.$store.state.api.getBlockData + this.blockInfo.id
            let params = {
                url: url,
                id: this.blockInfo.id
            }
            this.$store.dispatch('loadBlockData', params)
        },
        watch: {
            blockDataChanged(blockDataChanged) {
                if (this.$store.state.blockDataChanged == this.blockInfo.id) {
                    let block = this.$store.getters.blockData[this.blockInfo.id]
                    this.processData(block)
                }
            }
        },
    }
</script>

<style lang="scss">
    .CT_MENU_MAIN {
        .nav-logo {
            width: 50px;
            height: 50px;
        }
        .navbar-toggler {
            border: none;
        }
        .navbar {
            margin-top: 5px;
            margin-bottom: 15px;
            box-shadow: 200px -20px 50px #2866B3;
        }
    }
</style>