<template>
  <Page>
    <Form>
      <form @submit.prevent="submitForm">
        <h2 class="titreNouvel">Description du lieu</h2>
        <div class="acompleter">
          <div class="nom">
            <label for="pays">Pays :</label>
            <input id="pays" type="text" class="inputText inputNom" v-model.trim="pays" required/>
          </div>
          <div class="nom">
            <label for="region">Région :</label>
            <input id="region" type="text" class="inputText inputNom" v-model.trim="region" />
          </div>
          <div class="nom">
            <label for="nomPlace">Nom de la place :</label>
            <input id="nomPlace" type="text" class="inputText inputTheme" v-model.trim="nomPlace" />
          </div>
          <div>
            <label for="numeroSalle">Numéro de la salle :</label>
            <input id="numeroSalle" type="number" class="numero" v-model.number="numeroSalle"  />
          </div>
          <div class="nom">
            <label for="nomSalle">Nom de la salle :</label>
            <input id="nomSalle" type="text" class="inputText inputTheme" v-model.trim="nomSalle" />
          </div>
          <div>
            <label for="numeroEtage">Numéro d'étage :</label>
            <input id="numeroEtage" type="number" class="numero" v-model.number="numeroEtage"  />
          </div>
          <div>
            <label for="toiture">Toiture :</label>
            <input type="radio" id="oui" class="toiture" v-model.trim="toiture" name="toiture" value="oui" />
            <label for="oui">oui</label>
            <input type="radio" id="non" class="toiture" v-model.trim="toiture" name="toiture" value="non" />
            <label for="non">non</label>
          </div>
          <div>
            <label for="nombrePlace">Nombre de place :</label>
            <input id="nombrePlace" type="number" class="nombre" v-model.number="nombrePlace"  />
          </div>
        </div>
        <div class="validation">
          <button class="btn annuler" @click="$router.go(-1)">Annuler</button>
          <input type="submit" class="btn valider" value="Chercher" />
        </div>
      </form>
    </Form>
  </Page>
</template>

<script>
import Page from '@/components/Page.vue';
import Form from '@/components/Form.vue';

export default {
  name: 'RechercheLieu',
  components: {
    Page, Form
  },
  data() {
    return {
      pays:'',
      region:'',
      nomPlace:'',
      nomSalle:'',
      numeroSalle:'',
      numeroEtage:'',
      toiture:'',
      nombrePlace:'',
      lieuSuggere: [],
      lieux : this.$store.state.lieux,
    }
  },
  methods: {
    submitForm() {
      this.filtrer();
      this.envoyer();
    },
    envoyer() {
      const propValue = this.lieuSuggere;
      this.$router.push({ path: "/choisirLieu", query: propValue });
    },
    filtrer(){
      const lieuCherche = {
        pays:this.pays,
        region:this.region,
        nomPlace:this.nomPlace,
        nomSalle:this.nomSalle,
        numeroSalle:this.numeroSalle,
        numeroEtage:this.numeroEtage,
        toiture:this.toiture,
        nombrePlace:this.nombrePlace
      }
      const filteredLieux = this.lieux.filter(e => {
        for (let key in e) {
          if (lieuCherche[key] != ''){
            if (e[key].toString().includes(lieuCherche[key])) {
              return true;
            }
          }
        }
        return false;
      });
      for (let item in filteredLieux) {
        this.lieuSuggere.push(filteredLieux[item].id);
      };

    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.acompleter{
  text-align: left;
  font-size: 10px;
}
.acompleter div{
  margin: 10px 0;
}
.titreNouvel{
  font-size: 15px;
}
label{
  margin-right: 5px;
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
label, input, .btn{
  font-size: 8px;
}
.inputText{
  border-width: 0 0 1px 0;
  width: 75%;
}
.numero{
  width: 25px;
}
.nombre{
  width: 75px;
}
.numero, .nombre{
  height: 10px;
}
.nom{
  display: flex;
  justify-content: space-between;
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
  .titreNouvel{
    font-size: 20px;
  }
  .acompleter, input, label{
    font-size: 15px;
  }
  .btn{
    font-size: 10px;
    padding: 5px 15px;
    margin: 0 15px;
  }
  .inputText{
    width: 70%;
  }
  .numero, .nombre{
    height: 15px;
  }
    
}
@media only screen and (min-width: 1000px){
  .titreNouvel{
    font-size: 25px;
  }
  .acompleter, input, label{
    font-size: 20px;
  }
  .btn{
    font-size: 15px;
    padding: 10px 30px;
    margin: 0 20px;
  }
  label{
    margin-right: 10px;
  }
  .numero, .nombre{
    height: 20px;
  }
}
@media only screen and (min-width: 1500px){
  .titreNouvel{
    font-size: 30px;
  }
  .acompleter, input, label{
    font-size: 25px;
  }
  .btn{
    font-size: 20px;
  }
  .inputText{
    width: 68%;
  }
  .numero, .nombre{
    height: 25px;
  }

}
</style>
