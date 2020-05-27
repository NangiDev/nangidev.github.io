<template>
  <div id="app">
    <h1 id="top-banner"><a href="./">NANGIJALATÅGET</a></h1>
    <p id="bottom-banner">shit that happends on my journey to Nangijala</p>
    <FrontPage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import FrontPage from './components/FrontPage.vue'

export default {
  name: 'App',
  components: {
    FrontPage
  }
}
</script>

<style>
body {
  background: #2e3440;
  color: #bf616a;
  color: #eceff4;
}

a {
  color: #ebcb8b;
}


#top-banner a{
  color: #bf616a;
  text-decoration: none;
}
#top-banner a:hover{
  color: #d08770;
  text-decoration: none;
}
#top-banner {
  font-size: calc(4vw + 4vh);
  margin-bottom: 0px;
}
#bottom-banner {
  font-size: calc(2vw + 0vh);
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
