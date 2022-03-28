<template>
    <nav id="TheDesktopMenu" class="py-4 position-absolute w-100 t-white">
        <div class="container d-flex justify-content-between">
            <h1 class="font-display display-3 m-0 t-white">Laurène & Matthieu</h1>
            <fa icon="bars" class="display-3 d-lg-none"
                style="cursor: pointer; width: 20px;"
                @click="$emit('toggleNav')"/>
            <ul class="nav pt-2 d-none d-lg-flex">
                <li class="nav-item" v-for="item of menu">
                    <nuxt-link class="nav-link t-white" :to="item.url">
                        {{ item.label }}
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>

export default {
    name: "TheDesktopMenu",
    props: ['menu']
}

</script>

<style>

#TheDesktopMenu a:hover {
    border-bottom: 1px solid rgb(var(--resin-white));
    color: rgb(var(--resin-white));
}

</style>
