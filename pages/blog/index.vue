<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-8">
                <div v-for="a in articles">
                    <h3>{{ a.title }}</h3>
                    <small class="text-muted">{{ $moment(a.date).format("DD.MM.YYYY") }}</small>
                    <p>{{ a.description }}</p>
                    <nuxt-link :to="{ name: 'blog-slug', params: { slug: a.slug }}">Read more...</nuxt-link>
                    <hr/>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <h3>This is my blog</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name: "BlogPage",
    data() {
        return {
            articles: []
        }
    },
    async asyncData({$content}) {
        const articles = await $content('articles')
            .sortBy('date', 'desc')
            .fetch();
        return {
            articles
        }
    }
}

</script>

