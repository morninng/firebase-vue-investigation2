import { ActionTree } from "vuex";
import { firestoreAction, firebaseAction,  } from 'vuexfire'
import RootState from "@/model/root";
import { ChatState, ChatMessage  } from "@/model/chat";

const actions: ActionTree<ChatState, RootState> = {


  setFixedData({ commit }, roomName?: string) {
    const message: ChatMessage[] = [{userid: 'aa', message: 'cc', id: "ssss"}, {userid: 'aa', message: 'cc', id: "ssffss"} ];
    console.log("setFixedData");
    commit("setMessages", message);
  },

  setItemsRef: firestoreAction((context, payload) => {

    const serialize = (snapshot: firebase.firestore.DocumentSnapshot ) => {
      return Object.defineProperty(snapshot.data(), 'id', { value: snapshot.id })
    }

    context.bindFirestoreRef("messages", payload.collection, {serialize })
    // context.bindFirestoreRef("messages", payload.collection)
    console.log('binding done');
  }),


  unSetItemsRef: firestoreAction((context, payload) => {
    context.unbindFirestoreRef("messages");
    console.log('unbinding done');
  }),


  addFixedDataLocal( { commit }, data: ChatMessage){
    console.log("addFixedData");
    commit("addMessages", data);
  },


  adddDataServer( { commit }, payload){
    const collection = payload.collection;
    const message = payload.message;

   collection.add(message)
    .then(() => {
      console.log('message set')
    })

  }

};

export default actions;
