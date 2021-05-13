import { combineReducers } from "redux";
import HomeReducer from "../containers/HomeContainer/reducer";

const Reducers = combineReducers({
  home: HomeReducer
});

export default Reducers;

export type AppState = ReturnType<typeof Reducers>;