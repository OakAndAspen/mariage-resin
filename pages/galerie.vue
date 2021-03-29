<template>
    <div id="GaleriePage">

        <!-- ----- Modal ----- -->
        <div v-if="activeAlbum !== null" id="Modal">
            <div id="ModalVeil" class="my-4">
                <fa icon="times" class="display-4 text-white m-4"
                    @click="activeAlbum = null"
                    style="float: right;"/>
                <div class="row">
                    <div class="col-10 col-md-8 mx-auto">
                        <VueSlickCarousel v-bind="mainSlider">
                            <div v-for="index of albums[activeAlbum].amount">
                                <img :src="getPhotoSrc(albums[activeAlbum].code, index)"
                                     :alt="albums[activeAlbum].title + ' - N°' + index"
                                     class="mx-auto"/>
                            </div>
                        </VueSlickCarousel>
                    </div>
                </div>
            </div>
        </div>

        <!-- ----- Bannière ----- -->
        <banner background="originals/galerie-2.jpg" veil="rgba(0,0,0,0.2)">
            <div class="text-center container">
                <p class="font-display display-1 t-white">Galerie</p>
            </div>
        </banner>

        <!-- ----- Galerie ----- -->
        <section-wrapper>
            <div class="row">
                <div v-for="(a, i) of albums" class="col-12 col-sm-6 col-md-4">
                    <div :class="'card pointer' + (i === activeAlbum ? ' b-gray' : '')"
                         @click="showAlbum(i)">
                        <img :src="getPhotoSrc(albums[i].code, 1)" class="card-img-top" :alt="a.title">
                        <div class="card-body">
                            <h5 class="card-title">{{ a.title }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section-wrapper>
    </div>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';

export default {
    name: "GaleriePage",
    components: {VueSlickCarousel},
    mounted() {
        this.height = window.innerHeight;
    },
    data() {
        return {
            height: "700",
            mainSlider: {
                infinite: true,
                arrows: true,
                slidesToShow: 1,
                adaptiveHeight: true,
                lazyLoad: "progressive"
            },
            albums: [
                {
                    title: "Cérémonie",
                    code: "ceremonie",
                    amount: 5
                },
                {
                    title: "Apéro",
                    code: "apero",
                    amount: 5
                },
                {
                    title: "Souper",
                    code: "souper",
                    amount: 5
                }
            ],
            activeAlbum: null
        }
    },
    methods: {
        showAlbum(id) {
            this.activeAlbum = id;
        },
        getPhotoSrc(code, index) {
            let number = ('000' + index).substr(-3);
            return require('~/assets/img/galerie/' + code + '/' + number + '.jpg');
        }
    }
}

</script>

<style>

#GaleriePage #Modal {
    position: absolute;
    display: block;
    z-index: 100;
    width: 100%;
    height: 100%;
}

#GaleriePage #Modal {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
}

#GaleriePage #Modal .slick-slider img {
    max-height: 500px;
}

</style>
