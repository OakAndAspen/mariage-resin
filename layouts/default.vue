<template>
    <div id="DefaultLayout">
        <the-header/>
        <the-menu/>
        <main class="container my-4 py-4">
            <Nuxt/>
        </main>
        <the-footer/>
    </div>
</template>

<script>
import TheFooter from "@/components/layout/TheFooter.vue";
import TheHeader from "@/components/layout/TheHeader.vue";
import TheMenu from "@/components/layout/TheMenu.vue";

export default {
    components: {TheMenu, TheFooter, TheHeader}
}
</script>
