<script setup>
import CafeService from '../services/CafeService';
import {ref, onMounted} from 'vue'
let cafe = ref()

const props = defineProps({
    id: {
        type: String,
        required: true
    }
})

onMounted( async () => {
    await CafeService.getCafeById(props.id)
    .then(response => {
      cafe.value = response;
    })
    .catch(error => {
      console.log(error);
    });

    console.log(cafe.value)
})
</script>

<template>
  <div class="box">
    <div v-if="cafe != null">
      <p>{{cafe.location}}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<style>
.box {
    width:20rem;
    height: 20rem;
}
</style>
