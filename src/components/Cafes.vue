<script></script>

<template>
    <div class="body">
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="cafes">Cafes</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
        <img src="../assets/coffeeV2.jpg" alt="" class="coffee">
        <div class="body2">
            <div class="intro"></div>
            <div class="intro">

                <h1>The best Cafes</h1>

                <h2 class="IB">IN BELGIUM</h2>

            </div>
        </div>
    </div>
</template>

<style scoped>
.body {
    height: 37rem;
}
.body2 {
    background-image: White;
    width: 100%;
    height: 30rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}
nav {
    overflow: hidden;
    height: 3rem;
    z-index: 10;
    z-index: 1;
    display: flex;
    justify-content: end;
  }
  
  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    z-index: 1;
  }
  
  nav li {
    float: left;
    z-index: 1;
  }
  
  nav li a {
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-family: Poppins;
    font-weight: 600;
    font-size: 1.5rem;
    z-index: 1;
  }
  
  nav li a:hover {
    color: black;
    text-decoration: underline;
  }
.foregroundImage {
    position: absolute;
    width: 100%;
    
    margin: auto;
    z-index: -1;
}
h1 {
    font-size: 4rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: black;
}
h2 {
    font-size: 2rem;
    font-family: Poppins;
}
.IB {
    padding-left: .4rem;
}
.intro {
    height: auto;
    width: min(90%, 40rem);
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}
.beer {
    width: 100px;
    top: 1rem;
    right: 2rem;
    animation: rotate 3s linear infinite;
}
.textwithimage {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}
@keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
.coffee {
    width: 500px;
    position: relative;
    top: 8rem;
    left: 7rem;
}
</style>