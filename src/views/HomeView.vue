<template>
  <div class="home">
    Home page
    <p>a,{{evenement[0].fileName}}</p>
    <div class="evenements">
      <div>
        <img :src="require('@/assets/' +imagePath)" alt="imagePath"/>
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
      imagePath : data[0].fileName
    }
  }
}
</script>

<style scoped>
.home{
  background-color: white;
  height: 78vh;
  border-radius: 0 0 50px 50px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.home::-webkit-scrollbar { width: 0 !important }  

</style>