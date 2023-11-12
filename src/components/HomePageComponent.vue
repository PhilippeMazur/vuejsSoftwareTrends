<script>

props: {
    cafes: {
        type: Array;
        required: true
    }
}

</script>

<template>
    <div class="hpc">
        <p v-for="cafe in cafes" :key="cafe.id">{{cafe.location}}</p>
    </div>
</template>

<style scoped>
.hpc {
    height: 10rem;
    width: min(90%, 40rem);
    margin: auto;
    background-color: rgb(184, 184, 184);
}
</style>
