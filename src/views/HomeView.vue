<script setup>
import HomePageComponent from '../components/HomePageComponent.vue'
import { collection, query, where, getDocs, getDoc } from "firebase/firestore";
import { useCollection, useFirestore } from "vuefire";
import { ref, onMounted, watchEffect  } from "vue";
import CafeService from '../services/CafeService';
import CurrentCafes from '../components/CurrentCafes.vue';
import Navigation from '../components/Navigation.vue'
import Introduction from '@/components/Introduction.vue'
import WhyILoveST from '@/components/WhyILoveST.vue'
import Pictures from '../components/Pictures.vue';

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
  <div class="body">
    <Introduction></Introduction>  
    <WhyILoveST></WhyILoveST>
    <Pictures></Pictures>
  </div>

  <!--
  <CurrentCafes :cafes="amazingList.value"></CurrentCafes>
  <HomePageComponent :newCafeObject="newCafeObject" @add-cafe="addCafe"></HomePageComponent>
  -->
</template>

<style scoped>
</style>