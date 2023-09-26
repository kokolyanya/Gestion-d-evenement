<template>
  <div class="Details">
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
        <button class="btn participer" @click="participer">Participer</button>
        <button class="btn modifier"  @click="modifier">Modifier</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
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
      this.$router.push({ path: "/creer", query: { idEvent : this.id} });
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
