import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import Reducers, { AppState } from "./reducers";
import ReduxLogger from "redux-logger";

const initialState: Partial<AppState> = {};
const store = createStore(
  Reducers,
  initialState,
  applyMiddleware(ReduxThunk, ReduxLogger)
);

export default store;

export type AppDispatch = typeof store.dispatch;