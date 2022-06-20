<template>
  <div>
    <h2></h2>
    <input v-model="testAnswer" type="text" id="vocTest">
    <button id="submit" @click="checkTheWord">Submit</button>
    <div id="right-answer" v-bind:style="{display: displayRight}">Congra! correct answer</div>
    <div id="false-answer" v-bind:style="{display: displayWrong}">Sorry! Wrong answer</div>
    <button id="play-again" @click="playAgain">Play again</button>
  </div>
</template>

<script>
export default {
  name: 'PlayView',
  props: [''],
  data () {
    return {
      wordTotranslate: '',
      testAnswer: '',
      displayRight: '',
      displayWrong: ''
    }
  },
  methods: {
    checkTheWord () {
      if (this.wordTotranslate === this.testAnswer) {
        this.displayRight = 'inline'
      } else {
        this.displayWrong = 'inline'
      }
    },
    playAgain () {
      this.displayRight = ''
      this.displayWrong = ''
    }
  },
  beforeMount () {
    const myHeader = new Headers()
    myHeader.append('Accept', 'application/json')
    myHeader.append('Content-type', 'application/json')
    const requestOptions = {
      methods: 'GET',
      headers: myHeader,
      redirect: 'follow'
    }
    fetch('http://localhost:8080/words', requestOptions)
      .then(response => response.json)
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
#right-answer,#false-answer{
  display: none;
}

#right-answer{
  color: green;
}
#false-answer{
  color: red;
}
</style>
