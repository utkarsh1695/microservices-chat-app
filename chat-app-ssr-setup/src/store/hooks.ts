import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch } from ".";
import { AppState } from "./reducers";

export const useStateDispatch = () => useDispatch<AppDispatch>();
export const useStateSelector: TypedUseSelectorHook<AppState> = useSelector;