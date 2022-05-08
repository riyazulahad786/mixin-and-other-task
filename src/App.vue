<template>
  <div id="app">
    <HelloWorld msg="Mixin"/>
    <About/>
    <Contact/>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'



export default {
  name: 'App',
  components: {
    HelloWorld,
    About,
    Contact
    
    
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
