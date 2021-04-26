<template>
    <div id="InscriptionPage">

        <!-- ----- Bannière ----- -->
        <banner background="originals/inscription-2.jpg" veil="rgba(0,0,0,0.4)">
            <div class="text-center container">
                <p class="font-display display-1 t-white">Inscription</p>
            </div>
        </banner>

        <!-- ----- Formulaire code ----- -->
        <section-wrapper v-if="accessLevel === 0">
            <p class="display-4 text-center">Merci d'entrer le code qui vous a été fourni dans l'invitation</p>
            <div class="row">
                <div class="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto">
                    <input class="form-control form-control-lg my-4 text-center"
                           type="text" v-model="codeInput"/>
                    <button class="btn btn-lg w-100"
                            @click="checkCode">
                        Vérifier le code
                    </button>
                    <div v-if="accessLevel === 0 && codeWasChecked"
                         class="alert alert-danger my-4 text-center">
                        J'aurais pas fait ça comme ça...
                    </div>
                </div>
            </div>
        </section-wrapper>

        <!-- ----- Formulaire inscription ----- -->
        <section-wrapper v-if="accessLevel > 0">
            <div class="row">
                <div class="col-12 col-md-8 mx-auto">
                    <form id="InscriptionForm" class="text-center">
                        <h1>Formulaire d'inscription</h1>

                        <section>
                            <h3 class="my-4">Votre nom</h3>
                            <input id="FormName" type="text" class="form-control" v-model="form.nom"/>
                        </section>

                        <hr/>

                        <section>
                            <h3 class="my-4">Nombre de participants</h3>
                            <table id="FormNb" class="mx-auto">
                                <tbody>
                                <tr>
                                    <td>Cérémonie</td>
                                    <td>
                                        <input type="number" class="form-control text-center"
                                               v-model="form.participants.ceremonie"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Apéro</td>
                                    <td>
                                        <input type="number" class="form-control text-center"
                                               v-model="form.participants.apero"/>
                                    </td>
                                </tr>
                                <tr v-if="accessLevel === 2">
                                    <td>Souper</td>
                                    <td>
                                        <input type="number" class="form-control text-center"
                                               v-model="form.participants.souper"/>
                                    </td>
                                </tr>
                                <tr v-if="accessLevel === 2">
                                    <td>Nuit (10.- / personne)</td>
                                    <td>
                                        <input type="number" class="form-control text-center"
                                               v-model="form.participants.dodo"/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </section>

                        <hr/>

                        <section>
                            <h3 class="my-4">Covoiturage</h3>
                            <div class="form-inline my-2">
                                Je pars de
                                <input type="text" class="form-control mx-2" v-model="form.covoit.de"/>
                                .
                            </div>
                            <div class="form-inline my-2">
                                J'ai une voiture avec
                                <input type="number" class="form-control mx-2" v-model="form.covoit.offre"/>
                                places disponibles.
                            </div>
                            <div class="form-inline my-2">
                                Je cherche
                                <input type="number" class="form-control mx-2" v-model="form.covoit.cherche"/>
                                places dans une voiture.
                            </div>
                        </section>

                        <hr/>

                        <section v-if="accessLevel === 2">
                            <h3 class="my-4">Aide</h3>
                            <div class="form-inline my-2">
                                <input type="checkbox" class="form-control mr-2" v-model="form.aide.install"/>
                                Je peux aider à l'installation (vendredi 24 dès 18h - Broc)
                            </div>
                            <div class="form-inline my-2">
                                <input type="checkbox" class="form-control mr-2" v-model="form.aide.apero"/>
                                Je peux aider au rangement de l'apéro (samedi 25 dès 17h - St-Saphorin )
                            </div>
                            <div class="form-inline my-2">
                                <input type="checkbox" class="form-control mr-2" v-model="form.aide.colonie"/>
                                Je peux aider au rangement de la colonie (dimanche 26 dès 12h - Broc )
                            </div>
                        </section>

                        <section>
                            <textarea v-model="form.commentaire" placeholder="Remarques, allergies, etc."
                                      class="form-control"/>
                            <button class="btn btn-lg w-100 my-4" type="button" @click="register">
                                Enregistrer l'inscription
                            </button>
                            <div class="alert alert-success" v-if="state === 1">Merci pour votre inscription!</div>
                        </section>

                    </form>
                </div>
            </div>
        </section-wrapper>

    </div>
</template>

<script>

import SectionWrapper from "@/components/SectionWrapper.vue";
export default {
    name: "InscriptionPage",
    components: {SectionWrapper},
    data() {
        return {
            codeInput: '',
            accessLevel: 0,
            state: 0,
            codeWasChecked: false,
            form: {
                nom: '',
                participants: {
                    ceremonie: 0,
                    apero: 0,
                    souper: 0,
                    dodo: 0
                },
                covoit: {
                    de: '',
                    offre: 0,
                    cherche: 0
                },
                aide: {
                    install: false,
                    apero: false,
                    colonie: false
                },
                commentaire: ""
            }
        }
    },
    methods: {
        checkCode() {
            let input = this.codeInput.toUpperCase();
            switch (input) {
                case "RESIN-APERO":
                    this.accessLevel = 1;
                    break;
                case "RESIN-FETE":
                    this.accessLevel = 2;
                    break;
                default:
                    break;
            }
            this.codeWasChecked = true;
        },
        async register() {
            if (this.form.nom) {
                let url = process.env.backendUrl + "/inscription.php?secretKey=" + process.env.secretKey;
                const res = await this.$http.post(url, this.form);
                if(res.status === 200) {
                    this.state = 1;
                }
            }
        }
    }
}

</script>

<style>

#InscriptionForm section {
    margin-top: 50px;
    margin-bottom: 50px;
}

#InscriptionForm input {
    text-align: center;
}

#InscriptionForm table td {
    padding: 10px;
}

</style>
