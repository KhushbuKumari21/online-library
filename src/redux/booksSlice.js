import { createSlice } from "@reduxjs/toolkit";
import booksData from "../data/booksData";

// Create a slice for managing books
const booksSlice = createSlice({
  name: "books", // Name of the slice
  initialState: booksData, // Initial state from predefined books data
  reducers: {
    // Reducer to add a new book to the state
    addBook: (state, action) => {
      // Add the new book at the beginning of the array
      state.unshift(action.payload);
    },
  },
});

// Export the action to add a book
export const { addBook } = booksSlice.actions;

// Export the reducer to be used in the store
export default booksSlice.reducer;
