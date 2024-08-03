import NoticeItem from "../NoticeItem/NoticeItem";
import css from "./NoticeItemList.module.css";

const NoticeItemList = ({ notices }) => {
  return (
    <ul className={css.container}>
      {notices.map((notice) => (
        <li key={notice._id}>
          <NoticeItem notice={notice} />
        </li>
      ))}
    </ul>
  );
};

export default NoticeItemList;
