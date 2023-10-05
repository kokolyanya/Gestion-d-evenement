<template>
  <Page>
    <Evenement :verification="verification"> 
      <button class="btn modifier" @click="modifier">Modifier</button>     
    </Evenement>
  </Page>
</template>

<script>
import Page from '@/components/Page.vue';
import Evenement from '@/components/Evenement.vue';

export default {
  name: 'EvenementCree',
  components: {
    Page, Evenement
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
        nombrePlace: '',
        participation: '',
        fileName: '',
        description: ''
      })
    }
  },
  methods: {
    modifier() {
      this.$router.go(-1);
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
.modifier{
  background-color: rgba(1, 103, 255, 1);
  color: white;
  border-color: rgba(1, 103, 255, 1);
}
@media only screen and (min-width: 500px){
  .btn{
    font-size: 15px;
    width: 50vw;
    padding: 5px 0;
    margin: 10px 0;
  }
}
@media only screen and (min-width: 1000px){
  .btn{
    font-size: 20px;
    width: 33vw;
    padding: 8px 0;
    margin: 15px 5px 15px 0;
  }
}
@media only screen and (min-width: 1500px){
  .btn{
    font-size: 25px;
    padding: 10px 0;
    margin: 20px 0;
  }
}
</style>
