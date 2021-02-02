<template>
    <div class="container">
        <nuxt-link :to="{name:'blog'}" class="btn btn-primary mb-4 small-caps">
            << Back to the blog page
        </nuxt-link>
        <div v-if="article">
            <h1>{{ article.title }}</h1>
            <nuxt-content :document="article"/>
        </div>
    </div>
</template>

<script>

export default {
    name: "ArticlePage",
    data() {
        return {
            article: null
        }
    },
    async asyncData({$content, params}) {
        const articles = await $content('articles')
            .where({slug: params.slug})
            .fetch();
        return {
            article: articles[0]
        }
    }
}

</script>

