<script>
export default {
    name: 'CharacterCard',
    props: {
        image: String,
        name: String,
        archetype: String,
    }

}
</script>

<template>
    <article>
        <div class="img"><img class="img-fluid" :src="image" alt=""></div>
        <h3>{{ name }}</h3>
        <div>{{ archetype }}</div>
    </article>
    
</template>


<style lang="scss" scoped>
article {
    background-color: orange;
    height: 100%;
}
</style>