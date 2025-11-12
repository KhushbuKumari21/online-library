import { Link, useLocation } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const location = useLocation();
  return (
    <div className="container text-center mt-5">
      <h2>404 - Page Not Found</h2>
      <p>No match for <strong>{location.pathname}</strong></p>
      <Link to="/" className="btn btn-primary mt-3">Go Home</Link>
    </div>
  );
};

export default NotFound;
