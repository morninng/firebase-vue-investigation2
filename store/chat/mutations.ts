import { MutationTree } from "vuex";
import { ChatState, ChatMessage } from "@/model/chat";



const mutations: MutationTree<ChatState> = {
  setRoomName: (state, data: string): void => {
    state.roomName = data;
  },

  setMessages: (state, data: ChatMessage[]): void => {
    state.messages = data;
  },

  addMessages: (state, data: ChatMessage): void => {
    state.messages.push(data);
  },

};

export default mutations;
