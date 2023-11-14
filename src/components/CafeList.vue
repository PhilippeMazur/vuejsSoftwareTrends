<script setup>
import {ref, onMounted} from 'vue'
const props = defineProps({
  cafes: Object,
})

onMounted(() => {
    console.log(props.cafes)
})

</script>


<template>
<div class="body" v-if="props.cafes != null">
    <div class="cafe-list">
        <div class="card" v-for="cafe in props.cafes">
          <div class="card-content">
            <img :src="cafe.image" alt="">
            <div class="data">
                <span class="card-title">{{cafe.name}}</span>
                <p>{{cafe.description}}</p>
            </div>

          </div>
        </div>
      </div>
</div>

</template>


<style scoped>
p {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.body {
    margin-top: 2rem;
    width: 100%;
    height: 50rem;
    margin:auto;
}
.cafe-list {
    margin-top: 2rem;
    width: min(90%, 30rem);
    height: 30rem;
    margin:auto;
    border: 4px solid rgb(0, 0, 0);
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 1rem;
}
.card {
    width: min(90%, 40rem);
    height: auto;
    margin:auto;
    border: 3px solid black;
    transition: .2s;
}

img {
    width: 40%;
    height: 10rem;
}
.card-content {
    display: flex;
    align-items: center;
    gap: 1rem;
}
.data {
    display: flex;
    flex-direction: column;
    justify-content: start;
    
}
.card-title {
    font-family: Poppins;
    font-weight: 1000;
    font-size: 2rem;
    margin-bottom: .5rem;
}

.card:hover {
    transition: .2s;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.75);
}

</style>