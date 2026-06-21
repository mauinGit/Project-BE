import { Navigate } from 'react-router-dom';

/**
 * ProtectedRoute — redirects unauthenticated users to /login.
 * Checks for a JWT token in localStorage.
 */
function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
