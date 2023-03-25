import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../store/reducers/reducer";


export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;