<script>
export default {
  
 props: {
   cafes: {
     type: Array,
     required: true
   }
 },
 methods: {},

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
</template>