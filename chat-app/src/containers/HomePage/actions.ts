import { HomeActions } from "./actionTypes";

export const testAction = (flag: boolean): HomeActions => ({
  type: "TEST_ACTION",
  flag
});