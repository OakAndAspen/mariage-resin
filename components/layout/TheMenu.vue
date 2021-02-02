<template>
    <nav id="TheMenu" class="container">
        <ul class="nav justify-content-center">
            <li class="nav-item" v-for="item of items">
                <nuxt-link class="nav-link text-secondary" :to="item.url">
                    {{ item.label }}
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>

export default {
    data() {
        return {
            items: [
                {
                    label: "Home",
                    url: "/"
                },
                {
                    label: "Blog",
                    url: "/blog"
                }
            ]
        }
    }
}

</script>

<style>

#TheMenu a {
    font-variant: all-small-caps;
    font-size: 1.2em;
}

</style>
