import KindItem from "../KindItem/KindItem";
import clsx from "clsx";
import css from "./KindList.module.css";

const KindList = ({ kinds, notice, containerClass = null }) => {
  return (
    <ul className={clsx(css.container, containerClass && containerClass)}>
      {kinds.map((elem, index) => (
        <li key={index}>
          <KindItem title={elem} value={notice[elem]} />
        </li>
      ))}
    </ul>
  );
};

export default KindList;
