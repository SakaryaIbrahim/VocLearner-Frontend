<template>
  <div>
    <input v-model="word" type="text" placeholder="Enter new Word" id="word">
    <input v-model="translation" type="text" placeholder="Enter a Translation" id="translation">
    <button id="save" @click="saveDataInDatabase">Save</button>
    <button id="delete">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'VocView',
  props: [''],
  data () {
    return {
      word: '',
      translation: ''
    }
  },
  methods: {
    saveDataInDatabase () {
      const myheader = new Headers()
      myheader.append('Content-type', 'application/json')
      myheader.append('Accept', 'application/json')
      const content = {
        word: this.word,
        language: 'english',
        translation: this.translation,
        tansLanguage: 'translation'
      }

      const requestOptions = {
        method: 'POST',
        headers: myheader,
        body: JSON.stringify(content)
      }
      fetch('https://voclearner.herokuapp.com/api/v1/wordtranslation', requestOptions).catch(error => console.log('error', error))
    },
    deleteData () {
      const myheader = new Headers()
      myheader.append('Content-type', 'application/json')
      const content = {
        word: this.word
      }
      const requestOptions = {
        method: 'DELETE',
        headers: myheader,
        body: JSON.stringify(content),
        redirect: 'follow'
      }
      fetch('http://localhost:8080/api/v1/wordtranslation', requestOptions).catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>
#word, #translation{
  border-style: groove;
  border-color: azure;
  border-radius: 5px;
  color: aliceblue;
  width: 50px;
  height: 10px
}
</style>
