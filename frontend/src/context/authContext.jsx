import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authed, setAuthed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Here a have to manage the logic of auth with firebase
  // When I have loginwithgoogle and logout with firebase I could return that

  useEffect(() => {
    function handleUserChange() {
      setIsLoading(true);
      setAuthed(true);
      setIsLoading(false);
      console.log(user);
    }
    handleUserChange();
  }, [user]);

  const value = { user, authed, isLoading, setUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    // Something
  }
  return context;
}
