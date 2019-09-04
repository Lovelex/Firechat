<template>
  <div class="chat container">
    <h2 class="center teal-text"><strong class="orange-text">Fire</strong>Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li >
            <span class="teal-text">Name</span>
            <span class="grey-text text-darken-3">Message</span>
            <span class="grey-text time">Time</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from '@/components/NewMessage.vue'

export default {
  name: 'Chat',
  props:['name'],
  components: { NewMessage },
  data() {
    return {

    }
  },

}
</script>

<style>
  .chat .logo {
    width: 1.0em;
  }

  .chat h2 {
    font-size: 2.6em;
    margin-bottom: 40px;
  }

  .chat span {
    font-size: 1.4em
  }

  .chat .time {
    display: block;
    font-size: 1.2em;
  }
</style>