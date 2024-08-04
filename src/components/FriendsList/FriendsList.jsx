import Friendstem from "../FriendsItem/FriendsItem";
import css from "./FriendsList.module.css";

export default function FriendsList({ items }) {
  return (
    <ul className={css.container}>
      {items.map((item) => (
        <li key={item._id}>
          <Friendstem item={item} />
        </li>
      ))}
    </ul>
  );
}
