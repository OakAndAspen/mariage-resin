export default {
    target: 'static',
    head: {
        title: 'Mariage Resin',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'},
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Caveat&display=swap'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@300;400;600&display=swap'
            }
        ]
    },
    css: [
        '@/assets/css/app.css'
    ],
    components: true,
    buildModules: [
        '@nuxtjs/moment'
    ],
    modules: [
        'bootstrap-vue/nuxt',
        'nuxt-lazy-load',
        '@nuxt/http',
        '@nuxt/content',
        ['nuxt-fontawesome', {
            component: 'fa',
            imports: [
                {
                    set: '@fortawesome/free-solid-svg-icons',
                    icons: ['faBars', 'faTimes']
                }
            ]
        }]
    ],
    plugins: [
        {
            src: '~/plugins/vue2-siema.js',
            ssr: false
        }
    ],
    build: {},
    pageTransition: "page",
    env: {
        backendUrl: 'https://api.mariage-resin.ch',
        secretKey: 'aLZ5bmeu3PpwQv5n'
    }
}
