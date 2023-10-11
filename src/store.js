import { combineReducers, configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";

import { pokemonApi } from "./services/pokemon";
import counterReducer from "./counterSlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
  persistStore,
} from "redux-persist";
import { createStateSyncMiddleware } from "redux-state-sync";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [pokemonApi.reducerPath],
};

const syncConfig = {
  blacklist: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    // Add the generated reducer as a specific top-level slice
    // @ts-ignore
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    counter: counterReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(createStateSyncMiddleware(syncConfig))
      .concat(pokemonApi.middleware),
});

export const persistor = persistStore(store);

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
