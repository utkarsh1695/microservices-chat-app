import { combineReducers } from "redux";
import ChatReducer from "../containers/ChatListing/reducer";

const Reducers = combineReducers({
  chat: ChatReducer
});

export default Reducers;

export type AppState = ReturnType<typeof Reducers>;