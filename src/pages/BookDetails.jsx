import { useParams, Link } from "react-router-dom"; // useParams to get dynamic route params, Link for navigation
import { useSelector } from "react-redux"; // useSelector to access Redux state
import "./BookDetails.css"; // Import CSS for styling

const BookDetails = () => {
  // Extract the 'id' parameter from the URL
  const { id } = useParams();

  // Find the book in the Redux store that matches the id
  const book = useSelector((state) =>
    state.books.find((b) => b.id === Number(id))
  );

  // Show message if no book is found with the given id
  if (!book) return <p>Book not found Here !</p>;

  return (
    <div className="container mt-4">
      {/* Display book title */}
      <h2>{book.title}</h2>

      {/* Display book details */}
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> ⭐ {book.rating}</p>

      {/* Button to go back to the category page */}
      <Link to={`/books/${book.category}`} className="btn btn-primary">
        Back to Browse
      </Link>
    </div>
  );
};

export default BookDetails;
