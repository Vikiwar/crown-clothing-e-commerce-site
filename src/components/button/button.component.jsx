import {
  BaseButton,
  InvertedButton,
  GoogleSignInButton,
} from "./button.styles";

export const ButtonTypesClass = {
  base: "base",
  inverted: "inverted",
  google: "google-sign-in",
};
const getButton = (buttontype = ButtonTypesClass.base) =>
  ({
    [ButtonTypesClass.base]: BaseButton,
    [ButtonTypesClass.google]: GoogleSignInButton,
    [ButtonTypesClass.inverted]: InvertedButton,
  }[buttontype]);

const Button = ({ Children, buttontype, ...otherprops }) => {
  const CustomButton = getButton(buttontype);

  return <CustomButton {...otherprops}>{Children}</CustomButton>;
};

export default Button;
