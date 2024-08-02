import css from "./Emodzi.module.css";

const Emodzi = ({ children }) => {
  return (
    <div className={css.container}>
      <span className={css.emodzi}>{children}</span>
    </div>
  );
};
export default Emodzi;
