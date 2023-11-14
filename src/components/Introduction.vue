
<template>
    <div class="body">
        <img src="@/assets/space.jpg" alt="" class="foregroundImage">
        <div class="intro-container">
          <div class="introText">
              <h1>I LOVE</h1>
              <h2>SOFTWARE TRENDS</h2>
          </div>
          <div class="image">
              <img src="@/assets/OIG-removebg-preview.png" alt="" class="animatedImg">
          </div>
        </div>
    </div>

</template>

<style scoped>
.body {
}
h1, h2 {
    font-family: Permanent Marker;
}
h1 {
    font-size: 4rem;
    color: #57E8B7;
}
h2 {
    font-size: 3rem;
    color: white;
}
.intro-container {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    height: 20rem;
    width: 100%;
    background-color: #051914;
    width: min(90%, 50rem);
    margin: auto;

}

.introText {
    z-index: 1;
    padding-top: 4rem;
    width: min(90%, 25rem);
    height: 15rem;
    padding-left: 5rem;
}
.image {
    width: min(70%, 25rem);
    height: 18rem;
    z-index: 1;
    position: inherit;
}
.animatedImg {
    width: 400px;
    top: 1rem;
    right: 2rem;
    animation: rotate 2s infinite;
}
@keyframes rotate {
    0% { transform: rotate(-10deg); }
    50% { transform: rotate(10deg); }
    100% { transform: rotate(-10deg); }
}

.foregroundImage {
    position: absolute;
    height: 20rem;
    width: 100%;
}

</style>
