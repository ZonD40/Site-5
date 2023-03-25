import { RootState } from './../store/reducers/reducer';
import { TypedUseSelectorHook, useSelector } from 'react-redux';



export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
