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
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    css: [
        '@/assets/css/app.css'
    ],
    plugins: [
        '@/plugins/global-components.js'
    ],
    components: true,
    buildModules: [
        '@nuxtjs/moment'
    ],
    modules: [
        'bootstrap-vue/nuxt',
        '@nuxt/content'
    ],
    build: {},
    transition: "page"
}
