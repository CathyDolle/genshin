import { configureStore, combineReducers } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import newsSlice from './newsSlice';

const rootReducer = combineReducers({
  app: appSlice.reducer,
  news: newsSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
