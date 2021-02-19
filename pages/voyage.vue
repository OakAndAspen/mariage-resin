<template>
    <div id="VoyagePage">

        <!-- ----- Bannière ----- -->
        <banner background="originals/voyage-2.jpg" veil="rgba(0,0,0,0.2)">
            <div class="text-center container">
                <p class="font-display display-1 t-white">Voyage</p>
            </div>
        </banner>

        <!-- ----- Galerie ----- -->
        <section-wrapper>
            <div class="row">
                <div class="col-12 col-md-4">
                    <h1 class="mb-4">Aidez-nous à financer notre voyage de noce!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p class="font-weight-bold">Vous pouvez nous offrir notre cadeau en faisant un versement à l'IBAN suivante:</p>
                    <p>CH005 00000 00000 00000 00000 0</p>
                </div>
                <div class="col-12 col-md-8">
                    <div v-for="g of sortedGifts" class="card mb-3">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img :src="require('~/assets/img/cut/'+g.image+'.jpg')"
                                     class="card-img rounded-0" :alt="g.title">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{{ g.title }}</h5>
                                    <p class="card-text"><small class="text-muted">{{ g.price }} CHF</small></p>
                                    <button v-if="g.available" class="btn">Offrir</button>
                                    <button v-else class="btn" disabled>Merci !</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section-wrapper>
    </div>
</template>

<script>

// TODO: Quand on choisit un cadeau, une fenêtre s'ouvre qui demande le nom et un petit message --> merci!

export default {
    name: "VoyagePage",
    data() {
        return {
            gifts: [
                {
                    title: "Trajet Stockholm - Umea",
                    image: "train-2",
                    price: 55,
                    available: true
                },
                {
                    title: "Trajet Umea - Oslo",
                    image: "train-2",
                    price: 70,
                    available: false
                },
                {
                    title: "Nuit à Oslo",
                    image: "hotel-2",
                    price: 105,
                    available: true
                },
                {
                    title: "Nuit à Stockholm",
                    image: "hotel-2",
                    price: 120,
                    available: true
                }
            ]
        }
    },
    computed: {
        sortedGifts() {
            return this.gifts.sort((a,b) => {
                return (a.available === b.available)? 0 : a.available? -1 : 1;
            });
        }
    }

}

</script>

