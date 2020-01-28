export interface ChatMessage {
  userid: string;
  message: string;
}
export interface ChatState {
  roomName: string | null;
  messages: ChatMessage[];
}
