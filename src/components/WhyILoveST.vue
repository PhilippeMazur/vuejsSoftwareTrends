<template>
  <div class="container">
    <div class="c2">
        <div class="title">
            <h1 class="t1">Why do I love</h1>
            <h1 class="t2">Software Trends</h1>
        </div>
        <div class="textContainer">
        <p class="text">I love Software Trends for the constant excitement of technological evolution. Embracing new advancements keeps me engaged, fostering a dynamic environment that fuels my curiosity and passion for innovation.</p>
        </div>
    </div>

  </div>
</template>

<style scoped>
.container {
    background-color: white;
    background-size: 25rem;
    background-position: left;
    
}
.coffeecup {
    position: absolute;
    left: 5%;
    height: 40%;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.c2 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25rem;
    border-radius: 20px;
    background-color: rgb(255, 255, 255);

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
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
}

</style>
