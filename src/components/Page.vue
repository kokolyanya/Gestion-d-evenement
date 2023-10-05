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
  height: 40vh;
  border-radius: 0 0 50px 50px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.page::-webkit-scrollbar { width: 0 !important }  

@media only screen and (min-height: 400px) {
  /* For tablets: */
  .page{
    height: 50vh;
  }
}
@media only screen and (min-height: 500px) {
  /* For tablets: */
  .page{
    height: 60vh;
  }
}
@media only screen and (min-height: 650px) {
  /* For tablets: */
  .page{
    height: 70vh;
  }
}
@media only screen and (min-height: 800px) {
  /* For tablets: */
  .page{
    height: 75vh;
  }
}
@media only screen and (min-height: 1000px) {
  /* For tablets: */
  .page{
    height: 79vh;
  }
}

</style>