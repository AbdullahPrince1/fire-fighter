import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useState } from "react";

export default function AuthProvider({ children }) {
  const [userData, setUserData] = useState("");
  //! Sign in with google pop up
  const googleProvider = new GoogleAuthProvider();
  const googlePopupSignin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //! sign in using Email ans Pass
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //! create Account With Email Pass
  const createAccountWithEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //! email verification
  const emailVerification = () => {
    if (auth.currentUser) {
      return sendEmailVerification(auth.currentUser);
    }
  };
  //! updateProfileInfo
  const updateProfileInfo = (userName) => {
    return updateProfile(auth.currentUser, { displayName: userName });
  };
  //! forgotPass
  const forgotPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const authInfo = {
    googlePopupSignin,
    signInWithEmail,
    setUserData,
    userData,
    createAccountWithEmailPass,
    emailVerification,
    updateProfileInfo,
    forgotPass,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
}
