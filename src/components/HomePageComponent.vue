<script>
export default {
  
 props: {
   cafes: {
     type: Array,
     required: true
   },
    newCafeObject: {
      type: Object,
      required: true
    }
 },
 methods: {
    addProduct() {
      this.$emit('add-cafe')
    }
 },
 emits: ['add-cafe'], // declare the emitted event here

}



</script>

<template>
    <div class="hpc">
      <div class="object" v-for="cafe in cafes">
        <p >{{cafe.location}}</p>
        <router-link :to="`/cafe/${cafe.id}`">
          <button>Go to Event</button>
        </router-link>
      </div>
    </div>
    <div class="cafeForm">
      <form @submit.prevent="addProduct">
        <div>
          <p>Location</p>
          <input type="text" v-model="newCafeObject.location" name="location">
        </div>
        <div>
          <p>price</p>
          <input type="number" v-model="newCafeObject.price" name="location">
        </div>
        <div>
          <p>favorite</p>
          <input type="checkbox" v-model="newCafeObject.favorite" name="location">
        </div>
        <input type="submit" value="submit">
      </form>
    </div>
</template>

<style scoped>
.hpc {
    height: 10rem;
    width: min(90%, 40rem);
    margin: auto;
    background-color: rgb(184, 184, 184);
    display: flex;
    flex-direction: column;
}
.cafeForm {
  height: 10rem;
  width: min(90%, 40rem);
  margin: auto;
  background-color: rgb(223, 223, 223);
  margin-top: 2rem;

}

.object {
  display: flex;
  flex-direction: row;
}
</style>
