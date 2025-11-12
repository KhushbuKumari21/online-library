
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">📚 Online Library</Link>
      <div>
        <Link className="nav-link d-inline text-light px-2" to="/">Home</Link>
        <Link className="nav-link d-inline text-light px-2" to="/books/All">Browse Books</Link>
        <Link className="nav-link d-inline text-light px-2" to="/add">Add Book</Link>
      </div>
    </nav>
  );
};

export default Navbar;
