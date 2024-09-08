import css from "./Button.module.css";
import clsx from "clsx";

const Button = ({
  children,
  onClick,
  size = "small",
  background = "primary",
  uppercase = false,
  width,
  icon = null,
  as = "button",
  href,
  ...props
}) => {
  const style = {
    width: width || "100%",
  };

  const Component = as;
  return (
    <Component
      className={clsx(
        css.btn,
        css[size],
        css[background],
        uppercase && css.uppercase
      )}
      style={style}
      onClick={onClick}
      href={href}
      {...props}
    >
      {children}
      {icon && icon}
    </Component>
  );
};

export default Button;

// const size = ["large", "medium", "small", "sxsmall", "sxxsmall"];
// const background = ["primary", "secondary", "transparent", "cancel", "unactive"];
// const uppercase = true;
