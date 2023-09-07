<template>
    <Entete/>
    <nav>
      <router-link to="/">Voir les évènements</router-link> |
      <router-link to="/creer">Créer un évènement</router-link> |
      <router-link to="/chercher">Chercher un évènement</router-link>
    </nav>
    <router-view/>
</template>

<script>
// @ is an alias to /src
import Entete from '@/components/Entete.vue';

export default {
  name: 'App',
  components: {
    Entete
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, Kameron;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: blue;
  font-family: Kameron;
}

nav {
  padding:15px;
  background-color: black;
  display: flex;
  justify-content: space-around;
  border-radius: 50px 50px 0 0;
}

nav a {
  text-decoration: none;
  color: white;
  background-color: black;
  padding: 10px 50px 5px 50px;
  font-size: 30px;
}

nav a.router-link-exact-active {
  border-bottom: solid 3px white;
}

</style>
