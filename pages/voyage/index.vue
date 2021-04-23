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
                    <div v-for="g of formattedGifts" class="card mb-3">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img :src="require('~/assets/img/voyage/image-voyage_' + g.numero + '.jpg')"
                                     class="card-img rounded-0" :alt="g.parts[0].titre">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{{ g.parts[0].titre }}</h5>
                                    <p class="card-text">
                                        <small class="text-muted">
                                            Jour {{ g.parts[0].jour }}
                                        </small>
                                    </p>
                                    <div class="progress mb-4">
                                        <div class="progress-bar progress-bar-striped bg-info" role="progressbar"
                                             :style="'width: ' + g.percentage + '%'">
                                            {{ g.percentage }} %
                                        </div>
                                    </div>
                                    <nuxt-link v-if="g.percentage < 100" class="btn"
                                               :to="{ name: 'voyage-id', params: { id: g.availableId }}">
                                        Participer de {{ g.parts[0].prix }} CHF
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
        let url = 'http://localhost/mariage-resin-backend/voyage.php?secretKey=aLZ5bmeu3PpwQv5n';
        const res = await $http.get(url);
        const data = await res.json();
        return {
            gifts: data
        };
    },
    computed: {
        formattedGifts() {
            let groupedGifts = [];

            // Create groups
            this.gifts.map(g => {
                let groupExists = false;
                groupedGifts = groupedGifts.map(gg => {
                    if (g.numero === gg.numero) {
                        gg.parts.push(g);
                        groupExists = true;
                    }
                    return gg;
                });
                if (!groupExists) {
                    groupedGifts.push({
                        numero: g.numero,
                        parts: [g]
                    });
                }
            });

            // Calculate percentage
            groupedGifts = groupedGifts.map(gg => {
                gg.totalParts = 0;
                gg.offerredParts = 0;
                gg.parts.map(p => {
                    gg.totalParts++;
                    if (p.offertPar) gg.offerredParts++;
                });
                gg.percentage = Math.round(gg.offerredParts / gg.totalParts * 100);
                return gg;
            });

            // Define available gift id
            groupedGifts = groupedGifts.map(gg => {
                gg.availableId = 0;
                gg.parts.map(p => {
                    if (!p.offertPar) gg.availableId = p.id;
                });
                return gg;
            });

            return groupedGifts.sort((a, b) => {
                let aIsAvailable = a.percentage < 100;
                let bIsAvailable = b.percentage < 100;
                return (aIsAvailable === bIsAvailable) ? 0 : aIsAvailable ? -1 : 1;
            });
        }
    }
}

</script>

