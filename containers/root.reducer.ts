import { combineReducers } from 'redux';
import searchReducer from '../search/search.reducer';

export const initialState = {
};

export interface IRootState {};

/**
 * Combine reducers
 */
export const rootReducer = combineReducers<IRootState>({
  searchReducer
});
