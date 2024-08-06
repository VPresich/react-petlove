import NewItem from "../NewItem/NewItem";
import css from "./NewsList.module.css";

export default function NewsList({ items }) {
  return (
    <ul className={css.container}>
      {items.map((item) => (
        <li key={item._id}>
          <NewItem item={item} />
        </li>
      ))}
    </ul>
  );
}
