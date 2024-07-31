import KindItem from "../KindItem/KindItem";
import css from "./KindList.module.css";

const KindList = ({ kinds }) => {
  return (
    <ul className={css.container}>
      {kinds.map((elem, index) => (
        <li key={index}>
          <KindItem kind={elem} />
        </li>
      ))}
    </ul>
  );
};

export default KindList;
