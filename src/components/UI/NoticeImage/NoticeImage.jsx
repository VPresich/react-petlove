import css from "./NoticeImage.module.css";

const NoticeImage = ({ imgUrl, altText }) => {
  return (
    <div className={css.container}>
      <img className={css.img} src={imgUrl} alt={altText} />
    </div>
  );
};

export default NoticeImage;
