import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../stateManager/reducers';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector