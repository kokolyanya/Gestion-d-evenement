<template>
  <div class="home">
    <div class="evenements">
      <div v-for="e in evenement" :key="e"  @click="detailler(e)">
        <img :src="require('@/assets/' +e.fileName)" :alt="e.description" :title="e.nomEvenement"/>
      </div>
      <div v-for="e in evenement" :key="e"  @click="detailler(e)">
        <img :src="require('@/assets/' +e.fileName)" :alt="e.description" :title="e.nomEvenement"/>
      </div>
      <div v-for="e in evenement" :key="e"  @click="detailler(e)">
        <img :src="require('@/assets/' +e.fileName)" :alt="e.description" :title="e.nomEvenement"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Details from '@/components/Details.vue';

export default {
  name: 'HomeView',
  components: {
    Details
  },
  data() {
    return {
      
    }
  },
  computed: {
    evenement(){
      this.$store.dispatch('loadEvenements');
      return this.$store.state.evenement;
    }
  },
  methods : {
    detailler(e) {
      const propValue = e.id;
      this.$router.push({ path: "/details", query: { value: propValue } });
    }
  }
}
</script>

<style scoped>
.home{
  background-color: white;
  height: 50vh;
  border-radius: 0 0 50px 50px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.home::-webkit-scrollbar { width: 0 !important } 

.evenements{
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  grid-auto-rows: minmax(100px, auto);
}
img{
  width: 200px;
  height : 200px;
}
@media only screen and (min-height: 500px) {
  /* For tablets: */
  .home{
    height: 60vh;
  }
}
@media only screen and (min-height: 800px) {
  /* For tablets: */
  .home{
    height: 75vh;
  }
}
@media only screen and (min-height: 1000px) {
  /* For tablets: */
  .home{
    height: 79vh;
  }
}
@media only screen and (min-width: 300px) {
  img{
    width: 300px;
    height : 300px;
  }
}
@media only screen and (min-width: 650px) {
  /* For tablets: */
  .evenements{
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);    
    grid-auto-rows: minmax(100px, auto);
  }
}
@media only screen and (min-width: 1000px) {
  /* For desktop: */
  img{
    width: 400px;
    height : 400px;
  }
}
@media only screen and (min-width: 1350px) {
  /* For desktop: */
  .evenements{
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
    grid-auto-rows: minmax(100px, auto);
  }
}
@media only screen and (min-width: 1900px) {
  /* For desktop: */
  .evenements{
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 50px;
    grid-auto-rows: minmax(100px, auto);
  }
}

</style>