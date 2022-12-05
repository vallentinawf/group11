import { createContext, useState } from 'react';

const UserContext = createContext();

const initialState = {
  id: localStorage.getItem('userId'),
  email: localStorage.getItem('email'),
  username: localStorage.getItem('username'),
  role: localStorage.getItem('role'),
  borrowedBookIds: localStorage.getItem('borrowedBookIds'),
};

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
