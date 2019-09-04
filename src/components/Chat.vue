<template>
  <div class="chat container">
    <h2 class="center teal-text">
      <strong class="orange-text">Fire </strong>Chat
    </h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="message in messages" :key="message.id">
            <span class="teal-text">{{message.name}}: </span>
            <span class="grey-text text-darken-3">{{message.content}}</span>
            <span class="grey-text time">{{message.timeStamp}}</span>
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
import NewMessage from "@/components/NewMessage.vue";
import db from "@/firebase/init.js";
import moment from 'moment'
moment.locale('pt-BR')

export default {
  name: "Chat",
  props: ["name"],
  components: { NewMessage },
  data() {
    return {
      messages: []
    };
  },

  methods: {
    getMessagesOrderByTimestamp() {
      const res = db.collection("messages").orderBy('timeStamp');

      res.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added'){
            let doc = change.doc
            const { name, content, timeStamp } = doc.data()
            this.messages.push({
              id: doc.id,
              name,
              content,
              timeStamp: moment(timeStamp).format('lll')
            })
          }
        })
      });
    }
  },

  created() {
    this.getMessagesOrderByTimestamp()
  }
};
</script>

<style>
.chat .logo {
  width: 1em;
}

.chat h2 {
  font-size: 2.6em;
  margin-bottom: 40px;
}

.chat span {
  font-size: 1.4em;
}

.chat .time {
  display: block;
  font-size: 0.8em;
}

.messages {
  max-height: 300px;
  overflow: auto;
}

.messages::-webkit-scrollbar {
  width: 3px;
}

.messages::-webkit-scrollbar-track{
  background: #ddd;
}

.messages::-webkit-scrollbar-thumb{
  background: #aaa;
}
</style>