<script>
import { store } from '../store';
export default {
    name: 'Search',
    data() {
        return {
            store,
            archetypes: []
        }
    },
    // mounted() {
    //     // Effettua una richiesta HTTP all'API
    //     fetch('https://db.ygoprodeck.com/api/v7/archetypes.php')
    //         .then(response => response.json())
    //         .then(data => {
    //             // Assegna i dati dell'API all'array archetypes
    //             this.archetypes = data.archetypes;
    //         })
    // }
}

</script>

<template>
    <div class="container">
        <form>
            <div class="mb-3 col-12 col-sm-4">
                <label for="search-status" class="form-label d-none"></label>
                <select class="form-select" aria-label="Default select example" id="search-status" v-model="store.searchStatus">
                    <option selected value="">Cerca il tuo archetipo</option>
                    <option>alien</option>
                    <option>melodious</option>
                    <option>umi</option>
                </select>

            </div>
        </form>
        <!-- <form>
                <div class="mb-3 col-12 col-sm-4">
                    <label for="search-status" class="form-label d-none"></label>
                    <select class="form-select" aria-label="Default select example" :id="'search-status-' + index" v-model="store.searchStatus">
                        <option selected value="">Cerca il tuo archetipo</option>
                        <option v-for="item in archetype" :value="item" :key="item">{{ item }}</option>
                    </select>
                </div>
            </form> -->

    </div>
</template>


<style lang="scss" scoped></style>