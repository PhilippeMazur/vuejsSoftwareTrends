<template>
    <div class="body">
        <div class="pictures-container">
            <transition-group name="fade" tag="div">
                <img v-if="currentImageIndex === 0" :src="images[0]" alt="Current image" key="0">
                <img v-if="currentImageIndex === 1" :src="images[1]" alt="Current image" key="1">
                <img v-if="currentImageIndex === 2" :src="images[2]" alt="Current image" key="2">
                <img v-if="currentImageIndex === 3" :src="images[3]" alt="Current image" key="3">

              </transition-group>          
             <div class="dots">
                <p :class="dotClasses[0]"></p>
                <p :class="dotClasses[1]"></p>
                <p :class="dotClasses[2]"></p>
                <p :class="dotClasses[3]"></p>
            </div>
        </div>
        <div class="random">
            <h1>AI Generated <br>Photos</h1>
            <p class="">
                I'm deeply into crafting AI-generated photos, blending my love for art and technology. Each creation resonates with the sentiment, "I LOVE SOFTWARE."</p>
        </div>
    </div>

</template>

<script>
import img1 from '../assets/CoffeecupUpdated.png'
import img2 from '../assets/ILST.png'
import img3 from '../assets/SFST.png'
import img4 from '../assets/DTST.png'

export default {
  data() {
    return {
      images: [
        img1,
        img2,
        img3,
        img4
      ],
      currentImageIndex: 0,
      dotClasses: ['white-dot', '', '']

    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex]
    }
  },
  mounted() {
    setInterval(() => {
        const oldIndex = this.currentImageIndex;
   this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
   this.dotClasses[oldIndex] = '';
   this.dotClasses[this.currentImageIndex] = 'white-dot';    }, 2000)
  }
}
</script>

<style scoped>
.pictures-container {
  width: 25rem;
  height: 20rem;
  background-color: white;
  box-shadow: 0px 0px 6px 4px white;
  -webkit-box-shadow: 0px 0px 6px 4px white;
  -moz-box-shadow: 0px 0px 6px 4px white;
}

.body {
    width: 100%;
    height: 25rem;
    background-color: rgb(151, 222, 255);
    border-top: 3px solid rgb(128, 181, 255);
    border-bottom: 3px solid rgb(128, 181, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
}

img {
    width: 25rem;
    height: 20rem;
    position:absolute;
    
}
.dots {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding-top: 21rem;
}
.dots p {
    width: 15px;
    height: 15px;
    border: 2px solid white;
    border-radius: 50%;
}
.random h1 {
    color: rgb(0, 0, 82);
    font-family: Poppins;
    font-weight: 1000;
    font-size: 2rem;
    margin-bottom: 2rem;
}
.random p {
    color: rgb(0, 0, 82);
    font-size: 1.5rem;
    font-weight: 100;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.random {
    height: 20rem;
    width: 20rem;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
 }
 .fade-enter-from, .fade-leave-to {
    opacity: 0;
 }
 .white-dot {
    background-color: white;
   }
</style>
