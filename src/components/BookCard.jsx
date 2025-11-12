import { Link } from "react-router-dom";
import "./BookCard.css";

const BookCard = ({ book }) => {
  return (
    // Column wrapper for Bootstrap grid
    <div className="col-md-4 mb-3">
      {/* Card container */}
      <div className="card h-100">
        <div className="card-body">
          {/* Book title */}
          <h5 className="card-title">{book.title}</h5>

          {/* Book author */}
          <p className="card-text"><strong>Author:</strong> {book.author}</p>

          {/* Book category */}
          <p className="card-text"><strong>Category:</strong> {book.category}</p>

          {/* Book rating */}
          <p className="card-text"><strong>Rating:</strong> ⭐ {book.rating}</p>

          {/* Link to view full book details */}
          <Link to={`/book/${book.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
