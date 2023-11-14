

<template>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Edu+TAS+Beginner&display=swap');

nav {
  background-color: #3DD6A0;
  overflow: hidden;
  height: 3rem;

}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav li {
  float: left;
}

nav li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-family: Poppins;
  color: black;
  font-weight: 600;
  font-size: 1.5rem;
}

nav li a:hover {
  background-color: #111;
  color: white;
}
</style>
