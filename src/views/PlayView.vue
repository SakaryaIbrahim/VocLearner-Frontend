<template>
  <div id="container">
    <div id="animation">
      <h3 id="wordToPlay">{{wordForPlay}}</h3>
    </div>
    <div>
      <input v-model="testAnswer" type="text" id="vocTest">
    </div>
    <div>
      <button id="submit" @click="checkTheWord">Submit</button>
      <br>
      <div id="right-answer" v-bind:style="{display: displayRight}">Congra! correct answer</div>
      <div id="false-answer" v-bind:style="{display: displayWrong}">Sorry! Wrong answer</div>
    </div>
    <div>
      <button id="play-again" @click="playAgain">Play again</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PlayView',
  components: ['VocLog'],
  props: [''],
  data () {
    return {
      wordTotranslate: '',
      testAnswer: '',
      displayRight: '',
      displayWrong: '',
      wordsList: [],
      howManySubmit: 0,
      updatedObject: {},
      probability: 0,
      wordData: {},
      wordForPlay: '',
      id: null,
      helpBoolean: false
    }
  },
  methods: {
    checkTheWord () {
      for (let helper = 0; helper < this.wordData.uebersetzungSet.length; helper++) {
        if (this.wordData.uebersetzungSet[helper].uebersetzung === this.testAnswer.trim()) {
          this.displayRight = 'inline'
          this.probability = this.findTheNextWeightForPlus(this.wordData.uebersetzungSet[helper].wahrscheinlichkeit)
          this.wordData.uebersetzungSet[helper].wahrscheinlichkeit = this.probability
          this.updateProbability(this.wordData)
          this.helpBoolean = true
          break
        }
      }
      if (this.helpBoolean === false) {
        this.displayWrong = 'inline'
        for (let helpIndex = 0; helpIndex < this.wordData.uebersetzungSet.length; helpIndex++) {
          this.probability = this.findTheNextWeightForMinus(this.wordData.uebersetzungSet[helpIndex].wahrscheinlichkeit)
          this.wordData.uebersetzungSet[helpIndex].wahrscheinlichkeit = this.probability
          this.updateProbability(this.wordData)
        }
      }
    },
    playAgain () {
      this.displayRight = ''
      this.displayWrong = ''
      this.wordForPlay = ''
      this.pickFiveWords()
      this.displayAnimation()
    },
    pickFiveWords () {
      this.wordData = {}
      let weight = 0
      const randomNumber = Math.random()
      /* console.log(randomNumber) */
      if (randomNumber <= 1 && randomNumber > 0.8) {
        weight = 1
      } else if (randomNumber <= 0.8 && randomNumber > 0.5) {
        weight = 0.8
      } else {
        // eslint-disable-next-line no-unused-vars
        weight = 0.5
      }
      /* console.log(weight) */
      for (let j = Math.floor(Math.random() * this.wordsList.length); j < this.wordsList.length; j++) {
        console.log(j)
        for (let secondeHelper = 0; secondeHelper < this.wordsList[j].uebersetzungSet.length; secondeHelper++) {
          if (this.wordsList[j].uebersetzungSet[secondeHelper].wahrscheinlichkeit === weight) {
            this.wordData = this.wordsList[j]
            console.log(this.wordData)
            break
          }
        }
      }
      if (Object.keys(this.wordData).length === 0) {
        const number = Math.floor(Math.random() * (this.wordsList.length))
        this.wordData = this.wordsList[number]
      }
      this.wordForPlay = this.wordData.bezeichnung
    },
    updateProbability (dataToUpdate) {
      this.displayAnimation()
      const myHeader = new Headers()
      myHeader.append('Content-type', 'application/json')

      const requestOptions = {
        method: 'POST',
        headers: myHeader,
        body: JSON.stringify(dataToUpdate),
        redirect: 'follow'
      }

      fetch('https://voclearner.herokuapp.com/api/v1/uebersetzung', requestOptions)
        .then(response => console.log(response.statusCode))
        .catch(error => console.log('error', error))
    },
    findTheNextWeightForMinus (weight) {
      switch (weight) {
        case 1: return 0.8
        case 0.8: return 0.5
      }
    },
    findTheNextWeightForPlus (weight) {
      switch (weight) {
        case 1: return 1
        case 0.8: return 1
        case 0.5: return 0.8
      }
    },
    displayAnimation () {
      const elem = document.getElementById('wordToPlay')
      let counter = 0
      clearInterval(this.id)
      this.id = setInterval(frame, 15)
      function frame () {
        if (counter === 350) {
          clearInterval(this.id)
        } else {
          counter++
          elem.style.top = counter + 'px'
          elem.style.left = counter + 'px'
        }
      }
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
    fetch('https://voclearner.herokuapp.com/api/v1/words', requestOptions)
      .then(response => response.json())
      // eslint-disable-next-line no-return-assign
      .then(result => result.forEach(data => {
        this.wordsList.push(data)
        console.log(this.wordsList)
      }))
      .catch(error => console.log('error', error))
  }
}

</script>

<style scoped>
#container{
  border-style: groove;
  border-width: 2px;
  border-top: none;
  width: 60vw;
  margin-left: 20vw;
  height: 70vh;
  padding-top: 40px;
}

#animation{
  width: 350px;
  height: 350px;
  background-color: yellow;
  position: relative;
  margin-left: 285px;
  margin-bottom: 20px;
}

#wordToPlay{
  width: 50px;
  height: 50px;
  color: blue;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: medium;
  position: absolute;
}

#right-answer,#false-answer{
  display: none;
  margin-bottom: 10px;
}

#right-answer{
  color: green;
}

#false-answer{
  color: red;
}

input{
  margin-bottom: 20px;
  width: 350px;
}

button{
  margin-bottom: 20px;
  padding: 5px 10px;
  width: 350px;
}

</style>
