import { useFormContext } from "react-hook-form";
import css from "./Textarea.module.css";

const Textarea = ({ name, onChange, value, placeholder }) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className={css.wrapper}>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={css.textarea}
      />
      {errors[name] && (
        <span className={css.error}>{errors[name].message}</span>
      )}
    </div>
  );
};

export default Textarea;
