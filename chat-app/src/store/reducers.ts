import { combineReducers, Dispatch } from "redux";
import HomeReducer from "../containers/HomePage/reducer";

const Reducers = combineReducers({
  home: HomeReducer
});

export default Reducers;

export type AppState = ReturnType<typeof Reducers>;