<script setup>
import HomePageComponent from '../components/HomePageComponent.vue'
import { collection, query, where, getDocs, getDoc } from "firebase/firestore";
import { useCollection, useFirestore } from "vuefire";
import { ref, onMounted, watchEffect  } from "vue";
import CafeService from '../services/CafeService';

let newCafeObject = ref({
  price: 0,
  location: '',
  favorite: false
})

console.log(newCafeObject.value)

const db = useFirestore()
const q = query(collection(db, "cafes"));

let amazingList = ref([])

onMounted(async () => {
  //await CafeService.getCafes(cafeCollectionList);
  CafeService.getData(amazingList)
});

const addCafe = (async () => {
  console.log(newCafeObject.value)
  await CafeService.addData(newCafeObject.value)
}) 

</script>

<template>
  <HomePageComponent :cafes="amazingList.value" :newCafeObject="newCafeObject" @add-cafe="addCafe"></HomePageComponent>
</template>

<style scoped>

</style>