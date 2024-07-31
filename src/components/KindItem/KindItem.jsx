import clsx from "clsx";
import css from "./KindItem.module.css";

const KindItem = ({ kind }) => {
  return (
    <div className={css.container}>
      <span className={clsx(css.item, css.title)}>{kind.title}</span>
      <span
        className={clsx(css.item, css.value, kind.underline && css.underline)}
      >
        {kind.value}
      </span>
    </div>
  );
};

export default KindItem;
