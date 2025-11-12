
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import BookCard from "../components/BookCard";
import "./BrowseBooks.css";

const BrowseBooks = () => {
  // Default to "All" if no category param is provided
  const { category = "All" } = useParams();
  const books = useSelector((state) => state.books);
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) => {
    // Case-insensitive category match
    const matchCategory =
      category.toLowerCase() === "all" ||
      book.category.toLowerCase() === category.toLowerCase();

    const matchSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="container mt-4">
      <h2>{category} Books</h2>
      <input
        type="text"
        placeholder="Search by title or author"
        className="form-control w-50 mb-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="row">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p>No books found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;

