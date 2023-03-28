<script>
import CharacterCard from './CharacterCard.vue';
export default {
    name: 'CharacterList',
    components: {
        CharacterCard
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