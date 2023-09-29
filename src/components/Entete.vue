<template>
  <div class="entete">
    <h1>GESTION D'EVENEMENTS</h1>    
  </div>
</template>

<script>
export default {
  name: 'Entete',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin-top: 5px;
}
@media only screen and (min-width: 525px) {
  /* For tablets: */
  h1{
    font-size: 30px;
    margin-top: 20px;
  }
}
@media only screen and (min-width: 1000px) {
  /* For desktop: */
  h1{
    font-size: 35px;
    margin-top: 50px;
  }
}
</style>
