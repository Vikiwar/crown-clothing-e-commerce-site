import "./button.styles.scss";
const ButtonTypesClass = {
  inverted: "inverted",
  google: "google-sign-in",
};

const Button = ({ Children, buttontype, ...otherprops }) => {
  return (
    <button
      className={`button-container ${ButtonTypesClass[buttontype]} `}
      {...otherprops}
    >
      {Children}
    </button>
  );
};

export default Button;
