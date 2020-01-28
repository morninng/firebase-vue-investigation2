import { GetterTree } from "vuex";
import RootState from "@/model/root";
import { ChatState, ChatMessage } from "@/model/chat";

export const getters: GetterTree<ChatState, RootState> = {
  messages: (state): ChatMessage[] => state.messages,
  roomName: (state): string => state.roomName || '',
};

export default getters;
