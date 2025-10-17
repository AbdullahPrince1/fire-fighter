import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";

export default function AuthProvider({ children }) {
  const [userData, setUserData] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //! Sign in with google pop up
  const googleProvider = new GoogleAuthProvider();
  const googlePopupSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //! sign in using Email ans Pass
  const signInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //! create Account With Email Pass
  const createAccountWithEmailPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //! email verification
  const emailVerification = () => {
    if (auth.currentUser) {
      setLoading(true);
      return sendEmailVerification(auth.currentUser);
    }
  };

  //! updateProfileInfo
  const updateProfileInfo = (userName) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName: userName });
  };

  //! forgotPass
  const forgotPass = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  //! SignOut
  const signOutUser = () => {
    setLoading(true);
    setUser(null);
    return signOut(auth);
  };

  //! observer
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      }
    });
  }, []);

  const authInfo = {
    googlePopupSignin,
    signInWithEmail,
    setUserData,
    userData,
    createAccountWithEmailPass,
    emailVerification,
    updateProfileInfo,
    forgotPass,
    user,
    signOutUser,
    loading
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
}
