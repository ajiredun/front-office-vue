<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">Link</b-nav-item>
                    <b-nav-item href="#" disabled>Disabled</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <b-alert show>Default Alert</b-alert>

        <b-alert variant="success" show>Success Alert</b-alert>

        <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
            Dismissible Alert!
        </b-alert>

        <b-alert
                :show="dismissCountDown"
                dismissible
                variant="warning"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged"
        >
            <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
            <b-progress
                    variant="warning"
                    :max="dismissSecs"
                    :value="dismissCountDown"
                    height="4px"
            ></b-progress>
        </b-alert>

        <b-button @click="showAlert" variant="info" class="m-1">
            Show alert with count-down timer
        </b-button>
        <b-button @click="showDismissibleAlert=true" variant="info" class="m-1">
            Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
        </b-button>

        <b-button variant="primary">Primary</b-button>
        <b-button variant="secondary">Secondary</b-button>
        <b-button variant="success">Success</b-button>
        <b-button variant="danger">Danger</b-button>
        <b-button variant="warning">Warning</b-button>
        <b-button variant="info">Info</b-button>
        <b-button variant="light">Light</b-button>
        <b-button variant="dark">Dark</b-button>



        <div>
            <b-button variant="outline-primary">Primary</b-button>
            <b-button variant="outline-secondary">Secondary</b-button>
            <b-button variant="outline-success">Success</b-button>
            <b-button variant="outline-danger">Danger</b-button>
            <b-button variant="outline-warning">Warning</b-button>
            <b-button variant="outline-info">Info</b-button>
            <b-button variant="outline-light">Light</b-button>
            <b-button variant="outline-dark">Dark</b-button>
        </div>
        <div>
            <b-button pill>Button</b-button>
            <b-button pill variant="primary">Button</b-button>
            <b-button pill variant="outline-secondary">Button</b-button>
            <b-button pill variant="success">Button</b-button>
            <b-button pill variant="outline-danger">Button</b-button>
            <b-button pill variant="info">Button</b-button>
        </div>
        <div>
            <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
            >
                <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>

                <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
        </div>

    </div>

</template>