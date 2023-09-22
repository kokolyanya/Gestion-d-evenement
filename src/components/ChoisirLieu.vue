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
import {lieux} from '@/data/evenement-data.js';

export default {
  name: 'ChoisirLieu',
  props: {
    verification: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      lieux : lieux,
      
    }
  },
  methods: {    
    submitForm(item) {
      alert('pays='+this.lieux[item-1]["pays"]+'\nregion='+this.lieux[item-1]["region"]);
      this.$router.push({ path: "/creer", query: {id : item} });
      
    },
    voir(item) {
      alert(item);
      alert(this.lieux[item-1]["pays"]);
      this.$router.push({ path: "/voirLieu", query: {id : item} });
    },
    annuler() {
      alert('annuler');
      this.$router.push({ path: "/creer" });
    },
    
  },
  components: {
    Page,
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
  border: solid black 3px;
  margin: 20px 30px;
  padding-left: 20px;
  font-size: 20px;
  width: 90%;
}

.validation{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
}
.btn{
  border-radius: 50px;
  padding: 10px 30px;
  font-size: 20px;
  margin: 0 30px 20px 0;
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
}

</style>
