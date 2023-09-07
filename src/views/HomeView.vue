<template>
  <div class="home">
    Home page
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Entete from '@/components/Entete.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld, Entete
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