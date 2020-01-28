import { ActionTree } from "vuex";
import RootState from "@/model/root";
import { ChatState, ChatMessage } from "@/model/chat";

const actions: ActionTree<ChatState, RootState> = {

  
  async get({ commit }, roomName?: string) {

    // dummy await

    const message: ChatMessage[] = [{userid: 'aa', message: 'cc'}, {userid: 'aa', message: 'cc'} ];
    commit("setMessages", message);
  },

  async put( { commit }, data: ChatMessage){

    commit("addMessages", data);
  }

 
};

export default actions;
