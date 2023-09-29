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
  height: 20vh;
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
@media only screen and (min-width: 300px) {
  /* For tablets: */
  .home{
    height: 40vh;
  }
}
@media only screen and (min-width: 525px) {
  /* For tablets: */
  .home{
    height: 65vh;
  }
}
@media only screen and (min-width: 1000px) {
  /* For desktop: */
  .home{
    height: 70vh;
  }
}

</style>