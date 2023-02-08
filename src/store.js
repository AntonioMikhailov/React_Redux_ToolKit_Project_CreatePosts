 //  <БЕЗ LS - Persist 
// import { configureStore } from '@reduxjs/toolkit'
// import  PostSlice from './PostsSlice'

 
// export default configureStore({
//   reducer: {   
//     PostSlice: PostSlice 
//    }  })

// /////////////////// Persist
import { FLUSH, REHYDRATE,PAUSE,PERSIST,PURGE, REGISTER, persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'  

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  PostSlice  from './PostsSlice'

const persistConfig = { 
  key: 'root',  
   storage: storage, 
}
const rootReducer = combineReducers({ 
  PostSlice: PostSlice 
  })
 
const persistedReducer = persistReducer(persistConfig, rootReducer  )
 

const store = configureStore({
  reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
     export const persistor = persistStore(store)  
   export default store

