import { useEffect } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RouteResetter = () => {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const isProjectDetail = matchPath("/projects/:projectId", location.pathname);

    if (isAuthenticated && !isProjectDetail) {
      logout();
    }
  }, [location.pathname]);

  return null;
};

export default RouteResetter;
