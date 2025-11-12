import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";

// Configure the Redux store
const store = configureStore({
  reducer: {
    // Add the books slice reducer
    books: booksReducer,
  },
});

// Export the store to be used in the app
export default store;
