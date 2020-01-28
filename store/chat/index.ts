import { Module } from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import { ChatState } from "@/model/chat";
import RootState from '@/model/root';

export const name = "customer";

const state = (): ChatState => ({
  roomName: 'initial room',
  messages: []
});


const Chat: Module<ChatState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

export default Chat;
