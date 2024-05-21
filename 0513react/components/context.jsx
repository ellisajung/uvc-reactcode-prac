import { useState, createContext, useContext } from 'react';

// context 생성
const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [name, setName] = useState('');
  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

// 생성한 context 가져오기
const useUser = () => useContext(UserContext);

const NameInput = () => {
  const { name, setName } = useUser();
  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
    />
  );
};

const NameDisplay = () => {
  const { name } = useUser();
  return <h1>모르니까, {name}!</h1>;
};

export const Context = () => {
  return (
    <UserProvider>
      <NameDisplay />
      <NameInput />
    </UserProvider>
  );
};

