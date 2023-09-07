<template>
  <div class="Form">
      <h2 class="titreNouvel">Nouvel évènement</h2>
      <div class="acompleter">
        <div class="nom">
          <label for="nomOrganisateur">Nom de l'organisateur :</label>
          <input id="nomOrganisateur" type="text" class="inputText inputNom" />
        </div>
        <div class="nom">
          <label for="nomEvenement">Nom de l'évènement :</label>
          <input id="nomEvenement" type="text" class="inputText inputNom" />
        </div>
        <div class="theme">
          <label for="themeEvenement">Thème de l'évènement :</label>
          <input id="themeEvenement" type="text" class="inputText inputTheme" />
        </div>
        <div class="temps">
          <div>
            <label for="date">Date :</label>
            <select >
              <option v-for="index in 31" :key="index" ><span v-if="index<10">0</span>{{index}}</option>
            </select>
            <select >
              <option v-for="index in 12" :key="index" ><span v-if="index<10">0</span>{{index}}</option>
            </select>
            <select >
              <option v-for="index in 10" :key="index" >{{index+offset}}</option>
            </select>
          </div>
          <div class="horaire">
            <label for="horaire">Horaire :</label>
            <select >
              <option v-for="index in 23" :key="index" ><span v-if="index<10">0</span>{{index}}</option>
            </select>
            <span> : </span>
            <select >
              <option v-for="index in 60" :key="index" ><span v-if="index<11">0</span>{{index-1}}</option>
            </select>
            <span> à </span>
            <select >
              <option v-for="index in 23" :key="index" ><span v-if="index<10">0</span>{{index}}</option>
            </select>
            <span> : </span>
            <select >
              <option v-for="index in 60" :key="index" ><span v-if="index<11">0</span>{{index-1}}</option>
            </select>
          </div>
        </div>
        <div class="lieu">
          <label for="lieu">Lieu :</label>
          <input id="lieu" type="text" class="inputText inputLieu" />
          <button class="chercherLieu">Chercher un lieu</button>
        </div>
        <div>
          <label for="nombrePlace">Places limitées :</label>
          <input id="nombrePlace" type="number" class="place"/>
        </div>
        <div>
          <label for="participation">Participation :</label>
          <input id="participation" type="text" class="inputText" />
        </div>
        <div>
          <label for="image">Images :</label>
          <input id="image" type="file" class="inputImage"/>
        </div>
        <div class="descri">
          <label for="description">Description :</label>
          <textarea id="description" rows="5" cols="50"></textarea>
        </div>
      </div>
      <div class="validation">
        <button class="btn annuler">Annuler</button>
        <button class="btn valider">Valider</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Entete',
   data() {
    return {
      offset: 2022,
    };
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
