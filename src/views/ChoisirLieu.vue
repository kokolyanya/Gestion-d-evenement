<template>
  <Page>
    <p class="annuler" @click="annuler"><span class="material-icons">reply</span>Annuler</p>
    <form class="unLieu" @submit.prevent="submitForm(item)" v-for="item in verification">
      <div class="lieuChercher">
        <p>Nom de la salle : {{ this.lieux[item-1]["nomSalle"] }}</p>
        <p>Nom de la place : {{ this.lieux[item-1]["nomPlace"] }}</p>
        <p>Région : {{ this.lieux[item-1]["region"] }}</p>
        <p>Pays : {{ this.lieux[item-1]["pays"] }}</p>
      </div>       
      <div class="validation">
        <input type="submit" class="btn valider" value="Choisir" />
        <button class="btn voir" @click="voir(item)">Voir</button>
      </div>
    </form>
  </Page>
</template>

<script>
import Page from '@/components/Page.vue';

export default {
  name: 'ChoisirLieu',
  components: {
    Page,
  },
  props: {
    verification: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      lieux : this.$store.state.lieux,
      
    }
  },
  methods: {    
    submitForm(item) {
      this.$router.push({ path: "/creer", query: {idLieu : item} });
      
    },
    voir(item) {
      this.$router.push({ path: "/voirLieu", query: {id : item} });
    },
    annuler() {
      this.$router.push({ path: "/creer" });
    },
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.unLieu{
  display: flex;
}

.lieuChercher{
  text-align: left;
  border: solid black 1px;
  margin: 5px 10px;
  padding-left: 10px;
  font-size: 10px;
  width: 95%;
}

.validation{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.btn{
  border-radius: 50px;
  padding: 5px;
  font-size: 8px;
  margin: 0 10px 5px 0;
}
.voir{
  background-color: transparent;
  color: rgba(1, 103, 255, 1);
  border-color: rgba(1, 103, 255, 1);
}
.valider{
  background-color: rgba(1, 103, 255, 1);
  color: white;
  border-color: rgba(1, 103, 255, 1);
}
.annuler{
  text-align: left;
  margin:10px 0 0 30px;
  font-size: 10px;
}

@media only screen and (min-width: 500px){
  .lieuChercher{
    text-align: left;
    border: solid black 2px;
    margin: 10px 15px;
    padding-left: 10px;
    font-size: 15px;
  }
  .btn{
    padding: 5px 15px;
    margin: 5px 15px 10px 0;
    font-size: 10px;
  }
  .annuler{
    font-size: 15px;
  }
}
@media only screen and (min-width: 1000px){
  .lieuChercher{
    text-align: left;
    border: solid black 3px;
    margin: 15px 20px;
    padding-left: 20px;
    font-size: 20px;
  }
  .btn{
    padding: 10px 30px;
    margin: 5px 20px 15px 0;
    font-size: 15px;
  }
  .annuler{
    font-size: 20px;
  }
}
@media only screen and (min-width: 1500px){
  .lieuChercher{
    text-align: left;
    border: solid black 3px;
    margin: 20px 30px;
    padding-left: 20px;
    font-size: 25px;
    width: 90%;
  }
  .btn{
    padding: 10px 35px;
    margin: 5px 25px 20px 0;
    font-size: 20px;
  }
  .annuler{
    font-size: 25px;
  }
}

</style>
