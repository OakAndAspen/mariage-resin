<template>
    <div id="GaleriePage">

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

            <hr style="margin: 60px 0;"/>

            <carousel>
                <img v-for="index of albums[activeAlbum].amount"
                     :src="getPhotoSrc(albums[activeAlbum].code, index)"
                     :alt="albums[activeAlbum].title + ' - N°' + index"
                     class="img-fluid"/>
            </carousel>
        </section-wrapper>

        <!-- ----- Modal ----- -->
        <div v-if="activePhoto" class="modal p-4">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ albums[activeAlbum].title }}</h5>
                        <button type="button" class="close" @click="showPhoto(0)">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img :src="getPhotoSrc(albums[activeAlbum].code, activePhoto)"
                             class="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "GaleriePage",
    data() {
        return {
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
            activeAlbum: 0,
            activePhoto: 0
        }
    },
    methods: {
        showAlbum(id) {
            this.activeAlbum = id;
        },
        showPhoto(index) {
            console.log("SHOW PHOTO", index);
            this.activePhoto = index;
        },
        getPhotoSrc(code, index) {
            let number = ('000' + index).substr(-3);
            return require('~/assets/img/galerie/' + code + '/' + number + '.jpg');
        }
    }
}

</script>

<style>

#GaleriePage .modal {
    display: block;
    background-color: rgba(0, 0, 0, 0.7);
}

#GaleriePage .modal-dialog {
    width: 100%;
    max-width: 100%;
}

</style>
