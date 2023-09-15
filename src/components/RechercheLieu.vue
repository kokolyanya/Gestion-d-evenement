<template>
  <Page>
    <form class="Form" @submit.prevent="submitForm">
        <h2 class="titreNouvel">Description du lieu</h2>
        <div class="acompleter">
          <div class="nom">
            <label for="pays">Pays :</label>
            <input id="pays" type="text" class="inputText inputNom" v-model.trim="pays" required/>
          </div>
          <div class="nom">
            <label for="region">Région :</label>
            <input id="region" type="text" class="inputText inputNom" v-model.trim="region" required/>
          </div>
          <div class="theme">
            <label for="nomPlace">Nom de la place :</label>
            <input id="nomPlace" type="text" class="inputText inputTheme" v-model.trim="nomPlace" required/>
          </div>
          <div>
            <label for="numeroSalle">Numéro de la salle :</label>
            <input id="numeroSalle" type="number" class="place" v-model.number="numeroSalle" required />
          </div>
          <div class="theme">
            <label for="nomSalle">Nom de la salle :</label>
            <input id="nomSalle" type="text" class="inputText inputTheme" v-model.trim="nomSalle" required/>
          </div>
          <div>
            <label for="numeroEtage">Numéro d'étage :</label>
            <input id="numeroEtage" type="number" class="place" v-model.number="numeroEtage" required />
          </div>
          <div>
            <label for="toiture">Toiture :</label>
            <input id="toiture" type="number" class="place" v-model.number="toiture" required />
          </div>
          <div>
            <label for="nombrePlace">Nombre de place :</label>
            <input id="nombrePlace" type="number" class="place" v-model.number="nombrePlace" required />
          </div>
        </div>
        <div class="validation">
          <button class="btn annuler" @click="$router.go(-1)">Annuler</button>
          <input type="submit" class="btn valider" value="Chercher" />
        </div>

    </form>
  </Page>
</template>

<script>
import Page from '@/components/Page.vue';

export default {
  name: 'RechercheLieu',
  data() {
    return {
      
    }
  },
  methods: {
    submitForm() {
      alert('nomParticipant='+this.nomParticipant+'\npaiement='+this.paiement);
      this.verifier()
    },
    verifier() {
      const propValue = {
        nomOrganisateur: this.e.nomOrganisateur,
        nomEvenement: this.e.nomEvenement,
        themeEvenement: this.e.themeEvenement,
        date: this.e.date,
        horaireDebut: this.e.horaireDebut,
        horaireFin: this.e.horaireFin,
        lieu: this.e.lieu,
        nombrePlace: this.e.nombrePlace,
        participation: this.e.participation,
        description: this.e.description,
        nomParticipant: this.nomParticipant,
        paiement: this.paiement
      }
      this.$router.push({ path: "/ticket", query: propValue });
    },
    
  },
  components: {
    Page,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Form{  
  background-color: rgba(1, 103, 255, 0.21);
  width: 40%;
  margin:auto;
  margin-top: 10px;
  min-height:70vh;
  padding: 20px 30px;
  font-size:20px;
}
.acompleter{
  text-align: left;
}
.acompleter div{
  margin: 20px 0;
}
label{
  margin-right: 10px;
}
input{
  background-color:transparent;
}
/***retirer les fleches des input type number****/
/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
} 
/* Chrome */
input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button { 
	-webkit-appearance: none;
	margin:0;
}
p, h3, label, input{
  font-size: 20px;
}
.inputText{
  border-width: 0 0 1px 0;
  width: 500px;
}
.validation{
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
.btn{
  border-radius: 50px;
  padding: 10px 30px;
  font-size: 20px;
  margin: 0 20px;
}
.annuler{
  background-color: transparent;
  color: rgba(1, 103, 255, 1);
  border-color: rgba(1, 103, 255, 1);
}
.valider{
  background-color: rgba(1, 103, 255, 1);
  color: white;
  border-color: rgba(1, 103, 255, 1);
}

</style>
