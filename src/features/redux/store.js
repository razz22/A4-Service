import { configureStore } from "@reduxjs/toolkit";
import clientAuthSlice from "./slices/clientSlices/clientAuthSlice";
import adminAuthSlice from "./slices/adminSlices/adminAuthSlice";
import { adminSliceApi } from "./apiQuery/adminBaseQuery";
import { combineReducers } from "redux";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const isServer = typeof window === "undefined";

const reducers = combineReducers({
  clientAuthSlice: clientAuthSlice,
  adminAuthSlice: adminAuthSlice,
  [adminSliceApi.reducerPath]: adminSliceApi.reducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage: isServer ? undefined : storage, // Use storage only in the browser
};

// const persistedReducer = persistReducer(persistConfig, reducers);
const persistedReducer = isServer
  ? reducers // No persistence during SSR
  : persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([adminSliceApi.middleware]),
});

export let persistor = isServer ? null : persistStore(store);

export default store;
