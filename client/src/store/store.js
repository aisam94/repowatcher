import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import mySaga from "../sagas/saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//import reducers
import repoReducer from "../reducers/repoReducer";

const sagaMiddleware = createSagaMiddleware();

//redux-persist config
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, repoReducer);

//store config
const store = configureStore({
  reducer: {
    repo: persistedReducer,
  },
  middleware: [sagaMiddleware],
});

let persistor = persistStore(store);

sagaMiddleware.run(mySaga);

export { persistor, store };
