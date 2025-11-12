import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";

const AddBook = () => {
  // State to store the input values of the new book
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: ""
  });

  const dispatch = useDispatch(); // To dispatch actions to Redux store
  const navigate = useNavigate(); // To navigate programmatically after adding book

  // Handle input changes for all fields dynamically
  const handleChange = (e) => setBook({ ...book, [e.target.name]: e.target.value });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (!book.title || !book.author || !book.category || !book.description || !book.rating) {
      alert("Please fill all fields");
      return;
    }

    // Dispatch the addBook action with a unique ID
    dispatch(addBook({ ...book, id: Date.now() }));

    // Navigate to the "All Books" page after adding
    navigate("/books/All");
  };

  return (
    <div className="container mt-4">
      <h2>Add a New Book</h2>
      {/* Form to input new book details */}
      <form onSubmit={handleSubmit} className="w-50">
        {/* Generate input fields dynamically */}
        {["title", "author", "category", "description", "rating"].map((field) => (
          <input
            key={field}
            className="form-control mb-2"
            placeholder={field.toUpperCase()} // Placeholder shows field name in uppercase
            name={field} // Name attribute corresponds to state property
            value={book[field]} // Controlled input value
            onChange={handleChange} // Update state on change
          />
        ))}
        {/* Submit button */}
        <button className="btn btn-success">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
