<template>
    <div class="container">
      <div id="html-components">
        <div>
          <div>
            <p class="subTitles">Word</p>
            <input v-model="word" type="text" placeholder="" id="word">
            <select id="language" name="languages" v-model="language">
               <option value="german">German</option>
               <option value="english">English</option>
               <option value="french">French</option>
               <option value="spanish">Spanish</option>
            </select>
          </div>
          <div>
            <p class="subTitles">Translation</p>
             <input v-model="translation" type="text" placeholder="" id="translation">
             <select id="translanuage" name="transLanguages" v-model="transLanguage">
                <option value="german">German</option>
                <option value="english">English</option>
                <option value="french">French</option>
                <option value="spanish">Spanish</option>
             </select>
          </div>
        </div>
      <button id="save" @click="saveDataInDatabase">Save</button><br>
      </div>
      <div>
        <input v-model="worddelete" type="text" id="delete-word" placeholder="Enter a Word" ><br>
        <button id="delete" @click="changeTheData">Delete</button>
      </div>

    </div>
    <!-- delete word block-->
</template>

<script>

export default {
  name: 'VocView',
  props: [''],
  data () {
    return {
      word: '',
      language: '',
      translation: '',
      transLanguage: '',
      wordToBeDelete: '',
      worddelete: ''
    }
  },
  methods: {
    saveDataInDatabase () {
      const myheader = new Headers()
      myheader.append('Content-type', 'application/json')
      const content = {
        word: this.word.trim(),
        language: this.language,
        translation: this.translation.trim(),
        transLanguage: this.transLanguage
      }

      const requestOptions = {
        method: 'POST',
        headers: myheader,
        body: JSON.stringify(content),
        redirect: 'follow'
      }
      if (this.word.length !== 0 && this.language.length !== 0 && this.translation.length !== 0 && this.transLanguage.length !== 0) {
        fetch('https://voclearner.herokuapp.com/api/v1/wordtranslation', requestOptions).catch(error => console.log('error', error))
      } else {
        alert('It\'s impossible ! All information are important')
      }
    },
    deleteData (wor) {
      const myheader = new Headers()
      myheader.append('Content-type', 'application/json')

      const requestOptions = {
        method: 'DELETE',
        headers: myheader,
        body: wor,
        redirect: 'follow'
      }
      fetch('https://voclearner.herokuapp.com/api/v1/wordtranslation', requestOptions).catch(error => console.log('error', error))
    },
    changeTheData () {
      if (this.worddelete.length !== 0) {
        this.deleteData(this.worddelete)
      } else {
        document.getElementById('delete-word').style.display = 'inline'
        document.getElementById('html-components').style.backgroundColor = 'gray'
        document.getElementById('html-components').style.opacity = '0.2'
      }
    }
  }
}
</script>

<style scoped>

.container{
  border-style: groove;
  border-width: 2px;
  border-top: none;
  width: 60vw;
  margin-left: 20vw;
  height: 50vh;
  padding-top: 40px;
}

.subTitles{
  color: #2c3e50;
  font-size: medium;
  padding-right: 540px;
}

/*input style*/
input{
  margin-bottom: 20px;
  width: 30vw;
  height: 3vh;
}

/*select feld style*/
select{
  width: 10vw;
  height: 3.75vh;
}

/*buttons style*/
button{
  margin-top: 20px;
  background-color: lightgreen;
  color: black;
  width: 10vw;
  height: 3vh;
}

/*word to be deleted style*/
#delete-word{
  display: none;
}

</style>
