<template>
  <div class="EvenementCree">
    <div class="det">
      <img :src="require('@/assets/'+e.fileName)" :alt="e.nomEvenement" :title="e.nomEvenement" />
      <div class="aproposEvent">
        <p>Nom de l'évènement : {{ e.nomEvenement }}</p>
        <p>Nom de l'organisateur : {{ e.nomOrganisateur }}</p>
        <p>Thème : {{ e.themeEvenement }}</p>
        <p>Description : {{ e.description }}</p>
        <p>Date : {{e.date}}</p>
        <p>Heure : {{e.horaireDebut}} à {{e.horaireFin}}</p>
        <p>Lieu : {{e.lieu}}</p>
        <p>Nombre de place : {{e.nombrePlace}}</p>
        <p>Participation : {{e.participation}}</p>
        <button class="btn modifier" @click="modifier">Modifier</button>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/data/evenement-data.js';
import PropTypes from 'prop-types';

export default {
  name: 'EvenementCree',
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
    modifier() {
      alert("Modifier "+this.verification.nomEvenement+" en cours");
      /*this.$router.push({ path: "/creer" });*/
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.EvenementCree{
  background-color: white;
  height: 77vh;
  border-radius: 0 0 50px 50px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.EvenementCree::-webkit-scrollbar { width: 0 !important } 
.det{
  text-align: left;
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
}
.aproposEvent{
  margin-left: 50px;
  font-size: 20px;
}
.btn{
  border-radius: 50px;
  font-size: 20px;
  display: block;
  width: 500px;
  padding: 10px 0;
  margin: 20px 0;
  position : absolute;
}
.modifier{
  background-color: rgba(1, 103, 255, 1);
  color: white;
  border-color: rgba(1, 103, 255, 1);
  bottom: 50px;
}
img{
  height: 70vh;
  max-width: 60vw;
}

</style>
