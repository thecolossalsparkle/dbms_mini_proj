import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on initial render
  useEffect(() => {
    const user = localStorage.getItem('medidash_user');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  // Sign in function
  const login = (email, password) => {
    // In a real app, this would make an API call
    return new Promise((resolve, reject) => {
      // Mock authentication - in a real app, this would be an API call
      if (email === 'doctor@example.com' && password === 'password') {
        const user = {
          id: 'doc-1',
          name: 'Dr. John Smith',
          email: 'doctor@example.com',
          role: 'doctor',
          specialty: 'Cardiologist',
          imageUrl: 'https://randomuser.me/api/portraits/men/36.jpg'
        };
        setCurrentUser(user);
        localStorage.setItem('medidash_user', JSON.stringify(user));
        resolve(user);
      } else if (email === 'patient@example.com' && password === 'password') {
        const user = {
          id: 'pat-1',
          name: 'Emily Davis',
          email: 'patient@example.com',
          role: 'patient',
          imageUrl: 'https://randomuser.me/api/portraits/women/65.jpg'
        };
        setCurrentUser(user);
        localStorage.setItem('medidash_user', JSON.stringify(user));
        resolve(user);
      } else {
        reject(new Error('Invalid email or password'));
      }
    });
  };

  // Sign out function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('medidash_user');
  };

  // Register function
  const register = (userData) => {
    // In a real app, this would make an API call to register the user
    return new Promise((resolve, reject) => {
      // Mock registration
      const user = {
        id: `${userData.role}-${Math.floor(Math.random() * 1000)}`,
        ...userData
      };
      setCurrentUser(user);
      localStorage.setItem('medidash_user', JSON.stringify(user));
      resolve(user);
    });
  };

  const value = {
    currentUser,
    login,
    logout,
    register,
    isDoctor: currentUser?.role === 'doctor',
    isPatient: currentUser?.role === 'patient',
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext; 