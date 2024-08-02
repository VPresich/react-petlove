import css from "./Button.module.css";
import clsx from "clsx";

const Button = ({
  children,
  onClick,
  size = "small",
  background = "primary",
  uppercase = false,
  width = "100%",
  ...props
}) => {
  const style = {
    width: width,
  };
  return (
    <button
      className={clsx(
        css.btn,
        css[size],
        css[background],
        uppercase && css.uppercase
      )}
      style={style}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

// const size = ["large", "medium", "small", "sxsmall"];
// const background = ["primary", "secondary", "transparent", "cancel"];
// const uppercase = true;
