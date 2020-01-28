import { ActionTree } from "vuex";
import { firestoreAction, firebaseAction } from 'vuexfire'
import RootState from "@/model/root";
import { ChatState, ChatMessage  } from "@/model/chat";

const actions: ActionTree<ChatState, RootState> = {


  setFixedData({ commit }, roomName?: string) {
    const message: ChatMessage[] = [{userid: 'aa', message: 'cc'}, {userid: 'aa', message: 'cc'} ];
    console.log("setFixedData");
    commit("setMessages", message);
  },

  setItemsRef: firebaseAction((context, payload) => {
    context.bindFirebaseRef("messages", payload.ref, payload.options)
    console.log('binding done');
  }),


  unSetItemsRef: firebaseAction((context, payload) => {
    context.unbindFirebaseRef("messages");
    console.log('unbinding done');
  }),


  addFixedDataLocal( { commit }, data: ChatMessage){
    console.log("addFixedData");
    commit("addMessages", data);
  },


  adddDataServer( { commit }, payload){
    const ref = payload.ref;
    const message = payload.message;

    const newChat = ref.push()
    newChat.set(message).then(() => {
      console.log('message set')
    })

  }

};

export default actions;
