import { Link } from "react-router-dom";
import books from "../data/booksData";
import BookCard from "../components/BookCard";
import "./Home.css";

const categories = ["Fiction", "Non-Fiction", "Sci-Fi"];

const Home = () => (
  <div className="container mt-4">
    <h2>Welcome to the Online Library</h2>
    <p>Explore books by category and add your own!</p>

    <h3>Categories:</h3>
    <div>
      {categories.map((cat) => (
        <Link key={cat} to={`/books/${cat}`} className="btn btn-outline-primary m-2">{cat}</Link>
      ))}
    </div>

    <h3 className="mt-4">Popular Books</h3>
    <div className="row">
      {books.slice(0, 3).map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  </div>
);

export default Home;
