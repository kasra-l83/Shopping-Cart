import cartReducer from "./cartSlice"
import storage from "redux-persist/lib/storage"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

const persistConfig= {
  key: "root",
  storage,
  whitelist: ["cart"]
}

const rootReducer= combineReducers({
  cart: cartReducer
})

const persistedReducer= persistReducer(persistConfig, rootReducer)

export const store= configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)