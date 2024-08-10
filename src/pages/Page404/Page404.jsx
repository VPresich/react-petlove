import { useNavigate } from "react-router-dom";
import DocumentTitle from "../../components/DocumentTitle";
import ResponsiveImage from "../../components/UI/ResponsiveImg/ResponsiveImg";
import css from "./Page404.module.css";

import imgDesktop1x from "../../assets/img/page404/cat404-desktop@1x.png";
import imgDesktop2x from "../../assets/img/page404/cat404-desktop@2x.png";
import imgTablet1x from "../../assets/img/page404/cat404-tablet@1x.png";
import imgTablet2x from "../../assets/img/page404/cat404-tablet@2x.png";
import imgMobile1x from "../../assets/img/page404/cat404-mobile@1x.png";
import imgMobile2x from "../../assets/img/page404/cat404-mobile@2x.png";

const imageData = {
  imgDesktop1x,
  imgDesktop2x,
  imgTablet1x,
  imgTablet2x,
  imgMobile1x,
  imgMobile2x,
  altText: "Pet photo",
};

export default function Page404() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile");
  };
  return (
    <section className={css.section}>
      <DocumentTitle>Page Ooops</DocumentTitle>

      <div className={css.container}>
        <div className={css.imgWrapper}>
          <p className={css.four}>4</p>{" "}
          <div className={css.catContainer}>
            <ResponsiveImage imageData={imageData} />
          </div>
          <p className={css.four}>4</p>
        </div>
        <p className={css.text}>Ooops! This page not found :(</p>
        <button onClick={handleClick} className={css.btn}>
          To home page
        </button>
      </div>
    </section>
  );
}
