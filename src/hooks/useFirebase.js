import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,
    signOut, updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFireBase from "../Firebase/firebase.int";
initializeFireBase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [userLoading, setUserLoading] = useState(true);
  const auth = getAuth();

  //create user with email and Password
  const handelCreateUser = (name, email, password, navigate, from) => {
    setUserLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        const newUser = { email: email, displayName: name };
        setUser(newUser);

        //updating user updateProfile
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            //error empty
          })
          .catch((error) => {
            //set error
            console.log(error);
          });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      })
      .finally(() => setUserLoading(false));
  };

  //sign in existing user with email and password
  const handleSignInUser = (email, password, navigate, from) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  //log in with google
  const handleGoogleLogin = (navigate, from) => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate(from, { replace: true });
        console.log(token, user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, credential, email);
      });
  };

  //log out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setUserLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  return {
    user,
    handleGoogleLogin,
    handleSignOut,
    userLoading,
    handelCreateUser,
    handleSignInUser
  };
};
export default useFirebase;
