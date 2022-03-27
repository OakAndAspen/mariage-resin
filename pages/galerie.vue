<template>
    <div id="GaleriePage">

        <!-- ----- Modal ----- -->
        <div v-if="activeAlbum !== null" id="Modal">
            <div id="ModalVeil" class="my-4 py-4">
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

        <!-- ----- Formulaire ----- -->
        <div v-if="!passwordAccepted" class="container my-4 py-4 text-center">
            <p>Pour accéder à la galerie, merci d'indiquer le code qui vous a été transmis:</p>
            <input type="text" placeholder="CODE" v-model="passwordInput"
                   class="form-control w-auto my-4 mx-auto text-center"/>
            <button class="btn btn-info mb-4" @click="checkPassword">Vérifier</button>
            <div class="alert alert-danger" v-if="errorMessage">{{errorMessage}}</div>
        </div>

        <!-- ----- Galerie ----- -->
        <section-wrapper v-if="passwordAccepted">
            <div class="row">
                <div v-for="(a, i) of albums" class="col-12 col-sm-6 col-md-4">
                    <div :class="'card mb-4 pointer' + (i === activeAlbum ? ' b-gray' : '')"
                         @click="showAlbum(i)">
                        <img :src="getPhotoSrc(albums[i].code, 1)" class="card-img-top" :alt="a.title">
                        <div class="card-body">
                            <h5 class="card-title">{{ a.title }}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <p>
                <i>
                    Bonjour à toutes et tous !<br/>
                    Si l’un ou plusieurs de ces clichés vous plaisent et que vous voudriez les avoir, en haute définition et non-signées par Niko, pour les imprimer contactez-nous ! Nous vous transmettrons la marche à suivre.<br/>
                    Encore merci à nos deux photographes, Zoé et Niko.<br/>
                    Voici leurs sites que nous vous encourageons à aller visiter !<br/><br/>

                    <a target="_blank" href="https://www.zoeresinphotographe.com/">https://www.zoeresinphotographe.com/</a><br/>
                    <a target="_blank" href="https://nikomagnus.com/">https://nikomagnus.com/</a>
                </i>
            </p>
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
            passwordAccepted: false,
            passwordInput: "",
            errorMessage: false,
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
                    title: "Mise en place",
                    code: "mise-en-place",
                    amount: 12
                },
                {
                    title: "Préparatifs",
                    code: "preparatifs",
                    amount: 37
                },
                {
                    title: "Cérémonie à l'église",
                    code: "eglise",
                    amount: 64
                },
                {
                    title: "Vin d'honneur",
                    code: "vin-honneur",
                    amount: 13
                },
                {
                    title: "Photos de groupes",
                    code: "groupes",
                    amount: 29
                },
                {
                    title: "Photos des mariés",
                    code: "photos-maries",
                    amount: 12
                },
                {
                    title: "Portraits",
                    code: "portraits",
                    amount: 47
                },
                {
                    title: "Photomaton - soirée",
                    code: "photomaton",
                    amount: 36
                },
                {
                    title: "Salle du souper",
                    code: "salle-souper",
                    amount: 38
                }
            ],
            activeAlbum: null
        }
    },
    methods: {
        checkPassword() {
          if(this.passwordInput.toLowerCase() === "resin-photos") {
              this.passwordAccepted = true;
          } else {
              this.errorMessage = "Merci de vérifier le mot de passe.";
          }
        },
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
    background-color: rgba(0, 0, 0, 0.8);
}

#GaleriePage #Modal .slick-slider img {
    height: 500px;
}

#GaleriePage .card img {
    object-fit: cover;
    height: 200px;
}

</style>
