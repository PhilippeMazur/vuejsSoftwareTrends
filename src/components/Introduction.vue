<script>
</script>
<template>
    <img src="@/assets/trippy.jpg" alt="" class="foregroundImage">
    <div class="body">
        <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="cafes">Cafes</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </nav>
        <div class="intro-container">
          <div class="introText">
              <h1>I LOVE</h1>
              <h2>SOFTWARE TRENDS</h2>
              <a href="/" class="bn3637 bn36">#METOO</a>
            </div>
          <div class="image">
              <img src="@/assets/av2.png" alt="" class="animatedImg">
          </div>
        </div>
    </div>

</template>

<style scoped>
.body {
    height: 30rem;
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
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-family: Poppins;
    font-weight: 600;
    font-size: 1.5rem;
    z-index: 1;
  }
  
  nav li a:hover {
    color: white;
    text-decoration: underline;
  }
h1, h2 {
    font-family: Roboto Slab;
}
h1 {
    font-size: 4rem;
    color: white;
}
h2 {
    font-size: 2rem;
    color: white;
    font-weight: 400;
    margin-bottom: 2rem;
}
p {
    margin-top: 1rem;
    color: white;
    font-family: Poppins;
    font-weight: 600;
}
.intro-container {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    height: 20rem;
    width: 100%;
    width: min(90%, 50rem);
    margin: auto;
    margin-top: 2rem;

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
    height: 25rem;
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
    height: 30rem;
    width: 100%;
    z-index: -1;
}

.bn3637 {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.7rem 2rem;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    backface-visibility: hidden;
    border: 0.3rem solid transparent;
    border-radius: 3rem;
    background-color: black;
  }
  
  .bn36 {
    border-color: #fff;
    transition: transform 0.2s cubic-bezier(0.235, 0, 0.05, 0.95);
  }
  
  .bn36:hover {
    transform: perspective(1px) scale3d(1.044, 1.044, 1) translateZ(0) !important;
  }

</style>
