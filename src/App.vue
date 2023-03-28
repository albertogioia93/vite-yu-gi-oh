<script>
// LIBRERIE
import axios from 'axios';

// FUNZIONI
import { store } from './store';

// COMPONENTI
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data(){
    return {
      store
    }
  },
  created() {
        // axios.get('inserisci indirizzo della API')
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
            .then ((response) => {
                console.log(response);
                const characters = response.data.data.splice(0, 100);
                this.store.characters = characters
                this.store.charactersFound = characters.length
            });

  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
  
 
</template>

<style lang="scss">
// versione 1 - via app.vue
// @use './assets/scss/main.scss' as *;
</style>

