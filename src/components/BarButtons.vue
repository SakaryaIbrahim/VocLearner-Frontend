<template>
  <button id="voclearn">Voc learn</button>
  <router-link to="/play"><button id="testKnowledge">Test your Knowledge</button></router-link>
</template>
<script>
export default {
  name: 'BarButtons'
}
</script>

<style scoped>
button{
  color: darkseagreen;
  width: 100px;
}
</style>
