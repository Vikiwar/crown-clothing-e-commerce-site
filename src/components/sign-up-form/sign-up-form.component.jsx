import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import {
  createAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utlis/firebase/firebase.utlis";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password not matching");
      return;
    }

    try {
      const { user } = await createAuthWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { displayName });

      resetFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user email already exist");
      } else {
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
      <h2>Don't have an account ?</h2>
      <span>sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="display  Name "
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

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

        <FormInput
          label="confirm password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button Children="submit" type="submit" />
      </form>
    </div>
  );
};

export default SignUpForm;
