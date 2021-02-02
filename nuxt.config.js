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
    components: true,
    buildModules: [
        '@nuxtjs/moment'
    ],
    modules: [
        'bootstrap-vue/nuxt'
    ],
    build: {},
    transition: "page"
}
