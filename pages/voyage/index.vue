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
                    <p class="font-weight-bold">Vous pouvez nous offrir notre cadeau en faisant un versement à l'IBAN
                        suivante:</p>
                    <p>CH005 00000 00000 00000 00000 0</p>
                </div>
                <div class="col-12 col-md-8">
                    <div v-for="g of sortedGifts" class="card mb-3">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img :src="require('~/assets/img/cut/gift-types/'+g.type+'.jpg')"
                                     class="card-img rounded-0" :alt="g.titre">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{{ g.titre }}</h5>
                                    <p class="card-text"><small class="text-muted">{{ g.prix }} CHF</small></p>
                                    <nuxt-link v-if="!g.offertPar" class="btn"
                                               :to="{ name: 'voyage-id', params: { id: g.id }}">
                                        Offrir
                                    </nuxt-link>
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

export default {
    name: "VoyagePage",
    data() {
        return {
            gifts: []
        }
    },
    async asyncData({$http}) {
        let url = 'http://localhost/mariage-resin-backend/voyage.php?secretKey=nX?3Wc9Kfr=@AjFe';
        const res = await $http.get(url);
        const data = await res.json();
        return {
            gifts: data
        };
    },
    computed: {
        sortedGifts() {
            return this.gifts.sort((a, b) => {
                let aIsAvailable = a.offertPar === null;
                let bIsAvailable = b.offertPar === null;
                return (aIsAvailable === bIsAvailable) ? 0 : aIsAvailable ? -1 : 1;
            });
        }
    }
}

</script>

