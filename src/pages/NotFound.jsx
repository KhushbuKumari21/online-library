import { Link, useLocation } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  // Get the unmatched route path from React Router
  const location = useLocation();

  return (
    <div className="notfound-container">
      {/* Page title */}
      <h2>404 - Page Not Found</h2>

      {/* Display the invalid URL that caused the 404 */}
      <p>No match for <strong>{location.pathname}</strong></p>

      {/* Link button to navigate back to the Home page */}
      <Link to="/" className="btn btn-primary mt-3">Go Home</Link>
    </div>
  );
};

export default NotFound;
