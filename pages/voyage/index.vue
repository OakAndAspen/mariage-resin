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
                    <p>Une fois que nous serons remis de nos émotions, nous avons pour projet de faire une grosse
                        ballade dans le Nord! Si vous voulez nous aider à concrétiser ce périple, vous pouvez nous
                        soutenir financièrement pour les différentes parties du voyage.</p>
                    <p>Les prix sont bien sûr indicatifs, sentez-vous libres de participer comme vous l'entendez. Chaque
                        don se verra gratifié d’une carte postale sublime/kitsch/alléchante de l’étape sponsorisée.</p>
                    <p class="font-weight-bold">Vous pouvez nous offrir notre cadeau en faisant un versement à l'IBAN
                        suivant:</p>
                    <p>CH58 0076 8300 1554 0980 0</p>
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
    async asyncData(context) {
        let url = context.env.backendUrl + "/voyage.php?secretKey=" + context.env.secretKey;
        const res = await context.$http.get(url);
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
    },
    mounted() {
        this.$nuxt.refresh();
    }
}

</script>

