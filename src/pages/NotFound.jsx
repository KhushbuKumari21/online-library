import { Link, useLocation } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  // Get the current URL path that does not match any route
  const location = useLocation();

  return (
    <div className="container text-center mt-5">
      <h2>404 - Page Not Found</h2>
      {/* Display the invalid URL path */}
      <p>No match for <strong>{location.pathname}</strong></p>
      {/* Button to navigate back to home page */}
      <Link to="/" className="btn btn-primary mt-3">Go Home</Link>
    </div>
  );
};

export default NotFound;
