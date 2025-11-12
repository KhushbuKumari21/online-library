import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./BookDetails.css";


const BookDetails = () => {
  const { id } = useParams();
  const book = useSelector((state) => state.books.find((b) => b.id === Number(id)));

  if (!book) return <p>Book not found Here !</p>;

  return (
    <div className="container mt-4">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> ⭐ {book.rating}</p>
      <Link to={`/books/${book.category}`} className="btn btn-primary">Back to Browse</Link>
    </div>
  );
};

export default BookDetails;
