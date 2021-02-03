<template>
    <div id="InfosPage">

        <!-- ----- Bannière ----- -->
        <banner background="cut/infos-1.jpg" veil="rgba(0,0,0,0.2)">
            <div class="text-center container">
                <p class="font-display display-1 t-white">Toutes les infos</p>
            </div>
        </banner>

        <!-- ----- Infos A-Z ----- -->
        <section-wrapper>
            <ul class="list-group">
                <li v-for="(e, i) of infos.sort((a,b) => a.title.localeCompare(b.title))"
                    class="list-group-item">
                    <h3 class="small-caps pointer" @click="index = i;">
                        {{ e.title }}
                    </h3>
                    <p v-if="i === index">{{ e.content }}</p>
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
            infos: [
                {
                    title: "Parking",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui vivamus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui vivamus."
                },
                {
                    title: "Chiens",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui vivamus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui vivamus."
                },
                {
                    title: "Hébergement",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui vivamus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui vivamus."
                },
                {
                    title: "Cadeaux",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui vivamus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui vivamus."
                }
            ]
        }
    }
}

</script>

