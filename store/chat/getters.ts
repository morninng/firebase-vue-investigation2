import { GetterTree } from "vuex";
import RootState from "@/model/root";
import { ChatState, ChatMessage } from "@/model/chat";

export const getters: GetterTree<ChatState, RootState> = {
  messages: (state): ChatMessage[] => state.messages,

  messagesObj: (state): any => {

    const updated_message = JSON.parse(JSON.stringify(state.messages));

    console.log('message obj calculated')

    return {obj: updated_message.map((data: Object)=>{

      return Object.assign(data, {time: new Date()});

    })}

  },
  roomName: (state): string => state.roomName || '',
};

export default getters;

