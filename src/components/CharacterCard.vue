<script>
export default {
    name: 'CharacterCard',
    props: {
        image_url: String,
        title: String,
        archetype: String,
    }

}
</script>

<template>
    <article>
        <div class="img"><img class="img-fluid" src="https://picsum.photos/300" alt=""></div>
        <div>nome card</div>
        <div>archetipo</div>
    </article>
    
</template>


<style lang="scss" scoped></style>