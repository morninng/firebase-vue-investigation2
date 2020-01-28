import { GetterTree } from "vuex";
import RootState from "@/model/root";
import { ChatState, ChatMessage } from "@/model/chat";

export const getters: GetterTree<ChatState, RootState> = {
  messages: (state): ChatMessage[] => state.messages,

  messagesObj: (state): any => {

    const messages: any[] = []

    state.messages.forEach((data: ChatMessage)=>{

      const date: firebase.firestore.Timestamp = data.date as firebase.firestore.Timestamp;
      messages.push({
        id: data.id,
        message: data.message,
        userid: data.userid,
        seconds: data.date ? date.seconds : null,
        date: data.date ? new Date(date.seconds * 1000 + date.nanoseconds / 1000000 ) : '',
      })
    })
    console.log('message obj calculated')
    return {arr: messages };
  },
  roomName: (state): string => state.roomName || '',
};

export default getters;

