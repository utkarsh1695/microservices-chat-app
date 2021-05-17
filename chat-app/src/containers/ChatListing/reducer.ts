import { ChatActions } from "./actionTypes";

export interface ChatState {
  flag: boolean;
}

const INITIAL_STATE: ChatState = {
  flag: false
};

const ChatReducer = (
  state = INITIAL_STATE, action: ChatActions
): ChatState => {
  switch (action.type) {
    case "TEST_ACTION": return { ...state, flag: action.flag };
    default: return { ...state };
  }
};

export default ChatReducer;