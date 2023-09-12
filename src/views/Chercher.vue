<template>
  <div class="chercher">
    <div class="recherche">
      <input type="text" class="inputChercher" v-on:change="handleChange"/>
      <select >
        <option value="">Chercher un évènement</option>
        <option value="nom" class="apartirnom">À partir du nom de l'évènement</option>
        <option value="lieu">À partir d'un lieu</option>
        <option value="position">À partir de la position actuelle</option>
      </select>
    </div>
    <span>.</span>

    /*evenement.filter((e) => e.nomEvenement.includes( ));*/

    <div class="eventChercher" v-for="e in evenement" >
      <img :src="require('@/assets/' +e.fileName)" alt="e.nomEvenement" title="e.nomEvenement" />
      <div class="aproposEvent">
        <p>{{e.nomEvenement}}</p>
        <p>Thème : {{e.themeEvenement}}</p>
        <p>Lieu : {{e.lieu}}</p>
        <p>Date : {{e.jour}}/{{e.mois}}/{{e.annee}}</p>
      </div>
    </div>
    <div class="eventChercher" v-for="e in evenement" >
      <img :src="require('@/assets/' +e.fileName)" alt="e.nomEvenement" title="e.nomEvenement" />
      <div class="aproposEvent">
        <p>{{e.nomEvenement}}</p>
        <p>Thème : {{e.themeEvenement}}</p>
        <p>Lieu : {{e.lieu}}</p>
        <p>Date : {{e.jour}}/{{e.mois}}/{{e.annee}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Entete from '@/components/Entete.vue';
import data from '@/data/evenement-data.js';

export default {
  name: 'Chercher',
  components: {
    HelloWorld, Entete
  },
  data() {
    return {
      evenement : data,
    }
  },
  methods : {
    handleChange(event){
      alert(event.target.value)
    }
  }
}
</script>

<style scoped>
.chercher{
  background-color: white;
  height: 77vh;
  border-radius: 0 0 50px 50px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.chercher::-webkit-scrollbar { width: 0 !important }  

input,select{
  font-size: 20px;
}
.inputChercher{
  border-width: 0 0 5px 0;
  width: 60%;
  padding-top: 20px;
}
select{
  border-color: rgba(237, 237, 237, 1);
  background-color: rgba(237, 237, 237, 1);
  padding: 5px;
  width: 30%;
}
option{
  background-color: white;
}
.recherche{
  position: absolute;
  background-color: white;
  width: 98%;
}

.eventChercher{
  text-align: left;
  border: solid black 3px;
  margin: 40px 30px;
  display: flex;
}
.aproposEvent{
  margin-left: 20px;
  font-size: 20px;
}
img{
  width: 250px;
}

</style>