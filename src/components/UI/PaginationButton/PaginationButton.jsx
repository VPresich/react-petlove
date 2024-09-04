import React from "react";
import clsx from "clsx";
import iconsPath from "../../../assets/img/icons.svg";
import css from "./PaginationButton.module.css";

const PaginationButton = ({
  text = "",
  iconId = "",
  transform = 0,
  isButton = true,
  isActive = false,
  disabled = false,
  onClick,
}) => {
  return (
    <React.Fragment>
      {isButton ? (
        <button
          className={clsx(css.btn, isActive && css.active)}
          onClick={onClick}
          disabled={disabled}
        >
          {iconId ? (
            <svg className={clsx(css.icon)} aria-label={`Icons ${iconId}`}>
              <use href={`${iconsPath}#${iconId}`} />
              {transform && (
                <use
                  href={`${iconsPath}#${iconId}`}
                  transform={`translate(${Number(transform)}, 0)`}
                />
              )}
            </svg>
          ) : (
            text
          )}
        </button>
      ) : (
        <span className={css.text}>{text}</span>
      )}
    </React.Fragment>
  );
};

export default PaginationButton;
