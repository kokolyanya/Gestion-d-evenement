<template>
  <Page>
    <form class="unLieu" @submit.prevent="submitForm">
      <div class="lieu" >
        
      </div>       
      <div class="validation">
        <button class="btn annuler" @click="$router.go(-1)">Annuler</button>
        <input type="submit" class="btn valider" value="Choisir" />
      </div>
    </form>
  </Page>
</template>

<script>
import Page from '@/components/Page.vue';

export default {
  name: 'VoirLieu',
  components: {
    Page,
  },
  props: {
    id: Number,
  },
  data() {
    return {
      lieux : this.$store.state.lieux,      
    }
  },
  methods: {
    submitForm() {
      this.$router.push({ path: "/creer", query: {idLieu : this.id} });
    }    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.unLieu{
  
}
.lieu{
  border: solid black 2px;
  margin: auto;
  margin-top: 15px;
  width: 90%;
  min-height: 60vh;
}
.validation{
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 10px;
}
.btn{
  border-radius: 50px;
  padding: 5px;
  font-size: 10px;
  margin: 0 10px;
}
.annuler{
  background-color: transparent;
  color: rgba(1, 103, 255, 1);
  border-color: rgba(1, 103, 255, 1);
}
.valider{
  background-color: rgba(1, 103, 255, 1);
  color: white;
  border-color: rgba(1, 103, 255, 1);
}

@media only screen and (min-width: 500px){
  .lieu{
    border: solid black 2px;
    width: 95%;
  }
  .btn{
    font-size: 10px;
    padding: 5px 15px;
    margin: 0 15px;
  }
    
}
@media only screen and (min-width: 1000px){
  .lieu{
    border: solid black 3px;
    margin-top: 20px;
  }
  .btn{
    font-size: 15px;
    padding: 10px 30px;
    margin: 0 20px;
  }
  .validation{
    margin-right: 20px;
  }
}
@media only screen and (min-width: 1500px){
  .lieu{
    margin-top: 25px;
  }
  .btn{
    font-size: 20px;
  }
  .validation{
    margin-right: 25px;
  }
}

</style>
