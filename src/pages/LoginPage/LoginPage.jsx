import DocumentTitle from "../../components/DocumentTitle";
import LoginForm from "../../components/Authentication/Forms/LoginForm/LoginForm";

import imgDesktop1x from "../../assets/img/login/dog-desktop@1x.png";
import imgDesktop2x from "../../assets/img/login/dog-desktop@2x.png";

import imgTablet1x from "../../assets/img/login/dog-tablet@1x.png";
import imgTablet2x from "../../assets/img/login/dog-tablet@2x.png";

import imgMobile1x from "../../assets/img/login/dog-mobile@1x.png";
import imgMobile2x from "../../assets/img/login/dog-mobile@2x.png";

import css from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <>
      <DocumentTitle>Login Page</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
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
              <img src={imgMobile1x} alt="dog photo" />
            </picture>
          </div>
          <div className={css.formContainer}>
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
