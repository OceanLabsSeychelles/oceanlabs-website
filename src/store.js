import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

import graphDataSlice from './reducers/graphDataSlice';
import divesSlice from './reducers/divesSlice';
import sessionSlice from './reducers/sessionSlice';
import authSlice from './reducers/authSlice';
import nestDatesSlice from "./reducers/nestSlice";
import nestDateSlice from "./reducers/nestDateSlice";
import modelReducer from "./reducers/modelReducer";
import framerReducer from "./reducers/framerReducer";
import logsReducer from "./reducers/logsReducer";


const rootReducer = combineReducers({
  graphData: graphDataSlice,
  dives: divesSlice,
  session: sessionSlice,
  auth: authSlice,
  nestDates: nestDatesSlice,
  nestDate: nestDateSlice,
  model: modelReducer,
  framer: framerReducer,
  logs: logsReducer
});


const store = configureStore({
  reducer: rootReducer,
});

export default store;
