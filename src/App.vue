<template>
<!--  <div id="app" class="container">-->
  <div id="app">
<!--    <router-link :to="{ path: '/'}"><img src="./assets/logo.png" class="logo"></router-link>-->
    <TheLayout>
    </TheLayout>
  </div>
</template>

<script>

  import TheLayout from './components/layouts/TheLayout'

  export default {
    name: 'App',
    components: { TheLayout }
  }
</script>


<style>

  /** {*/
  /*  box-sizing: border-box;*/
  /*}*/

  /*.container {*/
  /*  max-width: 600px;*/
  /*  margin: 0 auto;*/
  /*}*/


  /*#app {*/
  /*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*  -webkit-font-smoothing: antialiased;*/
  /*  -moz-osx-font-smoothing: grayscale;*/
  /*  color: #2c3e50;*/
  /*  margin-top: 60px;*/
  /*  font-size: 24px;*/
  /*}*/

  /*.logo {*/
  /*  display: block;*/
  /*  margin: 20px auto;*/
  /*  height: 75px;*/
  /*}*/
</style>
