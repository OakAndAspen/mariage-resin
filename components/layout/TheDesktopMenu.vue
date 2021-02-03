<template>
    <nav id="TheDesktopMenu" class="py-4 position-absolute w-100 t-white">
        <div class="container d-flex justify-content-between">
            <span class="font-display display-3 m-0">Matthieu & Laurène</span>
            <ul class="nav pt-2">
                <li class="nav-item" v-for="item of items">
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
    data() {
        return {
            items: [
                {
                    label: "Accueil",
                    url: "/"
                },
                {
                    label: "Inscription",
                    url: "/inscription"
                },
                {
                    label: "Infos",
                    url: "/infos"
                },
                {
                    label: "Voyage",
                    url: "/voyage"
                },
                {
                    label: "Galerie",
                    url: "/galerie"
                }
            ]
        }
    }
}

</script>

<style>

#TheDesktopMenu a:hover {
    border-bottom: 1px solid rgb(var(--resin-white));
    color: rgb(var(--resin-white));
}

</style>
