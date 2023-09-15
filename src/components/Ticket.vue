<template>
  <Page>
    <div class="ticket">
      <div class="Form" id="aImprimer">
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
              <div>
                <p>Nom du participant : {{e.nomParticipant}}</p>
              </div>
              <div>
                <p>Paiement : {{e.paiement}}</p>
              </div>
            </div>
          </div>
      </div>
      <button class="imprimer" @click="print">Imprimer</button>
    </div>
  </Page>
</template>

<script>
import Page from '@/components/Page.vue';
import html2pdf from 'html2pdf.js';

export default {
  name: 'Ticket',
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
        description: '',
        nomParticipant: '',
        paiement: 0
      })
    }
  },
  data() {
    return {
      e : this.verification,
      aujourdhui : new Date().toDateString()
    }
  },
  methods: {
    print() {
      let element = document.getElementById('aImprimer'); // Remplacez '' par l'id du div que vous voulez imprimer
      let opt = {
        margin: 1,
        filename: 'ticket.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' }
      };
      html2pdf().from(element).set(opt).save();
    }
    
  },
  components: {
    Page,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ticket{
  display: flex;
  justify-content: center;
}
.Form{  
  border: solid 2px black;
  width: 30vw;
  margin-top: 10px;
  padding: 30px 70px;
}
.entete{
  display: flex;
  justify-content: space-between;
}
.numero{
  border: solid 1px black;
  padding: 5px 20px;
}
.surLeParticipant{
  margin-top: 50px;
}
.acompleter{
  text-align: left;
  
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
  margin-left: 50px;
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
p, h3, label, input{
  font-size: 20px;
}
.inputText{
  border-width: 0 0 1px 0;
  width: 500px;
}
.participant{
  margin-bottom: 5px;
}
.paiement{
  width: 50%;
  height: 25px;
}
.imprimer{
  border-radius: 50px;
  font-size: 20px;
  display: block;
  width: 500px;
  height: 50px;
  padding: 10px 0;
  margin: 20px 40px;
  background-color: rgba(1, 103, 255, 1);
  color: white;
  border-color: rgba(1, 103, 255, 1);
}

</style>
