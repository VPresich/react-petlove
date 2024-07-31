import clsx from "clsx";
import DocumentTitle from "../../components/DocumentTitle";

import imgDesktop1x from "../../assets/img/home/img-desktop@1x.jpg";
import imgDesktop2x from "../../assets/img/home/img-desktop@2x.jpg";
import imgTablet1x from "../../assets/img/home/img-tablet@1x.jpg";
import imgTablet2x from "../../assets/img/home/img-tablet@2x.jpg";
import imgMobile1x from "../../assets/img/home/img-mobile@1x.jpg";
import imgMobile2x from "../../assets/img/home/img-mobile@2x.jpg";

import css from "./PetHomePage.module.css";

const PetHomePage = () => {
  return (
    <>
      <DocumentTitle>Pet Home Page</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <div className={clsx(css.infoContainer)}>
            <h1 className={css.title}>
              Take good <span className={css.accent}>care</span> of your small
              pets
            </h1>
            <p className={css.text}>
              Choosing a pet for your home is a choice that is meant to enrich
              your life with immeasurable joy and tenderness.
            </p>
          </div>
          <div className={css.imgContainer}>
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={`${imgDesktop1x} 1x, ${imgDesktop2x} 2x`}
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${imgTablet1x} 1x, ${imgTablet2x} 2x`}
              />
              <source
                media="(max-width: 767px)"
                srcSet={`${imgMobile1x} 1x, ${imgMobile2x} 2x`}
              />
              <img src={imgMobile1x} alt="Pet photo" />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
};

export default PetHomePage;
