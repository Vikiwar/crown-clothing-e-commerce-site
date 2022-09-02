import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utlis/firebase/firebase.utlis";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("you have entered wrong passwrod");
          break;
        case "auth/user-not-found":
          alert("user not found");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>already have an account ?</h2>
      <span>sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button Children="sign in" type="submit" />
          <Button
            buttontype="google"
            Children="google sign in"
            onClick={signInWithGoogle}
            type="button"
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
