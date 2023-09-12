<template>
  <div class="home">
    <div class="evenements">
      <div v-for="e in evenement" :key="e" >
        <img :src="require('@/assets/' +e.fileName)" :alt="e.description" :title="e.nomEvenement"/>
      </div>
      <div v-for="e in evenement" :key="e" >
        <img :src="require('@/assets/' +e.fileName)" :alt="e.description" :title="e.nomEvenement"/>
      </div>
      <div v-for="e in evenement" :key="e" >
        <img :src="require('@/assets/' +e.fileName)" :alt="e.description" :title="e.nomEvenement"/>
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
  name: 'HomeView',
  components: {
    HelloWorld, Entete
  },
  data() {
    return {
      evenement : data,
    }
  }
}
</script>

<style scoped>
.home{
  background-color: white;
  height: 77vh;
  border-radius: 0 0 50px 50px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.home::-webkit-scrollbar { width: 0 !important } 

.evenements{
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;
  grid-auto-rows: minmax(100px, auto);
}
img{
  width: 400px;
  height : 400px;
}

</style>