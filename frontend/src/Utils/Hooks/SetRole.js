import jwt from 'jwt-decode';
import { useState } from 'react';

const SetRole = () => {
  const token = localStorage.getItem('token');
  const [isAdmin, setIsAdmin] = useState(false);

  const decodedToken = jwt(token);
  setIsAdmin(decodedToken.role === 'admin' ? true : false);

  return { token, isAdmin };
};

export { SetRole };
