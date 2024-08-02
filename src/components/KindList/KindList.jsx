import KindItem from "../KindItem/KindItem";
import css from "./KindList.module.css";

const KindList = ({ kinds, notice }) => {
  return (
    <ul className={css.container}>
      {kinds.map((elem, index) => (
        <li key={index}>
          <KindItem title={elem} value={notice[elem]} />
        </li>
      ))}
    </ul>
  );
};

export default KindList;
