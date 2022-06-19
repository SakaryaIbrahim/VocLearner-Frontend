<template>
  <div>
    <input type="text" placeholder="Enter new Word" id="word">
    <input type="text" placeholder="Enter a Translation" id="translation">
  </div>
</template>

<script>
export default {
  name: 'PlayView'
}
</script>

<style scoped>
#word, #translation{
  border-style: groove;
  border-color: azure;
  border-radius: 5px;
  color: aliceblue;
}
</style>
