import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authed, setAuthed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // This is to listen

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setAuthed(!!firebaseUser);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const loginwithgoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      setAuthed(true);
      return result.user;
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setAuthed(false);
    } catch (error) {
      console.error("Error during sign-out:", error);
      throw error;
    }
  };

  const value = { user, authed, isLoading, loginwithgoogle, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
