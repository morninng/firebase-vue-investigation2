<template>
  <div class="container">
    <span>second</span>
    <div>messagesChat -- {{ messagesChat }}</div>
    <div>------------</div>
    <div>messagesObjChat -- {{ messagesObjChat }}</div>
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
import { dbChatCollection } from '@/plugins/firebase2'

@Component({
  components: {}
})
export default class Index extends Vue {
  @Getter('messages', { namespace: 'chat' }) messagesChat!: ChatMessage[]
  @Getter('messagesObj', { namespace: 'chat' }) messagesObjChat!: any
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
      collection: dbChatCollection.orderBy('date')
    })
  }

  switchBackToLocalData() {
    this.unSetItemsRefChat()

    this.setFixedDataChat()
  }

  addChatServer() {
    const message: ChatMessage = {
      userid: 'server',
      message: 'server data',
      date: new Date()
    }

    dbChatCollection.add(message)
  }

  adddDataServerChatButton() {
    const message: ChatMessage = {
      userid: 'server2',
      message: 'server data2',
      date: new Date()
    }
    this.adddDataServerChat({
      collection: dbChatCollection,
      message
    })
  }

  addChatLocal() {
    const message: ChatMessage = {
      userid: 'local added',
      message: 'local added datat',
      id: 'ssss'
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
