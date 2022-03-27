<template>
    <div id="TheDefaultLayout" class="b-white">
        <the-floating-menu :menu="menu" @toggleNav="floatingNav = !floatingNav" :show="floatingNav"/>
        <the-desktop-menu :menu="menu" @toggleNav="floatingNav = !floatingNav"/>
        <main>
            <Nuxt/>
        </main>
        <the-footer/>
    </div>
</template>

<script>

export default {
    name: "TheDefaultLayout",
    data() {
        return {
            floatingNav: false,
            menu: [
                {
                    label: "Accueil",
                    url: "/"
                },
                /*{
                    label: "Inscription",
                    url: "/inscription"
                },*/
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
    },
    watch: {
        $route () {
            this.floatingNav = false;
        }
    }
}
</script>
