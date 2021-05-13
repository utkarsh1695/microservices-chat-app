import { HomeActions, HomeState } from "./actionTypes";

const INITIAL_STATE: HomeState = {
  flag: false
};

const HomeReducer = (
  state = INITIAL_STATE, action: HomeActions
): HomeState => {
  switch (action.type) {
    case "TEST_ACTION": return { ...state, flag: action.flag };
    default: return { ...state };
  }
};

export default HomeReducer;