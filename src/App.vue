<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">LOGIN</router-link>
  </nav> -->
  <v-container
    class="pa-6"
    fluid
  >
    <router-view/>
  </v-container>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #F5F5F5;
}
/* 
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
