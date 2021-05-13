import { createStore } from "redux";
import Reducers, { AppState } from "./reducers";

const initialState: Partial<AppState> = {};
const store = createStore(Reducers, initialState);

export default store;

export type AppDispatch = typeof store.dispatch;