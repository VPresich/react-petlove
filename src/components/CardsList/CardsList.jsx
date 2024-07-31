import Card from "../../components/Card/Card";
import css from "./CardsList.module.css";

export default function CardsList({ nannies }) {
  return (
    <ul className={css.container}>
      {nannies.map((nanny) => (
        <li key={nanny._id}>
          <Card nanny={nanny} />
        </li>
      ))}
    </ul>
  );
}
