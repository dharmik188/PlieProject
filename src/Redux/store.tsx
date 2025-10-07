import { configureStore } from '@reduxjs/toolkit';
import logReducer from '../Redux/Slices/logSlice';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Persist configuration
const persistConfig = {
  key: 'user',          // unique key
  storage: AsyncStorage, 
  whitelist: ['username', 'password', 'isLoggedIn'], // what to persist
};

const persistedReducer = persistReducer(persistConfig, logReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
