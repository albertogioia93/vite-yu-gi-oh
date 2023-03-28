<script>
// import axios from 'axios';
import { store } from '../store';
import CharacterCard from './CharacterCard.vue';
export default {
    name: 'CharacterList',
    components: {
        CharacterCard
    },
    data() {
        return {
            store,
            // characters: []
        }
    },
    // created() {
        // axios.get('inserisci indirizzo della API')
        // MI CRUSHA IL PC ALL'INSERIMENTO DEL LINK API SOTTOSTANTE
        // axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
            // .then ((response) => {
            //     console.log(response);
            //     this.store.characters = response.data.results
            //     this.store.charactersFound = response.data.results.length
            // })

    // }

}
</script>

<template>
    <div class="container">
        <div class="row g-3">
            <div class="col-12 col-sm-6 col-md-2" v-for="character in store.characters">
                <CharacterCard />  
            </div>
            
            
        </div>

    </div>
</template>


<style lang="scss" scoped></style>