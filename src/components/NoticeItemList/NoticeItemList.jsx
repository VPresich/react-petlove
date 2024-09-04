import NoticeItem from "../NoticeItem/NoticeItem";
import clsx from "clsx";
import css from "./NoticeItemList.module.css";

const NoticeItemList = ({ notices, forFavorites = false }) => {
  return (
    <ul className={clsx(css.container, forFavorites && css.favorite)}>
      {notices.map((notice) => (
        <li key={notice._id}>
          <NoticeItem notice={notice} forFavorites={forFavorites} />
        </li>
      ))}
    </ul>
  );
};

export default NoticeItemList;
