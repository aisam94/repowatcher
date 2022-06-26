import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import mySaga from "../sagas/saga";

//import reducers
import repoReducer from "../reducers/repoReducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    repo: repoReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(mySaga);

export default store;
