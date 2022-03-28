<template>
    <div id="TheFloatingMenu" v-if="show"
         class="position-fixed container-fluid h-100 d-lg-none">
        <div class="row h-100">
            <nav class="col-12 col-sm-7 col-md-5 ml-auto h-100 p-4 b-blue">
                <div class="px-4 py-1 t-white text-center">
                    <fa icon="bars" class="display-3 d-lg-none"
                        style="cursor: pointer; width: 20px;"
                        @click="$emit('toggleNav')"/>
                    <h1 class="font-display t-white my-4">Laurène & Matthieu</h1>
                    <ul class="nav flex-column mt-4">
                        <li v-for="item of menu" :key="item.url"
                            class="nav-item" :style="{fontSize: '1.2em'}">
                            <nuxt-link class="nav-link px-0" :to="item.url">
                                {{ item.label }}
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>

export default {
    name: "TheFloatingMenu",
    props: ['menu', 'show']
}

</script>

<style>
#TheFloatingMenu {
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 200;
}

#TheFloatingMenu a {
    color: rgb(var(--resin-white));
}

#TheFloatingMenu a:hover {
    color: rgb(var(--resin-light));
}

#TheFloatingMenu .nav .nav a {
    font-size: 0.8em;
}
</style>
