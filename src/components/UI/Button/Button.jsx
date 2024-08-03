import css from "./Button.module.css";
import iconsPath from "../../../assets/img/icons.svg";
import clsx from "clsx";
console.log(iconsPath);
const Button = ({
  children,
  onClick,
  size = "small",
  background = "primary",
  uppercase = false,
  width = "100%",
  iconId = null,
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
      {iconId && (
        <svg className={clsx(css.icon)} aria-label="heart icon">
          <use href={`${iconsPath}#icon-heart`} />
        </svg>
      )}
    </button>
  );
};

export default Button;

// const size = ["large", "medium", "small", "sxsmall"];
// const background = ["primary", "secondary", "transparent", "cancel"];
// const uppercase = true;
