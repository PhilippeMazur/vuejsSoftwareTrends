<template>
  <div class="box">
    <p>{{cafe.location}}</p>
  </div>
</template>

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

<style>
.box {
    width:20rem;
    height: 20rem;
}
</style>
