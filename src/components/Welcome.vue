<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name:</label>
          <input type="text" name="name" v-model.trim="name" id="name">
          <p class="red-text" v-if="feedback">{{ feedback }}</p>
          <button type="submit" class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      name: '',
      feedback: ''
    }
  },

  methods: {
    enterChat() {
      if(!this.name) { 
        this.feedback = 'Name cannot be empty!' 
        return 
      }
      this.$router.push({ name: 'Chat', params: { name: this.name } })
    },
  },
}
</script>

<style>
  .welcome {
    max-width: 400px;
    margin-top: 100px;
  }

  .welcome .card .card-content h2 {
    font-size: 3em;
    margin: 5px;
  }

  .welcome .card .card-content form button {
    margin: 30px auto;
  }
</style>
