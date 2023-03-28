<script>
    import CharacterSearch from './CharacterSearch.vue';
    import CharacterList from './CharacterList.vue';
    export default {
        name: 'Header',
        components: {
            CharacterSearch,
            CharacterList,

        }
    }

</script>

<template>
    <main>
        <CharacterSearch />
        <CharacterList />

    </main>
</template>


<style lang="scss" scoped></style>