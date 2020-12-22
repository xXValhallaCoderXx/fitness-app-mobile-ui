import { configureStore, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

import rootReducer, { RootState } from "./root-reducer";

const store = configureStore({
  reducer: rootReducer,
});

if (module.hot) {
  module.hot.accept("./root-reducer", () => {
    const newRootReducer = require("./root-reducer").default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
