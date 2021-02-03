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
                        Ce code n'est pas valide.
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
                            <input id="FormName" type="text" class="form-control" v-model="form.name"/>
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
                                    <td>Nuit (15.- / personne)</td>
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
                                <input type="text" class="form-control mx-2" v-model="form.carpool.from"/>
                                .
                            </div>
                            <div class="form-inline my-2">
                                J'ai une voiture avec
                                <input type="number" class="form-control mx-2" v-model="form.carpool.provides"/>
                                places disponibles.
                            </div>
                            <div class="form-inline my-2">
                                Je cherche
                                <input type="number" class="form-control mx-2" v-model="form.carpool.needs"/>
                                places dans une voiture.
                            </div>
                        </section>

                        <hr/>

                        <section v-if="accessLevel === 2">
                            <h3 class="my-4">Aide</h3>
                            <div class="form-inline my-2">
                                <input type="checkbox" class="form-control mr-2" v-model="form.help.before"/>
                                Je peux aider à l'installation (jeudi 4, 8h-10h)
                            </div>
                            <div class="form-inline my-2">
                                <input type="checkbox" class="form-control mr-2" v-model="form.help.after"/>
                                Je peux aider au rangement (vendredi 5, 8h-10h)
                            </div>
                        </section>

                        <section>
                            <button class="btn btn-lg w-100 my-4" type="button" @click="register">
                                Enregistrer l'inscription
                            </button>
                        </section>

                    </form>
                </div>
            </div>
        </section-wrapper>

    </div>
</template>

<script>


export default {
    name: "InscriptionPage",
    data() {
        return {
            codeInput: '',
            accessLevel: 0,
            codeWasChecked: false,
            form: {
                name: '',
                participants: {
                    ceremonie: 0,
                    apero: 0,
                    souper: 0,
                    dodo: 0
                },
                carpool: {
                    from: '',
                    provides: 0,
                    needs: 0
                },
                help: {
                    before: false,
                    after: false
                }
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
        register() {
            console.log(this.form);
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
