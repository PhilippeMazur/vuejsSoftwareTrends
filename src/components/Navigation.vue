<script></script>

<template>
    <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="cafes">Cafes</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
</template>

<style>
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
</style>