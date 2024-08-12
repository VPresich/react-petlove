import clsx from "clsx";
import css from "./ImageElem.module.css";

const ImageElem = ({
  imgUrl,
  altText = "",
  containerClass = null,
  detail = "",
  detailClass = "",
}) => {
  return (
    <div className={clsx(css.container, containerClass && containerClass)}>
      <img className={css.img} src={imgUrl} alt={`Photo of ${altText}`} />
      {detail && (
        <span className={clsx(css.detail, detailClass && detailClass)}>
          {detail}
        </span>
      )}
    </div>
  );
};
export default ImageElem;
