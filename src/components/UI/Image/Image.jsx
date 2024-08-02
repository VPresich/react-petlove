import css from "./Image.module.css";

const Image = ({ imgUrl, category }) => {
  return (
    <div className={css.container}>
      <img className={css.img} src={imgUrl} alt={name} />
      <span className={css.category}>{category}</span>
    </div>
  );
};
export default Image;
