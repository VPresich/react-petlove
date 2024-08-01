import { useState } from "react";
import iconsPath from "../../../assets/img/icons.svg";
import clsx from "clsx";
import css from "./DropDownSelector.module.css";

const DropDownSelector = ({ btnLabel, options, selectedOption, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnChange = (event) => {
    onChange(event.target.value);
    setIsOpen(!isOpen);
  };

  return (
    <div className={css.container}>
      <button
        className={clsx(css.btn, { [css.open]: isOpen })}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={css.text}>{btnLabel}</span>
        <div className={css.iconContainer}>
          <svg className={css.icon} aria-label="arrow icon">
            <use href={`${iconsPath}#icon-dropdown`} />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className={css.dropdown}>
          {options.map((option, index) => (
            <label
              key={index}
              className={clsx(css.option, {
                [css.selected]: selectedOption === option,
                [css.inactive]: selectedOption !== option,
              })}
            >
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleOnChange}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownSelector;
