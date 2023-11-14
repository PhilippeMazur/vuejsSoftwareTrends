<script setup>
import HomePageComponent from '../components/HomePageComponent.vue'
import { collection, query, where, getDocs, getDoc } from "firebase/firestore";
import { useCollection, useFirestore } from "vuefire";
import { ref, onMounted, watchEffect  } from "vue";
import CafeService from '../services/CafeService';
import Cafes from '../components/Cafes.vue'
import CafeList from '../components/CafeList.vue';

let newCafeObject = ref({
  price: 0,
  location: '',
  favorite: false
})

let cafeList = ref([])

onMounted(async () => {
  await CafeService.getData(cafeList)
  
});

/*
const addCafe = (async () => {
  console.log(newCafeObject.value)
  await CafeService.addData(newCafeObject.value)
}) 
*/
</script>

<template>
    <div class="body">
        <Cafes></Cafes>
        <CafeList class="item2" :cafes="cafeList"></CafeList>
    </div>

  <!--
  <CurrentCafes :cafes="amazingList.value"></CurrentCafes>
  <HomePageComponent :newCafeObject="newCafeObject" @add-cafe="addCafe"></HomePageComponent>
  -->
</template>

<style scoped>
.item2{
    margin-top: 2rem;
}
</style>