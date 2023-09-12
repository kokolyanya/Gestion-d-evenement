<template>
  <form class="Form" @submit.prevent="submitForm">
      <h2 class="titreNouvel">Nouvel évènement</h2>
      <div class="acompleter">
        <div class="nom">
          <label for="nomOrganisateur">Nom de l'organisateur :</label>
          <input id="nomOrganisateur" type="text" class="inputText inputNom" v-model.trim="nomOrganisateur"/>
        </div>
        <div class="nom">
          <label for="nomEvenement">Nom de l'évènement :</label>
          <input id="nomEvenement" type="text" class="inputText inputNom" v-model.trim="nomEvenement"/>
        </div>
        <div class="theme">
          <label for="themeEvenement">Thème de l'évènement :</label>
          <input id="themeEvenement" type="text" class="inputText inputTheme" v-model.trim="themeEvenement"/>
        </div>
        <div class="temps">
          <div>
            <label for="date">Date :</label>
            <select v-model.number="jour">
              <option v-for="index in 30" :key="index" :value="index"><span v-if="index<10">0</span>{{index}}</option>
            </select>
            <select v-model.number="mois">
              <option v-for="index in 12" :key="index" :value="index" ><span v-if="index<10">0</span>{{index}}</option>
            </select>
            <select v-model.number="annee">
              <option v-for="index in 10" :key="index" :value="index+offset" >{{index+offset}}</option>
            </select>
          </div>
          <div class="horaire">
            <label for="horaire">Horaire :</label>
            <select v-model.number="heureDebut">
              <option v-for="index in 23" :key="index" :value="index"><span v-if="index<10">0</span>{{index}}</option>
            </select>
            <span> : </span>
            <select v-model.number="minuteDebut">
              <option v-for="index in 60" :key="index" :value="index-1"><span v-if="index<11">0</span>{{index-1}}</option>
            </select>
            <span> à </span>
            <select v-model.number="heureFin">
              <option v-for="index in 23" :key="index" :value="index"><span v-if="index<10">0</span>{{index}}</option>
            </select>
            <span> : </span>
            <select v-model.number="minuteFin">
              <option v-for="index in 60" :key="index" :value="index-1"><span v-if="index<11">0</span>{{index-1}}</option>
            </select>
          </div>
        </div>
        <div class="lieu">
          <label for="lieu">Lieu :</label>
          <input id="lieu" type="text" class="inputText inputLieu" v-model.trim="lieu" />
          <button class="chercherLieu">Chercher un lieu</button>
        </div>
        <div>
          <label for="nombrePlace">Places limitées :</label>
          <input id="nombrePlace" type="number" class="place" v-model.number="nombrePlace" />
        </div>
        <div>
          <label for="participation">Participation :</label>
          <input id="participation" type="text" class="inputText" v-model.trim="participation" />
        </div>
        <div>
          <label for="image">Image de l'affiche :</label>
          <input id="image" type="file" class="inputImage" v-on:change="handleFileChange" />
        </div>
        <div class="descri">
          <label for="description">Description :</label>
          <textarea id="description" rows="5" cols="50" v-model.trim="description" ></textarea>
        </div>
      </div>
      <div class="validation">
        <button class="btn annuler">Annuler</button>
        <input type="submit" class="btn valider" value="Valider" />
      </div>
  </form>
</template>

<script>
export default {
  name: 'Form',
   data() {
    return {
      offset: 2022,
      nomOrganisateur: '',
      nomEvenement: '',
      themeEvenement: '',
      jour:0,
      mois:0,
      annee:0,
      heureDebut:0,
      minuteDebut:0,
      heureFin:0,
      minuteFin:0,
      lieu:'',
      nombrePlace: 0,
      participation:'',
      fileName: null,
      description:''
    };
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      this.fileName = file.name;
    },
    submitForm() {
      let date=this.jour+'/'+this.mois+'/'+this.annee;
      let heure1=this.heureDebut+':'+this.minuteDebut;
      let heure2=this.heureFin+':'+this.minuteFin;
      alert('date='+date+'\nheure='+heure1+' à '+heure2);
      alert(this.fileName)
    },
    
    
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

.acompleter{
  text-align: left;
  font-size: 25px;
  
}
.acompleter div{
  margin: 10px 0;
}
.titreNouvel{
  font-size: 30px;
}
label{
  margin-right: 10px;
}
input, select{
  background-color:transparent;
  font-size: 20px;
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
.place{
  width: 75px;
  height: 25px;
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
.chercherLieu{
  background-color: black;
  color: white;
  padding: 5px 0px;
  border-radius: 50px;
  font-size: 20px;
  font-family: Kameron;
  width: 30%;
}
#description{
  display: block;
  width: 100%;
  background-color: rgba(237, 237, 237, 1);
  border:none;
  font-size: 20px;
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
