import clsx from "clsx";
import { useFormContext, Controller } from "react-hook-form";
import iconsPath from "../../../assets/img/icons.svg";
import css from "./GenderGroup.module.css";

const GenderGroup = ({ name, className }) => {
  const { control } = useFormContext();

  const options = ["female", "male", "multiple"];

  return (
    <div className={className}>
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
                  onChange={() =>
                    field.onChange(field.value === option ? undefined : option)
                  }
                  className={clsx(css.radioInput)}
                />
                <label
                  htmlFor={`${name}-${option}`}
                  className={clsx(css.customRadio, css[option])}
                >
                  <svg
                    className={clsx(css.icon, css[option])}
                    aria-label={`${option} icon`}
                  >
                    <use href={`${iconsPath}#icon-${option}`} />
                  </svg>
                </label>
              </div>
            ))}
          </div>
        )}
      />
    </div>
  );
};

export default GenderGroup;
