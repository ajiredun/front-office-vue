module.exports = {
    chainWebpack: config => {
        config.optimization.delete('splitChunks'),
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.transformAssetUrls = {
                    img: 'src',
                    image: 'xlink:href',
                    'b-img': 'src',
                    'b-img-lazy': ['src', 'blank-src'],
                    'b-card': 'img-src',
                    'b-card-img': 'src',
                    'b-card-img-lazy': ['src', 'blank-src'],
                    'b-carousel-slide': 'img-src',
                    'b-embed': 'src'
                }

                return options
            })
    }
}


/*
module.exports = {
    pwa: {
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
            navigateFallback: '/index.html',
            runtimeCaching: [
                {
                    urlPattern: new RegExp('^https://back.dev.ajiredun.com/api/'),
                    handler: 'networkFirst',
                    options: {
                        networkTimeoutSeconds:20,
                        cacheName: 'api-cache',
                        cacheableResponse: {
                            statuses: [0,200]
                        }
                    }
                }
            ]
        }
    }
}*/
