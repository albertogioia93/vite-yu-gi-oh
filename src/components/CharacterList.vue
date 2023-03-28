<script>
import axios from 'axios';
import CharacterCard from './CharacterCard.vue';
export default {
    name: 'CharacterList',
    components: {
        CharacterCard
    },
    data() {
        return {
            characters: []
        }
    },
    created() {
        // axios.get('inserisci indirizzo della API')
        // MI CRUSHA IL PC ALL'INSERIMENTO DEL LINK API SOTTOSTANTE
        // axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')

    }

}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-4 col-md-2">
                <CharacterCard />
            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped></style>