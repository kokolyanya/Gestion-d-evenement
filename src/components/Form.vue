<template>
  <form class="Form" @submit.prevent="submitForm">
      <h2 class="titreNouvel">Nouvel évènement</h2>
      <div class="acompleter">
        <div class="nom">
          <label for="nomOrganisateur">Nom de l'organisateur :</label>
          <input id="nomOrganisateur" type="text" class="inputText inputNom" v-model.trim="nomOrganisateur" required/>
        </div>
        <div class="nom">
          <label for="nomEvenement">Nom de l'évènement :</label>
          <input id="nomEvenement" type="text" class="inputText inputNom" v-model.trim="nomEvenement" required/>
        </div>
        <div class="theme">
          <label for="themeEvenement">Thème de l'évènement :</label>
          <input id="themeEvenement" type="text" class="inputText inputTheme" v-model.trim="themeEvenement" required/>
        </div>
        <div class="temps">
          <div>
            <label for="date">Date :</label>
            <input type="date" v-model="date"  required/>
          </div>
          <div class="horaire">
            <label for="horaire">Horaire :</label>
            <input type="time" v-model="horaireDebut" required>
            <span> à </span>
            <input type="time" v-model="horaireFin" required>
          </div>
        </div>
        <div class="lieu">
          <label for="lieu">Lieu :</label>
          <input id="lieu" type="text" class="inputText inputLieu" v-model.trim="lieu" required/>
          <button class="chercherLieu" @click="rechercherLieu">Chercher un lieu</button>
        </div>
        <div>
          <label for="nombrePlace">Places limitées :</label>
          <input id="nombrePlace" type="number" class="place" v-model.number="nombrePlace" required />
        </div>
        <div>
          <label for="participation">Participation :</label>
          <input id="participation" type="text" class="inputText" v-model.trim="participation" required/>
        </div>
        <div>
          <label for="image">Image de l'affiche :</label>
          <input id="image" type="file" class="inputImage" v-on:change="handleFileChange" required />
        </div>
        <div class="descri">
          <label for="description">Description :</label>
          <textarea id="description" rows="5" cols="50" v-model.trim="description" required ></textarea>
        </div>
      </div>
      <div class="validation">
        <button class="btn annuler" @click="annuler">Annuler</button>
        <input type="submit" class="btn valider" value="Valider" />
      </div>
  </form>
</template>

<script>
export default {
  name: 'Form',
  props: {
    idLieu: Number,
    idEvent: Number
  },
  data() {
    return {
      offset: 2022,
      nomOrganisateur: this.idEvent? this.$store.state.evenement[this.idEvent-1]["nomOrganisateur"] : '',
      nomEvenement: this.idEvent? this.$store.state.evenement[this.idEvent-1]["nomEvenement"] : '',
      themeEvenement: this.idEvent? this.$store.state.evenement[this.idEvent-1]["themeEvenement"] : '',
      date: this.idEvent? this.$store.state.evenement[this.idEvent-1]["date"] : '',
      horaireDebut: this.idEvent? this.$store.state.evenement[this.idEvent-1]["horaireDebut"] : '' ,
      horaireFin: this.idEvent? this.$store.state.evenement[this.idEvent-1]["horaireFin"] : '',
      lieu: this.idLieu? 
        this.$store.state.lieux[this.idLieu-1]["nomPlace"]+","
        +this.$store.state.lieux[this.idLieu-1]["region"]+","
        +this.$store.state.lieux[this.idLieu-1]["pays"] 
        : 
        (this.idEvent? this.$store.state.evenement[this.idEvent-1]["lieu"] : ''),
      nombrePlace: this.idEvent? this.$store.state.evenement[this.idEvent-1]["nombrePlace"] : '',
      participation: this.idEvent? this.$store.state.evenement[this.idEvent-1]["participation"] : '',
      fileName: null,
      description: this.idEvent? this.$store.state.evenement[this.idEvent-1]["description"] : ''
    };
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      this.fileName = file.name;
    },
    submitForm() {
      this.verifier();
    },
    verifier() {
      const propValue = {
        id: this.idEvent? this.idEvent : this.$store.state.evenement.length+1,
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
      };
      if(this.idEvent){
        this.$store.commit('modifierEvenement', {
          idEvent: this.idEvent-1,
          nouvelleValeur: propValue
        });
      }
      else{
        this.$store.commit('nouvelEvenement', propValue);
      }
      this.$router.push({ path: "/evenementCree", query: propValue });
    },
    annuler() {
      this.$router.go(-1);
      //this.$router.push({ path: "/" });
    },
    rechercherLieu() {
      this.$router.push({ path: "/rechercheLieu" });
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Form{  
  background-color: rgba(1, 103, 255, 0.21);
  width: 80%;
  margin:auto;
  margin-top: 10px;
  min-height: 70vh;
  padding: 10px 20px;
}

.titreNouvel{
  font-size: 15px;
}
.acompleter{
  text-align: left;
  font-size: 10px;
}
.acompleter div{
  margin: 10px 0;
}
input, select{
  background-color:transparent;
  font-size: 8px;
}
#description{
  display: block;
  width: 100%;
  background-color: rgba(237, 237, 237, 1);
  border:none;
  font-size: 8px;
}
.chercherLieu{
  background-color: black;
  color: white;
  padding: 5px 0px;
  border-radius: 50px;
  font-size: 8px;
  font-family: Kameron;
  width: 30%;
}
label{
  margin-right: 10px;
}

/***retirer les drop-down des select****/
select{
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0 5px;
}

.inputText{
  border-width: 0 0 1px 0;
}
.inputImage{
  border-width: 10px;
}
.nom, .theme, .lieu{
  display: flex;
  justify-content: space-between;
}
.inputNom, .inputTheme{
  width: 65%;
}
.inputLieu{
  width: 60%;
}
.temps{
  display: flex;
  flex-direction: column;
}
.place{
  width: 75px;
  height: 10px;
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

.temps{
  display: flex;
}
.horaire{
  margin-left: 50px;
}
.validation{
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
.btn{
  border-radius: 50px;
  padding: 5px;
  font-size: 10px;
  margin: 0 10px;
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

@media only screen and (min-width: 500px){
  .Form{
    width: 60%;
    padding: 15px 25px;
  }
  .titreNouvel{
    font-size: 20px;
  }
  .acompleter{
    font-size: 15px;
  }
  input, select, #description, .chercherLieu, .btn{
    font-size: 10px;
  }
  .btn{
    padding: 5px 15px;
    margin: 0 15px;
  }
  .inputNom, .inputTheme{
    width: 70%;
  }
  .inputLieu{
    width: 55%;
  }
  .place{
    height: 15px;
  }
  
}
@media only screen and (min-width: 650px){
  .temps{
    flex-direction: row;
  }
}
@media only screen and (min-width: 1000px){
  .Form{
    width: 50%;
    padding: 20px 30px;
  }
  .titreNouvel{
    font-size: 25px;
  }
  .acompleter{
    font-size: 20px;
  }
  input, select, #description, .chercherLieu, .btn{
    font-size: 15px;
  }
  .btn{
    padding: 10px 30px;
    margin: 0 20px;
  }
  .inputNom, .inputTheme{
    width: 58%;
  }
  .inputLieu{
    width: 55%;
  }
  .place{
    height: 20px;
  }
}
@media only screen and (min-width: 1500px){
  .Form{
    width: 40%;
  }
  .titreNouvel{
    font-size: 30px;
  }
  .acompleter{
    font-size: 25px;
  }
  input, select, #description, .chercherLieu, .btn{
    font-size: 20px;
  }
  .inputNom, .inputTheme{
    width: 65%;
  }
  .inputLieu{
    width: 60%;
  }
  .place{
    height: 25px;
  }
}

</style>
