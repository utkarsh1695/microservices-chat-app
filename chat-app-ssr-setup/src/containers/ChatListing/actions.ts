import { ChatActions } from "./actionTypes";
import { ActionCreator, Dispatch } from "redux";
import { UserService } from "../../service";

export const testAction = (flag: boolean): ChatActions => ({
  type: "TEST_ACTION",
  flag
});

export const actionGetUserList: ActionCreator<any> =
  () => async (dispatch: Dispatch) => {
    const userList = await UserService.getUserList();
    dispatch({
      type: "GET_USER_LIST",
      userList
    })
  };