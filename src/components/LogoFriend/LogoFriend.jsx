import css from "./LogoFriend.module.css";

const LogoFriend = ({ logoUrl, altText }) => {
  return (
    <div className={css.container}>
      <img className={css.img} src={logoUrl} alt={altText} />
    </div>
  );
};
export default LogoFriend;
