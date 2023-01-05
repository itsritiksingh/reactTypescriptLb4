import { configureStore } from "@reduxjs/toolkit";
// importing the reducer from todo slice
import todosReducer from "./todoSlices";
// use 'configreStrore'  function to create the store
export const store = configureStore({
  reducer: {
  todosReducer
  }
});

// defining the 'rootstate' as the return type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch