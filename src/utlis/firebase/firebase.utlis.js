import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPmKb-DWBE-L7YPNSIoXRGeFFqSGDfjCQ",
  authDomain: "crown-clothing-db-4f970.firebaseapp.com",
  projectId: "crown-clothing-db-4f970",
  storageBucket: "crown-clothing-db-4f970.appspot.com",
  messagingSenderId: "868817193394",
  appId: "1:868817193394:web:45c6109a317b929dc43cab",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(` something went wrong ${error.message}`);
    }
  }

  return userDocRef;
};
