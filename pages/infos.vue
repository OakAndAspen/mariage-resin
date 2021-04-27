<template>
    <div id="InfosPage">

        <!-- ----- Bannière ----- -->
        <banner background="originals/infos-3.jpg" veil="rgba(0,0,0,0.2)">
            <div class="text-center container">
                <p class="font-display display-1 t-white">Toutes les infos</p>
            </div>
        </banner>

        <!-- ----- Infos A-Z ----- -->
        <section-wrapper>
            <ul class="list-group">
                <li v-for="(e, i) in sortedInfo"
                    class="list-group-item" :key="i">
                    <h3 class="small-caps pointer" @click="openSection(i)">
                        {{ e.title }}
                    </h3>
                    <img :src="require('~/assets/img/info/'+e.image)" alt="Plan"
                    v-if="i === index && e.image" class="img-fluid my-4">
                    <nuxt-content v-if="i === index" :document="e" class="mt-4"/>
                </li>
            </ul>
        </section-wrapper>
    </div>
</template>

<script>

export default {
    name: "InfosPage",
    data() {
        return {
            index: 0,
            infos: []
        }
    },
    async asyncData({$content}) {
        const infos = await $content('info').fetch();
        return {
            infos: infos
        }
    },
    methods: {
        openSection(i) {
            this.index = i;
        }
    },
    computed: {
        sortedInfo() {
            return this.infos.sort((a,b) => a.title.localeCompare(b.title));
        }
    }
}

</script>

