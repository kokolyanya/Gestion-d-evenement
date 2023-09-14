<template>
  <Page>
    <form class="Form" @submit.prevent="submitForm">
        <div class="entete">
          <p>001</p>
          <p>Date : </p>
        </div>
        <h3>Informations sur l'évènement :</h3>
        <div class="acompleter">
          <div class="nom">
            <p>Nom de l'organisateur : {{ e.nomOrganisateur }}</p>
          </div>
          <div class="nom">
            <p>Nom de l'évènement : {{ e.nomEvenement }}</p>
          </div>
          <div class="theme">
            <p>Thème de l'évènement : {{ e.themeEvenement }}</p>
          </div>
          <div class="temps">
            <div>
              <p>Date : {{e.date}}</p>
            </div>
            <div class="horaire">
              <p>Heure : {{e.horaireDebut}} à {{e.horaireFin}}</p>
            </div>
          </div>
          <div class="lieu">
            <p>Lieu : {{e.lieu}}</p>
          </div>
          <div>
            <p>Nombre de place : {{e.nombrePlace}}</p>
          </div>
          <div>
            <p>Participation : {{e.participation}}</p>
          </div>
          <div class="descri">
            <p>Description : {{ e.description }}</p>
          </div>
        </div>
        <h3>Informations sur le participant :</h3>
        <div class="acompleter" >
          <div class="nom">
            <label for="nomParticipant">Nom du participant :</label>
            <input id="nomParticipant" type="text" class="inputText inputNom" v-model.trim="nomParticipant" required/>
          </div>
          <div>
            <label for="nombrePlace">Paiement :</label>
            <input id="nombrePlace" type="number" class="place" v-model.number="nombrePlace" required />
          </div>
        </div>

        <div class="validation">
          <button class="btn annuler" @click="annuler">Annuler</button>
          <input type="submit" class="btn valider" value="Valider" />
        </div>

    </form>
  </Page>
</template>

<script>
import Page from '@/components/Page.vue';

export default {
  name: 'Participer',
  props: {
    verification: {
      type: Object,
      required: true,
      default: () => ({
        nomOrganisateur: '',
        nomEvenement: '',
        themeEvenement: '',
        date: '',
        horaireDebut: '',
        horaireFin: '',
        lieu: '',
        nombrePlace: 0,
        participation: '',
        fileName: '',
        description: ''
      })
    }
  },
  data() {
    return {
      e : this.verification,
    }
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      this.fileName = file.name;
    },
    submitForm() {
      alert('date='+this.date+'\nheure='+this.horaireDebut+' à '+this.horaireFin);
      alert(this.fileName);
      this.verifier();
    },
    verifier() {
      const propValue = {
        nomOrganisateur: this.nomOrganisateur,
        nomEvenement: this.nomEvenement,
        themeEvenement: this.themeEvenement,
        date: this.date,
        horaireDebut: this.horaireDebut,
        horaireFin: this.horaireFin,
        lieu: this.lieu,
        nombrePlace: this.nombrePlace,
        participation: this.participation,
        fileName: this.fileName,
        description: this.description
      }
      this.$router.push({ path: "/evenementCree", query: propValue });
    },
    annuler() {
      alert('annuler');
      this.$router.push({ path: "/" });
    }
    
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
}
.entete{
  display: flex;
  justify-content: space-between;
}
.acompleter{
  text-align: left;
  
}
h3{
  text-align: left;
}
label{
  margin-right: 10px;
}
input, select{
  background-color:transparent;
  font-size: 20px;
}
.inputText{
  border-width: 0 0 1px 0;
}
.place{
  width: 75px;
  height: 25px;
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
