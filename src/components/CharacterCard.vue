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
        <div>{{ name }}</div>
        <div>{{ archetype }}</div>
    </article>
    
</template>


<style lang="scss" scoped></style>