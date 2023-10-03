<template>
  <div class="chercher">
    <div class="recherche">
      <span class="material-icons">search</span> 
      <input type="text" class="inputChercher" v-on:input="handleChange"/>
      <select v-model="selected">
        <option value="">Chercher un évènement</option>
        <option value="nomEvenement" class="apartirnom">À partir du nom de l'évènement</option>
        <option value="lieu">À partir d'un lieu</option>
        <option disabled value="position">À partir de la position actuelle</option>
      </select>
    </div>
    <span>.</span>
    <div class="eventChercher" v-for="e in eventFiltre" @click="detailler(e)">
      <img :src="require('@/assets/' +e.fileName)" alt="e.nomEvenement" title="e.nomEvenement" />
      <div class="aproposEvent">
        <p>{{e.nomEvenement}}</p>
        <p>Thème : {{e.themeEvenement}}</p>
        <p>Lieu : {{e.lieu}}</p>
        <p>Date : {{e.date}}</p>
      </div>
    </div>
    <div class="eventChercher" v-for="e in eventFiltre" @click="detailler(e)">
      <img :src="require('@/assets/' +e.fileName)" alt="e.nomEvenement" title="e.nomEvenement" />
      <div class="aproposEvent">
        <p>{{e.nomEvenement}}</p>
        <p>Thème : {{e.themeEvenement}}</p>
        <p>Lieu : {{e.lieu}}</p>
        <p>Date : {{e.date}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Entete from '@/components/Entete.vue';

export default {
  name: 'Chercher',
  components: {
    Entete
  },
  data() {
    return {
      evenement : this.$store.state.evenement,
      eventFiltre : [],
      selected : "",
    }
  },
  methods : {
    handleChange(event){     
      this.filtrer(event.target.value);      
    },
    filtrer(filtreur){
      let s=this.selected;
      if(!s) this.eventFiltre = this.evenement.filter(e => {
        for (let key in e) {
          if (typeof e[key] === 'string' && e[key].includes(filtreur)) {
            return true;
          }
        }
        return false;
      });
      else this.eventFiltre = this.evenement.filter(e => e[s].includes(filtreur));
    },
    detailler(e) {
      const propValue = e.id;
      this.$router.push({ path: "/details", query: { value: propValue } });
    }
  }
}
</script>

<style scoped>
.chercher{
  background-color: white;
  height: 50vh;
  border-radius: 0 0 50px 50px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.chercher::-webkit-scrollbar { width: 0 !important }  

input, select, option, .aproposEvent{
  font-size: 8px;
}
.inputChercher{
  border-width: 0 0 2px 0;
  width: 40%;
  padding-top: 10px;
}
select{
  border-color: rgba(237, 237, 237, 1);
  background-color: rgba(237, 237, 237, 1);
  padding: 3px;
  width: 40%;
}
option{
  background-color: white;
}
.recherche{
  position: absolute;
  background-color: white;
  width: 90%;
}

.eventChercher{
  text-align: left;
  border: solid black 1px;
  margin: 20px 15px;
  display: flex;
}
.aproposEvent{
  margin-left: 10px;
}
img{
  width: 100px;
}
@media only screen and (min-height: 500px) {
  /* For tablets: */
  .chercher{
    height: 60vh;
  }
}
@media only screen and (min-height: 800px) {
  /* For tablets: */
  .chercher{
    height: 75vh;
  }
}
@media only screen and (min-height: 1000px) {
  /* For tablets: */
  .chercher{
    height: 79vh;
  }
}
@media only screen and (min-width: 500px){
  input, select, option, .aproposEvent{
    font-size: 10px;
  }
  select{
    width: 30%;
  }
  .inputChercher{
    border-width: 0 0 3px 0;
    width: 50%;
    padding-top: 15px;
  }
  .recherche{
    width: 95%;
  }
  img{
    width: 150px;
  }
  .eventChercher{
    border: solid black 2px;
    margin: 20px 15px;
  }
}
@media only screen and (min-width: 1000px){
  input, select, option, .aproposEvent{
    font-size: 15px;
  }
  select{
    padding: 5px;
  }
  .inputChercher{
    border-width: 0 0 4px 0;
    width: 60%;
  }
  .recherche{
    width: 98%;
  }
  .aproposEvent{
    margin-left: 20px;
  }
  img{
    width: 250px;
  }
  .eventChercher{
    border: solid black 3px;
    margin: 30px 20px;
  }
}
@media only screen and (min-width: 1500px){
  input, select, option, .aproposEvent{
    font-size: 20px;
  }
  .inputChercher{
    border-width: 0 0 5px 0;
    padding-top: 20px;
  }
  .eventChercher{
    margin: 40px 30px;
  }
}

</style>