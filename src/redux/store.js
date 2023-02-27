import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice.jsx';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const contactsConfig = {
  key: 'contact',
  storage,
  blacklist: 'filter',
};
export const store = configureStore({
  reducer: {
    contactsData: persistReducer(contactsConfig, contactsReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
