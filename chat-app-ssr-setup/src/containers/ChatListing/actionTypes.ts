import { ChatState } from "./reducer";

export interface TestAction {
  type: "TEST_ACTION";
  flag: ChatState['flag'];
}

export interface GetUserList {
  type: "GET_USER_LIST";
  userList: ChatState['userList'];
}

export type ChatActions = TestAction
  | GetUserList;