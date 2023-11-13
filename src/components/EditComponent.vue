<template>
  <div class="box">
    <p>test</p>
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

onMounted(async () => {
    cafe.value = await CafeService.getCafeById(props.id)
})

console.log(cafe.value)


</script>

<style>
.box {
    width:20rem;
    height: 20rem;
}
</style>
