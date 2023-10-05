<template>
  <Page>
    <Form>
      <form @submit.prevent="submitForm">
        <div class="entete">
          <p class="numero">001</p>
          <p>Date : {{aujourdhui}} </p>
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
              <p>Date : {{e.date}}</p>
              <p class="heure">Heure : {{e.horaireDebut}} à {{e.horaireFin}}</p>
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
        <div class="surLeParticipant">
          <h3>Informations sur le participant :</h3>
          <div class="acompleter" >
            <div class="participant">
              <label for="nomParticipant">Nom du participant :</label>
              <input id="nomParticipant" type="text" class="inputText" v-model.trim="nomParticipant" required/>
            </div>
            <div>
              <label for="paiement">Paiement :</label>
              <input id="paiement" type="number" class="paiement" v-model.number="paiement" required placeholder="entrer votre numero de compte..."/>
            </div>
          </div>
        </div>

        <div class="validation">
          <button class="btn annuler" @click="annuler">Annuler</button>
          <input type="submit" class="btn valider" value="Valider" />
        </div>
      </form>
    </Form>
  </Page>
</template>

<script>
import Page from '@/components/Page.vue';
import Form from '@/components/Form.vue';

export default {
  name: 'Participer',
  components: {
    Page, Form
  },
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
      aujourdhui : new Date().toDateString(),
      nomParticipant : '',
      paiement : ''  
    }
  },
  methods: {
    submitForm() {
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
    annuler() {
      this.$router.push({ path: "/" });
      /*$router.go(-1)*/
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p, h3, label{
  font-size: 10px;
}
input{
  font-size: 8px;
}
.entete{
  display: flex;
  justify-content: space-between;
}
.numero{
  background-color: rgba(237, 237, 237, 1);
  padding: 2px 10px;
}
.acompleter{
  text-align: left;  
}
.surLeParticipant{
  margin-top: 20px;
}
.temps{
  display: flex;
}
p{
  margin: 5px 0;
}
.temps p{
  margin-top: 0;
  margin-bottom :0;
}
.heure{
  margin-left: 15px;
}
h3{
  text-align: left;
}
label{
  margin-right: 10px;
}
input{
  background-color:transparent;
}
.inputText{
  border-width: 0 0 1px 0;
  width: 50%;
}
.participant{
  margin-bottom: 5px;
}
.paiement{
  width: 50%;
  height: 10px;
}
.validation{
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
.btn{
  border-radius: 50px;
  padding: 5px 10px;
  font-size: 8px;
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
  p, h3, label{
    font-size: 15px;
  }
  input{
    font-size: 10px;
  }
  .numero{
    padding: 3px 15px;
  }
  .surLeParticipant{
    margin-top: 30px;
  }
  .heure{
    margin-left: 30px;
  }
  .paiement{
    height: 15px;
  }
  .btn{
    padding: 5px 15px;
    font-size: 10px;
  }
}
@media only screen and (min-width: 1000px){
  p, h3, label{
    font-size: 20px;
  }
  input{
    font-size: 15px;
  }
  .numero{
    padding: 5px 20px;
  }
  .surLeParticipant{
    margin-top: 40px;
  }
  .heure{
    margin-left: 50px;
  }
  .paiement{
    height: 20px;
  }
  .btn{
    padding: 10px 30px;
    font-size: 15px;
    margin: 0 20px;
  }
}
@media only screen and (min-width: 1500px){
  p, h3, label{
    font-size: 25px;
  }
  input{
    font-size: 20px;
  }
  .surLeParticipant{
    margin-top: 50px;
  }
  .paiement{
    height: 25px;
  }
  .btn{
    font-size: 20px;
  }

}

</style>
