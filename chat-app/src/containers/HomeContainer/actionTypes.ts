export interface HomeState {
  flag: boolean;
}

export interface TestAction {
  type: "TEST_ACTION";
  flag: boolean;
}

export type HomeActions = TestAction;