import { ChatActions } from "./actionTypes";

export const testAction = (flag: boolean): ChatActions => ({
  type: "TEST_ACTION",
  flag
});