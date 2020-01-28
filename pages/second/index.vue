<template>
  <div class="container">
    <span>second</span>
    <div>{{ messagesChat }}</div>
    <button @click="addChat()">ss</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import { ChatMessage } from '@/model/chat'

@Component({
  components: {}
})
export default class Index extends Vue {
  @Getter('messages', { namespace: 'chat' }) messagesChat!: ChatMessage[]
  @Action('get', { namespace: 'chat' }) getChat!: Function
  @Action('put', { namespace: 'chat' }) addMessageChat!: Function

  async mounted() {
    await this.getChat('room-name')
  }

  async addChat() {
    const message: ChatMessage = { userid: 'yy', message: 'cc' }
    await this.addMessageChat(message)
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
