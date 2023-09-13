<template>
  <div class="Details">
    <div class="det">
      <img :src="require('@/assets/henriBrisson.png')" alt="nomEvenement" title="nomEvenement" />
      <div class="aproposEvent">
        <p>Nom de l'évènement : {{ e.nomEvenement }}</p>
        <p>Nom de l'organisateur : {{ e.nomOrganisateur }}</p>
        <p>Thème : {{ e.themeEvenement }}</p>
        <p>Description : {{ e.description }}</p>
        <p>Date : {{e.jour}}/{{e.mois}}/{{e.annee}}</p>
        <p>Heure : {{e.heureDebut}}:{{e.minuteDebut}} à {{e.heureFin}}:{{e.minuteFin}}</p>
        <p>Lieu : {{e.lieu}}</p>
        <p>Nombre de place : {{e.nombrePlace}}</p>
        <p>Participation : {{e.participation}}</p>
        <button class="btn participer" @click="afficher">Participer</button>
        <button class="btn modifier">Modifier</button>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/data/evenement-data.js';

export default {
  name: 'Details',
  props: {
    id: Number,
  },
  data() {
    return {
      e : data[this.id-1],
    }
  },
  methods: {
    afficher() {
      alert(this.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Details{
  background-color: white;
  height: 77vh;
  border-radius: 0 0 50px 50px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.Details::-webkit-scrollbar { width: 0 !important } 
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
  background-color: transparent;
  color: rgba(1, 103, 255, 1);
  border-color: rgba(1, 103, 255, 1);
  bottom: 50px;
}
.participer{
  background-color: rgba(1, 103, 255, 1);
  color: white;
  border-color: rgba(1, 103, 255, 1);
  bottom: 110px;
}
img{
  height: 70vh;
  max-width: 60vw;
}

</style>
