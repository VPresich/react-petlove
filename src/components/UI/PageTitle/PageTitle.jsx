import css from "./PageTitle.module.css";
const PageTitle = ({ children, subtitle }) => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>{children}</h2>
      {subtitle && <p className={css.subTitle}>{subtitle}</p>}
    </div>
  );
};

export default PageTitle;
