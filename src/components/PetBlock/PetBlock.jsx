import clsx from "clsx";
import css from "./PetBlock.module.css";

const PetBlock = ({ children, birthday, descr, emodzi, className }) => {
  return (
    <div className={clsx(css.container, className && className)}>
      <div className={clsx(css.emodziContainer)}>
        <span className={clsx(css.emodzi)}>{emodzi}</span>
      </div>
      <div className={css.textWrapper}>
        <div className={css.titleWrapper}>
          <span className={css.name}> {children}</span>
          <span className={css.birthday}>
            Birthday: <span className={css.date}>{birthday}</span>
          </span>
        </div>
        <p className={css.description}>{descr}</p>
      </div>
    </div>
  );
};

export default PetBlock;
