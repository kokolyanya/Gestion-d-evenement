<template>
  <div class="creer">
    <Form/>
  </div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Form.vue';

export default {
  name: 'Creer',
  components: {
    Form
  }
}
</script>

<style scoped>
.creer{
  background-color: white;
  height: 77vh;
  border-radius: 0 0 50px 50px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.creer::-webkit-scrollbar { width: 0 !important }  

</style>