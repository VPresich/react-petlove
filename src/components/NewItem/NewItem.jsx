import EllipsisText from "../UI/EllipsisText/EllipsisText";
import NoticeImage from "../UI/NoticeImage/NoticeImage";
import { getDateWithFormat } from "../../auxiliary/formats";
import css from "./NewItem.module.css";

export default function NewItem({ item }) {
  const { imgUrl, title, text, date, url } = item;

  return (
    <div className={css.container}>
      <NoticeImage
        imgUrl={imgUrl}
        auxStyles={css.auxImgContainer}
        name="Topic photo"
      />
      <div className={css.infoWrapper}>
        <div className={css.mainInfo}>
          <EllipsisText text={title} maxLines={2} className={css.title} />
          <EllipsisText text={text} maxLines={3} className={css.text} />
        </div>
        <div className={css.lastString}>
          <span className={css.date}>{getDateWithFormat(date)}</span>
          <a
            className={css.readMore}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
