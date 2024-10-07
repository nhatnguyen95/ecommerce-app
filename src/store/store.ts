import {combineSlices, configureStore} from '@reduxjs/toolkit';
import {useDispatch, useSelector} from 'react-redux';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  PersistConfig,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {moviesSlice} from './slices/moviesSlice';

const rootReducer = combineSlices(moviesSlice);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
export const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  return store;
};

export const store = makeStore();
export const persistor = persistStore(store);
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
