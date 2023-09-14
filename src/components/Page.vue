<template>
  <div class="page">
    <slot></slot>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Page',
  
}
</script>

<style scoped>
.page{
  background-color: white;
  height: 77vh;
  border-radius: 0 0 50px 50px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.page::-webkit-scrollbar { width: 0 !important }  

</style>