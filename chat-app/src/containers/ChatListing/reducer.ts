import { User } from "../../types";
import { ChatActions } from "./actionTypes";

export interface ChatState {
  flag: boolean;
  userList: Array<User>;
}

const INITIAL_STATE: ChatState = {
  flag: false,
  userList: [],
};

const ChatReducer = (
  state = INITIAL_STATE, action: ChatActions
): ChatState => {
  switch (action.type) {
    case "TEST_ACTION": return { ...state, flag: action.flag };
    case "GET_USER_LIST": return { ...state, userList: action.userList };
    default: return { ...state };
  }
};

export default ChatReducer;