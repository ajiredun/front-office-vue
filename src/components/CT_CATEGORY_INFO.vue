<template>
    <div    v-if="switchToReal"
            :id="'CT_CATEGORY_INFO_'+blockInfo.id"
            :class="'CT_CATEGORY_INFO ' + displays + ' ' + classPadding">
        <b-row>
            <b-col md="12" class="rf-block-title rf-primary" style="text-align: center;">
                <h1 class="title">{{category.name}}</h1>
            </b-col>
        </b-row>
        <br/>
        <b-row no-gutters>
            <b-col sm="12" md="6" xl="4" class="category-sub-thumb margin-top-mobile" v-for="cat in category.objectCategories">
                <a :href="frontOfficeUrl + cat.slug" :title="cat.name">
                    <b-img-lazy v-if="cat.online" fluid-grow blank-color="#777" :src="cat.image" class="display-image"></b-img-lazy>
                </a>
            </b-col>
        </b-row>
        <br/><br/><br/><br/>

        <b-row no-gutters>
            <b-col sm="6" md="4" lg="3">
                <b-card
                        img-src="https://www.geewiz.co.za/6736-large_default/makerbot-replicator-z18-3d-printer.jpg"
                        img-alt="Lol"
                        img-top
                        class="product-card">
                    <b-card-title><a href="#">3D Printer Lol</a></b-card-title>
                    <b-card-sub-title class="mb-2">Makerbot</b-card-sub-title>

                    <b-button href="#" align="right" class="btn-ask-a-quote float-right" variant="outline-primary" title="Ask a quote"><span class="fab fa-quinscape"></span> &nbsp; Quote Me</b-button>
                </b-card>
            </b-col>
            <b-col sm="6" md="4" lg="3">
                <b-card
                        img-src="https://www.geewiz.co.za/6736-large_default/makerbot-replicator-z18-3d-printer.jpg"
                        img-alt="Lol"
                        img-top
                        class="product-card">
                    <b-card-title><a href="#">3D Printer Lol</a></b-card-title>
                    <b-card-sub-title class="mb-2">Makerbot</b-card-sub-title>

                    <b-button href="#" align="right" class="btn-ask-a-quote float-right" variant="outline-primary" title="Ask a quote"><span class="fab fa-quinscape"></span> &nbsp; Quote Me</b-button>
                </b-card>
            </b-col>
            <b-col sm="6" md="4" lg="3">
                <b-card
                        img-src="https://www.geewiz.co.za/6736-large_default/makerbot-replicator-z18-3d-printer.jpg"
                        img-alt="Lol"
                        img-top
                        class="product-card">
                    <b-card-title><a href="#">3D Printer Lol</a></b-card-title>
                    <b-card-sub-title class="mb-2">Makerbot</b-card-sub-title>

                    <b-button href="#" align="right" class="btn-ask-a-quote float-right" variant="outline-primary" title="Ask a quote"><span class="fab fa-quinscape"></span> &nbsp; Quote Me</b-button>
                </b-card>
            </b-col>
            <b-col sm="6" md="4" lg="3">
                <b-card
                        img-src="https://www.geewiz.co.za/6736-large_default/makerbot-replicator-z18-3d-printer.jpg"
                        img-alt="Lol"
                        img-top
                        class="product-card">
                    <b-card-title><a href="#">3D Printer Lol</a></b-card-title>
                    <b-card-sub-title class="mb-2">Makerbot</b-card-sub-title>

                    <b-button href="#" align="right" class="btn-ask-a-quote float-right" variant="outline-primary" title="Ask a quote"><span class="fab fa-quinscape"></span> &nbsp; Quote Me</b-button>
                </b-card>
            </b-col>
            <b-col sm="6" md="4" lg="3">
                <b-card
                        img-src="https://www.geewiz.co.za/6736-large_default/makerbot-replicator-z18-3d-printer.jpg"
                        img-alt="Lol"
                        img-top
                        class="product-card">
                    <b-card-title><a href="#">3D Printer Lol</a></b-card-title>
                    <b-card-sub-title class="mb-2">Makerbot</b-card-sub-title>

                    <b-button href="#" align="right" class="btn-ask-a-quote float-right" variant="outline-primary" title="Ask a quote"><span class="fab fa-quinscape"></span> &nbsp; Quote Me</b-button>
                </b-card>
            </b-col>
            <b-col sm="6" md="4" lg="3">
                <b-card
                        img-src="https://www.geewiz.co.za/6736-large_default/makerbot-replicator-z18-3d-printer.jpg"
                        img-alt="Lol"
                        img-top
                        class="product-card">
                    <b-card-title><a href="#">3D Printer Lol</a></b-card-title>
                    <b-card-sub-title class="mb-2">Makerbot</b-card-sub-title>

                    <b-button href="#" align="right" class="btn-ask-a-quote float-right" variant="outline-primary" title="Ask a quote"><span class="fab fa-quinscape"></span> &nbsp; Quote Me</b-button>
                </b-card>
            </b-col>
            <b-col sm="6" md="4" lg="3">
                <b-card
                        img-src="https://www.geewiz.co.za/6736-large_default/makerbot-replicator-z18-3d-printer.jpg"
                        img-alt="Lol"
                        img-top
                        class="product-card">
                    <b-card-title><a href="#">3D Printer Lol</a></b-card-title>
                    <b-card-sub-title class="mb-2">Makerbot</b-card-sub-title>

                    <b-button href="#" align="right" class="btn-ask-a-quote float-right" variant="outline-primary" title="Ask a quote"><span class="fab fa-quinscape"></span> &nbsp; Quote Me</b-button>
                </b-card>
            </b-col>
            <b-col sm="6" md="4" lg="3">
                <b-card
                        img-src="https://www.geewiz.co.za/6736-large_default/makerbot-replicator-z18-3d-printer.jpg"
                        img-alt="Lol"
                        img-top
                        class="product-card">
                    <b-card-title><a href="#">3D Printer Lol</a></b-card-title>
                    <b-card-sub-title class="mb-2">Makerbot</b-card-sub-title>

                    <b-button href="#" align="right" class="btn-ask-a-quote float-right" variant="outline-primary" title="Ask a quote"><span class="fab fa-quinscape"></span> &nbsp; Quote Me</b-button>
                </b-card>
            </b-col>
            <b-col sm="6" md="4" lg="3">
                <b-card
                        img-src="https://www.geewiz.co.za/6736-large_default/makerbot-replicator-z18-3d-printer.jpg"
                        img-alt="Lol"
                        img-top
                        class="product-card">
                    <b-card-title><a href="#">3D Printer Lol</a></b-card-title>
                    <b-card-sub-title class="mb-2">Makerbot</b-card-sub-title>

                    <b-button href="#" align="right" class="btn-ask-a-quote float-right" variant="outline-primary" title="Ask a quote"><span class="fab fa-quinscape"></span> &nbsp; Quote Me</b-button>
                </b-card>
            </b-col>
            <b-col sm="6" md="4" lg="3">
                <b-card
                        img-src="https://www.geewiz.co.za/6736-large_default/makerbot-replicator-z18-3d-printer.jpg"
                        img-alt="Lol"
                        img-top
                        class="product-card">
                    <b-card-title><a href="#">3D Printer Lol</a></b-card-title>
                    <b-card-sub-title class="mb-2">Makerbot</b-card-sub-title>

                    <b-button href="#" align="right" class="btn-ask-a-quote float-right" variant="outline-primary" title="Ask a quote"><span class="fab fa-quinscape"></span> &nbsp; Quote Me</b-button>
                </b-card>
            </b-col>
            <b-col sm="6" md="4" lg="3">
                <b-card
                        img-src="https://www.geewiz.co.za/6736-large_default/makerbot-replicator-z18-3d-printer.jpg"
                        img-alt="Lol"
                        img-top
                        class="product-card">
                    <b-card-title><a href="#">3D Printer Lol</a></b-card-title>
                    <b-card-sub-title class="mb-2">Makerbot</b-card-sub-title>

                    <b-button href="#" align="right" class="btn-ask-a-quote float-right" variant="outline-primary" title="Ask a quote"><span class="fab fa-quinscape"></span> &nbsp; Quote Me</b-button>
                </b-card>
            </b-col>
            <b-col sm="6" md="4" lg="3">
                <b-card
                        img-src="https://www.geewiz.co.za/6736-large_default/makerbot-replicator-z18-3d-printer.jpg"
                        img-alt="Lol"
                        img-top
                        class="product-card">
                    <b-card-title><a href="#">3D Printer Lol</a></b-card-title>
                    <b-card-sub-title class="mb-2">Makerbot</b-card-sub-title>

                    <b-button href="#" align="right" class="btn-ask-a-quote float-right" variant="outline-primary" title="Ask a quote"><span class="fab fa-quinscape"></span> &nbsp; Quote Me</b-button>
                </b-card>
            </b-col>



        </b-row>

        <b-row no-gutters>
            <b-col md="12">
                <!--<pre>
                    {{ category }}
                </pre>-->
            </b-col>
        </b-row>
    </div>
    <div v-else :id="'MOCKUP_CT_CATEGORY_INFO_'+blockInfo.id"  class="CT_CATEGORY_INFO">
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
                category: null
            };
        },
        computed: {
            breadcrumbs: function () {
                return [
                    {
                        text: 'Admin',
                        href: '#'
                    },
                    {
                        text: 'Manage',
                        href: '#'
                    },
                    {
                        text: 'Library',
                        active: true
                    }
                ]
            }
        },
        methods: {
            processData(block) {
                console.log("Processing CT_CATEGORY_INFO block: " + block.id)
                console.log(block)
                let properties = block.properties
                this.mapBasicBlockProperties(properties)

                if ( properties.category != undefined ) {
                    this.category = properties.category
                }

                //do all the necessary and then switch
                this.switchToReal = true
            }
        }
    }
</script>

<style lang="scss">
    .CT_CATEGORY_INFO {
        .display-image {
            border: 0px solid white;
            transition: border 0.5s ease-in-out;
        }

        .display-image:hover {
            border:5px solid #ffffff;
        }

        .category-sub-thumb {
            //padding:15px;
        }

        .product-card {
            border:none;
            box-shadow: none;
            margin:10px;
        }

        .product-card:hover {
            box-shadow: 2px 2px 14px gainsboro;
        }

        .btn-ask-a-quote {
            margin-top:15px;

        }
    }
</style>