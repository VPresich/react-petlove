import css from "./Button.module.css";
import clsx from "clsx";

const Button = ({ children, onClick, btnAuxStyles, ...props }) => {
  return (
    <button
      className={clsx(css.btn, btnAuxStyles && btnAuxStyles)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
