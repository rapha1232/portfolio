// src/hooks/useAuth.js
import { useEffect, useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Validate token with your backend
      setIsAuthenticated(true);
      setUser({ token });
    }
  }, []);

  return { user, isAuthenticated };
}
