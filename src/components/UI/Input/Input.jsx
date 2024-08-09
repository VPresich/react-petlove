import { useState } from "react";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";
import { IoCheckmarkOutline } from "react-icons/io5";
import checkPasswordSecurity from "../../../auxiliary/checkPasswordSecurity";
import css from "./Input.module.css";

const Input = ({
  name,
  onChange,
  value,
  placeholder,
  type,
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    setValue,
    formState: { errors },
  } = useFormContext();

  const handleTooglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleClearInput = () => {
    setValue(name, "");
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  const isPasswordSecure =
    type === "password" && !errors[name] && checkPasswordSecurity(value);

  const inputClass = clsx(
    css.input,
    errors[name] && css.red,
    isPasswordSecure && css.green,
    className && className
  );

  return (
    <div className={css.wrapper}>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClass}
        type={inputType}
      />
      {type === "password" && (
        <span onClick={handleTooglePassword} className={css.icon}>
          {showPassword ? (
            <FaEye className={css.eyeIcon} />
          ) : (
            <FaEyeSlash className={css.eyeIcon} />
          )}
        </span>
      )}

      {errors[name] && value && (
        <span
          onClick={handleClearInput}
          className={clsx(css.icon, type === "password" && css.shift)}
        >
          <MdOutlineClear className={css.clearIcon} />
        </span>
      )}

      {isPasswordSecure && (
        <span className={clsx(css.icon, css.shift)}>
          <IoCheckmarkOutline className={css.okIcon} />
        </span>
      )}

      {errors[name] && (
        <span className={clsx(css.message, css.error)}>
          {errors[name].message}
        </span>
      )}
      {isPasswordSecure && (
        <span className={clsx(css.message, css.success)}>
          Password is secure
        </span>
      )}
    </div>
  );
};

export default Input;
