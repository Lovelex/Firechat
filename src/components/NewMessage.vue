<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message (enter to add):</label>
      <input type="text" v-model="newMessage" name="new-message" id="new-message" />
      <button class="btn waves-effect waves-light" type="submit" name="action">
        Send
        <i class="material-icons right">send</i>
      </button>
      <p v-if="feedback" class="red-text">{{feedback}}</p>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init.js'

export default {
  name: "NewMessage",
  props: ["name"],
  data() {
    return {
      newMessage: "",
      feedback: ""
    };
  },

  methods: {
    addMessage() {
      if(!this.newMessage) {
        this.feedback = 'Message cannot be empty!'
        return
      }
      this.feedback = ''
      this.newMessage = ''
      db.collection('messages').add({
        content: this.newMessage,
        name: this.name,
        timeStamp: Date.now()
      }).catch(err => {
        console.log(err)
      })
    }
  }
};
</script>

<style>
</style>