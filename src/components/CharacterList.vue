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

}
</script>

<template>
    <div class="container">
        <div class="row g-3">
            <div class="col-12 col-sm-6 col-md-2" v-for="character in store.characters">
                <CharacterCard :image="character.image_url" :name="character.name" :archetype="character.archetype"/>  
            </div>
            
            
        </div>

    </div>
</template>


<style lang="scss" scoped></style>