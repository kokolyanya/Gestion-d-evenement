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
  components: {
    Page,
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
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ticket{
  display: flex;
  flex-direction: column;
}
.Form{  
  border: solid 2px black;
  width: 80%;
  margin: 10px auto;
  padding: 20px;
}
.entete{
  display: flex;
  justify-content: space-between;
}
.numero{
  border: solid 1px black;
  padding: 2px 10px;
}
.surLeParticipant{
  margin-top: 20px;
}
.acompleter, h3{
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
  margin-left: 15px;
}
p, h3{
  font-size: 10px;
}
.imprimer{
  border-radius: 50px;
  display: block;
  font-size: 10px;
  width: 90vw;
  padding: 5px 0;
  background-color: rgba(1, 103, 255, 1);
  color: white;
  border-color: rgba(1, 103, 255, 1);
  margin: auto auto 10px auto;
}

@media only screen and (min-width: 500px){
  .Form{
    width: 60%;
    padding: 20px 50px;
  }
  p, h3{
    font-size: 15px;
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
  .imprimer{
    font-size: 15px;
    padding: 5px 0;
    margin: auto auto 15px auto;
  }
}
@media only screen and (min-width: 1000px){
  .ticket{
    flex-direction: row;
  }
  .Form{
    width: 50%;
    padding: 30px 70px;
  }
  p, h3{
    font-size: 20px;
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
  .imprimer{
    margin: 10px 10px 0 0;
    height: 50px;
    font-size: 20px;
    width: 33vw;
  }
}

</style>
