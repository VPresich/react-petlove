import clsx from "clsx";
import css from "./KindItem.module.css";
import { formatDate } from "../../auxiliary/formats";
import { capitalizeFirstLetter } from "../../auxiliary/formats";

const KindItem = ({ title, value }) => {
  return (
    <div className={css.container}>
      <span className={clsx(css.item, css.title)}>
        {capitalizeFirstLetter(title)}
      </span>
      <span className={clsx(css.item, css.value)}>
        {title === "birthday" ? formatDate(value) : value}
      </span>
    </div>
  );
};

export default KindItem;
