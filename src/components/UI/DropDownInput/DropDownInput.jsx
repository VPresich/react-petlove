import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { AiOutlineClockCircle } from "react-icons/ai";
import css from "./DropDownInput.module.css";

const DropDownInput = ({ name, options, placeholder, onChange, value }) => {
  const {
    formState: { errors },
  } = useFormContext();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value || "");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onChange({ target: { name, value: option } });
    setIsOpen(false);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.inputWrapper} onClick={() => setIsOpen(!isOpen)}>
        <input
          name={name}
          placeholder={placeholder}
          value={selectedOption}
          readOnly
          className={css.input}
        />
        <AiOutlineClockCircle className={css.icon} />
      </div>
      {isOpen && (
        <div className={css.dropdownWrapper}>
          <span className={css.dropdownLabel}>Meeting time</span>
          <ul className={css.dropdown}>
            {options.map((option, index) => (
              <li
                key={index}
                className={css.dropdownItem}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
      {errors[name] && (
        <span className={css.error}>{errors[name].message}</span>
      )}
    </div>
  );
};

export default DropDownInput;
