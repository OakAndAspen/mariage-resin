<template>
    <div id="InfosPage">
        <div id="InfosBanner">
            <div class="d-flex justify-content-center align-items-center h-100"
                 style="background-color:rgba(255,255,255,0);">
                <div class="text-center container">
                    <p class="font-display display-1 t-white">Toutes les infos</p>
                </div>
            </div>
        </div>
        <div class="container my-4 py-4">
            <div class="row">
                <div class="col-12 col-md-10 mx-auto">
                    <ul class="list-group">
                        <li v-for="(e, i) of infos.sort((a,b) => a.title.localeCompare(b.title))"
                            class="list-group-item">
                            <h3 class="small-caps pointer" @click="index = i;">
                                {{ e.title }}
                            </h3>
                            <p v-if="i === index">{{ e.content }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
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

<style>
#InfosPage #InfosBanner {
    background-image: url("~assets/img/cut/infos-1.jpg");
    background-size: cover;
    height: 700px;
}
</style>

