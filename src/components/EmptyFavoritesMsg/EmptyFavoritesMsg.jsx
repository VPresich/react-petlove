import css from "./EmptyFavoritesMsg.module.css";

const EmptyFavoritesMsg = () => {
  return (
    <p className={css.message}>
      Oops,{" "}
      <span className={css.accent}>
        looks like there aren&apos;t any furries
      </span>{" "}
      on our adorable page yet. Do not worry! View your pets on the &quot;find
      your favorite pet&quot; page and add them to your favorites.
    </p>
  );
};

export default EmptyFavoritesMsg;
