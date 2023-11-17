<script setup>
import {ref, onMounted} from 'vue'
import CafeService from '../services/CafeService'
const props = defineProps({
  cafes: Object,
})

onMounted(() => {
    console.log(props.cafes)
})

let form = ref({
    name: '',
    description: '',
    image: ''

})

const submitForm = () => {
    console.log(form.value)
    CafeService.addData(form.value)
    form.value = {
        name: '',
        description: '',
        image: ''
    }
}

</script>


<template>
<div class="body" v-if="props.cafes != null">
    <div class="cafe-list">
        <h2 class="container-title">Cafes</h2>
        <a href="#" class="clickable"><div class="card" v-for="cafe in props.cafes">
          <div class="card-content">
            <img :src="cafe.image" alt="">
            <div class="data">
                <span class="card-title">{{cafe.name}}</span>
                <p>{{cafe.description}}</p>
            </div>
          </div>
        </div>
        </a>
    </div>
    <div class="cafe-form">
        <h2 class="container-title">Add cafe</h2>
        <form @submit.prevent="submitForm" class="form">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="form.name" required class="form-name"/>
            
            <label for="description">Description</label>
            <textarea id="description" v-model="form.description" required class="form-description"></textarea>
            
            <label for="imgUrl">Image URL</label>
            <input type="text" id="imgUrl" v-model="form.image" required />
            
            <button type="submit" class="button">Submit</button>
          </form>
    </div>
</div>

</template>


<style scoped>
p, label {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
a {
    text-decoration: none;
    color: black;

}
.body {
    margin-top: 2rem;
    width: 100%;
    height: 50rem;
    margin:auto;
    display: flex;
    flex-direction: columns;
}
.cafe-list {
    margin-top: 2rem;
    width: min(90%, 30rem);
    height: auto;
    margin:auto;
    border: 4px solid rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
}
.container-title {
    font-family: Poppins;
    font-weight: 1000;
    font-size: 2rem;
    margin-bottom: .5rem;
    text-align: center;
    margin-bottom: 2rem;
}
.cafe-form {
    margin-top: 2rem;
    width: min(90%, 30rem);
    height: 30rem;
    margin:auto;
    border: 4px solid rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
}
.form {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding: 1rem;
    padding-top: 2rem;
}

input, .form-description {
    border: 0px solid black;
    background-color: rgb(230, 230, 230);
    border-radius: 10px;
    padding: .5rem;
    transition: .2s;
}

input:hover, .form-description:hover {
    background-color: rgb(236, 236, 236);
    transition: .2s;
}
input:focus, .form-description:focus {
    border: none;
    outline: none;
}
.form-name {
    width: min(90%, 10rem);
}
.card {
    width: min(90%, 40rem);
    height: auto;
    margin:auto;
    border: 3px solid black;
    transition: .2s;
    margin-bottom: 2rem;
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
/* inspired form gumroad website */
.button {
    --bg: #000;
    --hover-bg: #ffffff;
    --hover-text: #000;
    color: #fff;
    border: 1px solid var(--bg);
    border-radius: 4px;
    padding: 0.8em 2em;
    background: var(--bg);
    transition: 0.2s;
    width: 10rem;
    margin-top: 2rem;
  }
  
  .button:hover {
    color: var(--hover-text);
    transform: translate(0rem,-0.25rem);
    background: var(--hover-bg);
    box-shadow: 0.25rem 0.25rem var(--bg);
    border: 1px solid black;
  }
  
  .button:active {
    transform: translate(0);
    box-shadow: none;
  }

</style>