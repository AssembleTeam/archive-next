import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const authData = localStorage.getItem('authData');
    if (authData) {
      setUser(JSON.parse(authData));
    }

    // Simulate authentication by delaying for 2 seconds
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const register = async (credentials) => {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ credentials }),
    });

    if (response.ok) {
      const user = await response.json();
      console.log('berhasil register');
    }
  };

  const login = async (email, password) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
      } else {
        const error = await response.json();
        setErrorMsg(error);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while logging in');
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, login, logout, register, errorMsg, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
