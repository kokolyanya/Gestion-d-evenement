<template>
  <Page>
    <Evenement :verification="e">      
      <button class="btn participer" @click="participer">Participer</button>
      <button class="btn modifier" @click="modifier">Modifier</button>
    </Evenement>
  </Page>
</template>

<script>
import Page from '@/components/Page.vue';
import Evenement from '@/components/Evenement.vue';

export default {
  name: 'Details',
  components: {
    Page, Evenement
  },
  props: {
    id: Number,
  },
  data() {
    return {
      e : this.$store.state.evenement[this.id-1],
    }
  },
  methods: {
    participer() {
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
        fileName: this.e.fileName,
        description: this.e.description
      }
      this.$router.push({ path: "/participer", query: propValue });
    },
    modifier() {
      this.$router.push({ path: "/creer", query: {idEvent: this.id} });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn{
  border-radius: 50px;
  font-size: 10px;
  display: block;
  width: 90vw;
  padding: 5px 0;
  margin: 10px 0;
}
.participer{
  margin-top: 30px;
  background-color: rgba(1, 103, 255, 1);
  color: white;
  border-color: rgba(1, 103, 255, 1);
}
.modifier{
  background-color: white;
  color: rgba(1, 103, 255, 1);
  border-color: rgba(1, 103, 255, 1);
}

@media only screen and (min-width: 500px){
  .btn{
    font-size: 15px;
    width: 50vw;
    padding: 5px 0;
    margin: 10px 0;
  }
  .participer{
    margin-top: 30px;
  }
}
@media only screen and (min-width: 1000px){
  .btn{
    font-size: 20px;
    width: 33vw;
    padding: 8px 0;
    margin: 15px 5px 15px 0;
  }
  .participer{
    margin-top: 30px;
  }
}
@media only screen and (min-width: 1500px){
  .btn{
    font-size: 25px;
    padding: 10px 0;
    margin: 20px 0;
  }
  .participer{
    margin-top: 70px;
  }
}

</style>
