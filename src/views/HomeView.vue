<script setup>
import HomePageComponent from '../components/HomePageComponent.vue'
import { collection, query, where, getDocs, getDoc } from "firebase/firestore";
import { useFirestore } from "vuefire";
import { ref, onMounted } from "vue";
import CafeService from '../services/CafeService';

const cafeCollection = ref([])
onMounted(() => {
  CafeService.getCafes(cafeCollection)
})



</script>

<template>
  <HomePageComponent :cafes="cafeCollection"></HomePageComponent>
  <p v-for="cafe in cafeCollection">{{cafe.location}}</p>
</template>

<style scoped>

</style>