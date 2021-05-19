import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import Reducers, { AppState } from "./reducers";

const initialState: Partial<AppState> = {};
const store = createStore(
  Reducers,
  initialState,
  applyMiddleware(ReduxThunk)
);

export default store;

export type AppDispatch = typeof store.dispatch;