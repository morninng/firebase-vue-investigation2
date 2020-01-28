<template>
  <div class="container">
    <span>second</span>
    <div>{{ messagesChat }}</div>
    <br />
    <button @click="addChatServer()">addChatServer</button>
    <button @click="addChatLocal()">addChatLocal</button>
    <button @click="switchBackToLocalData()">switchBackToLocalData</button>
    <button @click="switchToSubscribeServerData()">
      switchToSubscribeServerData
    </button>
    <button @click="adddDataServerChatButton()">
      adddDataServerChatButton
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import { ChatMessage } from '@/model/chat'
import { dbChatRef } from '@/plugins/firebase2'

@Component({
  components: {}
})
export default class Index extends Vue {
  @Getter('messages', { namespace: 'chat' }) messagesChat!: ChatMessage[]
  @Action('setFixedData', { namespace: 'chat' }) setFixedDataChat!: Function
  @Action('addFixedDataLocal', { namespace: 'chat' })
  addFixedDataLocalChat!: Function

  @Action('setItemsRef', { namespace: 'chat' }) setItemsRefChat!: Function
  @Action('unSetItemsRef', { namespace: 'chat' }) unSetItemsRefChat!: Function
  @Action('adddDataServer', { namespace: 'chat' }) adddDataServerChat!: Function

  mounted() {
    console.log('sedond mounted')
    this.setFixedDataChat()
  }

  switchToSubscribeServerData() {
    this.setItemsRefChat({
      ref: dbChatRef
    })
  }

  switchBackToLocalData() {
    this.unSetItemsRefChat()

    this.setFixedDataChat()
  }

  addChatServer() {
    const message: ChatMessage = { userid: 'server', message: 'server data' }
    const newChat = dbChatRef.push()
    newChat.set(message).then(() => {
      console.log('message set')
    })
  }

  adddDataServerChatButton() {
    const message: ChatMessage = { userid: 'server2', message: 'server data2' }
    this.adddDataServerChat({
      ref: dbChatRef,
      message
    })
  }

  addChatLocal() {
    const message: ChatMessage = {
      userid: 'local added',
      message: 'local added datat'
    }
    this.addFixedDataLocalChat(message)
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
}
</style>
