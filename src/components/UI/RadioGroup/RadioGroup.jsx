import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../redux/auth/selectors";
import { useFormContext, Controller } from "react-hook-form";
import iconsPath from "../../../assets/img/icons.svg";
import css from "./RadioGroup.module.css";

const RadioGroup = ({ name, options }) => {
  const { control } = useFormContext();
  const theme = useSelector(selectTheme);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={css.radioGroup}>
          {options.map((option, index) => (
            <div key={index} className={css.radioOption}>
              <input
                type="radio"
                value={option}
                id={`${name}-${option}`}
                checked={field.value === option}
                onChange={() => field.onChange(option)}
                className={clsx(css.radioInput, css[theme])}
              />
              <label htmlFor={`${name}-${option}`} className={css.radioLabel}>
                <span className={css.customRadio}>
                  <svg
                    className={clsx(css.icon)}
                    width="18"
                    height="18"
                    aria-label="check icon"
                  >
                    <use href={`${iconsPath}#icon-x-radio`} />
                  </svg>
                </span>
                {option}
              </label>
            </div>
          ))}
        </div>
      )}
    />
  );
};

export default RadioGroup;
