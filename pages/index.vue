<template>
    <div id="HomePage">
        <div id="HomeBanner">
            <div class="d-flex justify-content-center align-items-center h-100"
                 style="background-color:rgba(255,255,255,0.4);">
                <div class="text-center t-dark container">
                    <p class="font-display display-3">Rejoignez-nous le</p>
                    <p class="font-display display-2">25 septembre 2021</p>
                    <p class="font-display display-3">pour célébrer notre mariage!</p>
                    <nuxt-link to="inscription" class="btn btn-lg mt-4">Inscrivez-vous ici</nuxt-link>
                </div>
            </div>
        </div>
        <!-- ----- Programme ----- -->
        <div class="container my-4 py-4">
            <h1 class="text-center mb-4">
                <span>Programme</span>
            </h1>
            <div class="row">
                <div class="col-12 col-md-10 mx-auto">
                    <div class="row" v-for="(p, i) of program">
                        <div :class="'col-12 col-md-6'+ (i % 2 === 0 ? ' order-md-1': ' order-md-2')">
                            <img :src="require(`~/assets/img/${p.image}`)"
                                 :alt="p.title" class="img-fluid my-4"/>
                        </div>
                        <div
                            :class="'col-12 col-md-6 d-flex justify-content-center align-items-center' + (i % 2 === 0 ? ' order-md-2': ' order-md-1')">
                            <div class="text-center">
                                <h2 class="t-blue">{{ p.title }}</h2>
                                <small class="text-muted">{{ p.location }}</small><br/>
                                <small class="text-muted">{{ p.time }}</small>
                                <p class="mt-4">{{ p.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ----- Infos ----- -->
        <div class="b-blue py-4">
            <div class="container my-4 py-4">
                <div class="row">
                    <div class="col-12 col-md-10 mx-auto">
                        <div class="row t-white">
                            <content-wrapper v-for="link of links"
                                             :img-square="'cut/'+link.image"
                                             :link="link.url"
                                             veil="rgba(39,71,92,0.5)">
                                <p class="display-3 font-display">{{ link.text }}</p>
                            </content-wrapper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ContentWrapper from "~/components/ContentWrapper.vue";

export default {
    name: "HomePage",
    components: {ContentWrapper},
    data() {
        return {
            program: [
                {
                    image: "ph-square.png",
                    title: "Cérémonie",
                    location: "Eglise de St-Saphorin",
                    time: "14h00 - 16h00",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui vivamus."
                },
                {
                    image: "ph-square.png",
                    title: "Apéro",
                    location: "Eglise de St-Saphorin",
                    time: "14h00 - 16h00",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui vivamus."
                },
                {
                    image: "ph-square.png",
                    title: "Souper",
                    location: "Eglise de St-Saphorin",
                    time: "14h00 - 16h00",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui vivamus."
                }
            ],
            links: [
                {
                    url: "inscription",
                    text: "N'oubliez pas de vous inscrire!",
                    image: "inscription-2.jpg"
                },
                {
                    url: "infos",
                    text: "Informations pratiques",
                    image: "infos-1.jpg"
                },
                {
                    url: "voyage",
                    text: "Offrez-nous notre voyage de noce!",
                    image: "voyage-2.jpg"
                },
                {
                    url: "galerie",
                    text: "Les photos du mariage",
                    image: "galerie-2.jpg"
                }
            ]
        }
    }
}

</script>

<style>
#HomePage #HomeBanner {
    background-image: url("~assets/img/header.jpg");
    background-size: cover;
    height: 700px;
}
</style>
