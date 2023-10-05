<template>
  <Page>
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
  </Page>
</template>

<script>
import Page from '@/components/Page.vue';

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
  },
  components: {
    Page,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.det{
  text-align: left;
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
}
img{
  height: 40vh;
  max-width: 80vw;
}
.aproposEvent{
  font-size: 10px;
}
.aproposEvent p{
  margin-top: 5px;
}
.btn{
  border-radius: 50px;
  font-size: 10px;
  display: block;
  width: 90vw;
  padding: 5px 0;
  margin: 10px 0;
}
.modifier{
  background-color: transparent;
  color: rgba(1, 103, 255, 1);
  border-color: rgba(1, 103, 255, 1);
}
.participer{
  margin-top: 30px;
  background-color: rgba(1, 103, 255, 1);
  color: white;
  border-color: rgba(1, 103, 255, 1);
}

@media only screen and (min-width: 500px){
  .det{
    margin: 20px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
  }
  img{
    height: 60vh;
    max-width: 40vw;
  }
  .aproposEvent{
    font-size: 15px;
  }
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
  img{
    height: 70vh;
    max-width: 60vw;
  }
  .aproposEvent{
    margin-left: 15px;
    font-size: 20px;
  }
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
  .aproposEvent{
    margin-left: 30px;
    font-size: 25px;
  }
  .btn{
    font-size: 25px;
    padding: 10px 0;
    margin: 20px 0;
  }
  .participer{
    margin-top: 100px;
  }
}

</style>
