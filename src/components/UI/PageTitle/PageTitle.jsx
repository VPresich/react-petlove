import css from "./PageTitle.module.css";
const PageTitle = ({ children, subtitle }) => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>{children}</h3>
      {subtitle && <p className={css.subTitle}>{subtitle}</p>}
    </div>
  );
};

export default PageTitle;
