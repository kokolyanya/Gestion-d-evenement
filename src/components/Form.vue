<template>
  <div class="Form">
    <slot></slot>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Form',
  
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Form{  
  background-color: rgba(1, 103, 255, 0.21);
  width: 80%;
  margin:auto;
  margin-top: 10px;
  min-height:70vh;
  padding: 10px 20px;
}

@media only screen and (min-width: 500px){
  .Form{
    width: 60%;
    padding: 15px 25px;
  }
}
@media only screen and (min-width: 1000px){
  .Form{
    width: 50%;
    padding: 20px 30px;
  }
}
@media only screen and (min-width: 1500px){
  .Form{
    width: 40%;
  }
}

</style>
