import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";


const AddBook = () => {
  const [book, setBook] = useState({ title: "", author: "", category: "", description: "", rating: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => setBook({ ...book, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!book.title || !book.author || !book.category || !book.description || !book.rating) {
      alert("Please fill all fields");
      return;
    }
    dispatch(addBook({ ...book, id: Date.now() }));
    navigate("/books/All");
  };

  return (
    <div className="container mt-4">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit} className="w-50">
        {["title", "author", "category", "description", "rating"].map((field) => (
          <input
            key={field}
            className="form-control mb-2"
            placeholder={field.toUpperCase()}
            name={field}
            value={book[field]}
            onChange={handleChange}
          />
        ))}
        <button className="btn btn-success">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
