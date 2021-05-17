export interface TestAction {
  type: "TEST_ACTION";
  flag: boolean;
}

export type ChatActions = TestAction;