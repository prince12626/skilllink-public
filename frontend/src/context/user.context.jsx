import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { uri } from '../data/api';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ loggedin: false, data: null });

  const navigate = useNavigate();

  // Fetch current user if token exists
  const fetchUser = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const role = localStorage.getItem('role');
      const res = await axios.get(`${uri}/auth/${role}/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setUser({ loggedin: true, data: res.data });
    } catch (err) {
      console.error('Failed to fetch user', err);
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      setUser({ loggedin: false, data: null });
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setUser({ loggedin: false, data: null });
    navigate('/')
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, logout, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider
export const useUser = () => useContext(UserContext);
