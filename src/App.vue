<template>
  <VocLogo></VocLogo>
  <div class="app-conatainer">
    <button id="voclearn"><router-link to="/Voc">Voc Learn</router-link></button>
    <button id="playTest"><router-link to="/play">Test Your Knowledge</router-link></button>
  </div>
  <div class="top-line"></div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-conatainer{
  margin-top: 20px;
}
.top-line{
  border-color: gray;
  border-top-style: groove;
  width: 60vw;
  margin-left: 20vw;
  box-shadow: 5px 2px 5px 5px gray;
}
button{
  border-style: groove;
  border-color: lightgreen;
  background-color: lightgreen;
  width: 20vw;
}
</style>
<script>
import VocLogo from '@/components/VocLog'
export default {
  components: { VocLogo }
}
</script>
