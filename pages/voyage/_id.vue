<template>
    <div id="VoyagePage">

        <!-- ----- Bannière ----- -->
        <banner background="originals/voyage-2.jpg" veil="rgba(0,0,0,0.2)">
            <div class="text-center container">
                <p class="font-display display-1 t-white" v-if="gift">Voyage</p>
            </div>
        </banner>

        <!-- ----- Galerie ----- -->
        <section-wrapper>
                <div class="card mb-4" v-if="gift">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img :src="require('~/assets/img/voyage/image-voyage_'+gift.numero+'.jpg')"
                                 class="card-img rounded-0" :alt="gift.titre">
                        </div>
                        <div class="col-md-8 d-flex">
                            <div class="card-body align-self-center m-3">
                                <p class="card-text">
                                    <small class="text-muted">
                                        Jour {{ gift.jour }}
                                    </small>
                                </p>
                                <h5 class="card-title">
                                    {{ gift.titre }}
                                    <br/>
                                    <span class="badge badge-secondary p-2 mt-4">
                                        {{ gift.prix }} CHF
                                    </span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="state === 0" class="text-center">
                    <h3 class="mb-4">Qui devons-nous remercier pour ce cadeau?</h3>
                    <input type="text" class="form-control text-center mb-4" placeholder="Votre nom" v-model="form.name"/>
                    <textarea class="form-control text-center mb-4" placeholder="Un petit message ?" v-model="form.message"/>
                    <button class="btn" @click="registerGift">Offrir ce cadeau</button>
                </div>
                <div v-if="state === 1" class="text-center">
                    <h1 class="text-center mb-4">Un grand merci!</h1>
                    <p>Vous pouvez nous offrir ce cadeau en faisant un versement sur cet IBAN:</p>
                    <p>CH58 0076 8300 1554 0980 0</p>
                </div>
        </section-wrapper>
    </div>
</template>

<script>

export default {
    name: "VoyagePage",
    data() {
        return {
            gifts: [],
            state: 0,
            form: {
                name: "",
                message: ""
            }
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
        gift() {
            return this.gifts.find(g => {
                return g.id === this.$route.params.id;
            });
        }
    },
    methods: {
        async registerGift(context) {
            let url = process.env.backendUrl + "/voyage.php?secretKey=" + process.env.secretKey;
            let data = {
                id: this.$route.params.id,
                offertPar: this.form.name,
                commentaire: this.form.message
            };
            if(data.id && data.offertPar) {
                const res = await this.$http.post(url, data);
                if(res.status === 200) {
                    this.state = 1;
                }
            }
        }
    }
}

</script>

