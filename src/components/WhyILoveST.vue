<template>
  <div class="container">
    <div class="title">
        <h1 class="t1">Why do I love</h1>
        <h1 class="t2">Software Trends</h1>
    </div>
    <div class="textContainer">
    <p class="text">I love Software Trends for the constant excitement of technological evolution. Embracing new advancements keeps me engaged, fostering a dynamic environment that fuels my curiosity and passion for innovation.</p>
    </div>
  </div>
</template>

<style scoped>
.container {
    background-color: white;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.t1 {
    padding-top: 2rem;
    font-family: Poppins;
    font-weight: 1000;
    font-size: 2rem;
}
.t2 {
    font-family: Poppins;
    font-weight: 1000;
    font-size: 2rem;
    padding-bottom: 2rem;
}
.title {
    width: min(80%, 25rem);
    display: flex;
    flex-direction: column;
    align-items: center;
}
.t1, .t2 {
    line-height: 1; /* Add this line */
    vertical-align: baseline; /* Add this line */
}
.textContainer {
    width: min(80%, 25rem);
    height: 10rem;
    padding: 1rem;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.bold {
    font-weight: 600;
}

.text {
    font-family: Roboto Slab;
    text-align: center;
}

</style>
