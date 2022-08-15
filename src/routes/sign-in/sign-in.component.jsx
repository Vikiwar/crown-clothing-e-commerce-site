import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utlis/firebase/firebase.utlis";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}> sign in with google popup</button>
    </div>
  );
};
export default SignIn;
