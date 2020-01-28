export interface ChatMessage {
  userid: string;
  message: string;
  date?: Date | firebase.firestore.Timestamp,
  seconds?: number,
  id?: string;
}
export interface ChatState {
  roomName: string;
  messages: ChatMessage[];
  messagesObj: any;
}
