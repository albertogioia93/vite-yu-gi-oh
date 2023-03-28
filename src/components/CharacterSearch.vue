<script>
import { store } from '../store';
export default {
    name: 'Search',
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <div class="container">
        <form>
            <div class="mb-3 col-12 col-sm-4">
                <label for="search-status" class="form-label d-none"></label>
                <select class="form-select" aria-label="Default select example" id="search-status">
                    <option selected>Cerca il tuo archetipo</option>
                    <option>alien</option>
                    <option>melodious</option>
                    <option>umi</option>
                </select>

            </div>
        </form>

    </div>
</template>


<style lang="scss" scoped></style>