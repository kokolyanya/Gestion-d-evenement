<template>
  <Page>
    <form class="unLieu" @submit.prevent="submitForm">
      <div class="lieu"  >
        
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
  props: {
    verification: {
      type: Object,
      required: true,
      default: () => ({
        pays:'',
        region:'',
        nomPlace:'',
        nomSalle:'',
        numeroSalle:'',
        numeroEtage:'',
        toiture:'',
        nombrePlace:''
      })
    }
  },
  data() {
    return {
      e : this.verification,
      
    }
  },
  methods: {
    submitForm() {
      alert('nomParticipant='+this.nomParticipant+'\npaiement='+this.paiement);
      
    },
    voir() {
      const propValue = {
        pays:this.pays,
        region:this.region,
        nomPlace:this.nomPlace,
        nomSalle:this.nomSalle,
        numeroSalle:this.numeroSalle,
        numeroEtage:this.numeroEtage,
        toiture:this.toiture,
        nombrePlace:this.nombrePlace
      }
      this.$router.push({ path: "/voirLieu", query: propValue });
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
  
}

.lieu{
  border: solid black 3px;
  margin: 40px 30px;
  width: 95%;
  min-height: 60vh;
}

.validation{
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
.btn{
  border-radius: 50px;
  padding: 10px 30px;
  font-size: 20px;
  margin: 0 30px 20px 0;
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

</style>
