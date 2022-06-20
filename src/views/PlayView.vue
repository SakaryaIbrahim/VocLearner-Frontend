<template>
  <div>
    <h2></h2>
    <input v-model="testAnswer" type="text" id="vocTest">
    <button id="submit" @click="checkTheWord">Submit</button>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'PlayView',
  props: [''],
  data () {
    return {
      wordTotranslate: '',
      testAnswer: ''
    }
  },
  methods: {
    checkTheWord () {
      let helpValue = false
      if (this.wordTotranslate === this.testAnswer) {
        // eslint-disable-next-line no-unused-vars
        helpValue = true
      }
      return helpValue
    }
  }
}
</script>

<style scoped>

</style>
