import { Link } from "react-router-dom";
import PageTitle from "../../components/UI/PageTitle/PageTitle";
import DocumentTitle from "../../components/DocumentTitle";
import ResponsiveImage from "../../components/UI/ResponsiveImg/ResponsiveImg";
import LoginForm from "../../components/Authentication/Forms/LoginForm/LoginForm";
import PetBlock from "../../components/PetBlock/PetBlock";

import imgDesktop1x from "../../assets/img/login/dog-desktop@1x.png";
import imgDesktop2x from "../../assets/img/login/dog-desktop@2x.png";

import imgTablet1x from "../../assets/img/login/dog-tablet@1x.png";
import imgTablet2x from "../../assets/img/login/dog-tablet@2x.png";

import imgMobile1x from "../../assets/img/login/dog-mobile@1x.png";
import imgMobile2x from "../../assets/img/login/dog-mobile@2x.png";

import css from "./LoginPage.module.css";

const imageData = {
  imgDesktop1x,
  imgDesktop2x,
  imgTablet1x,
  imgTablet2x,
  imgMobile1x,
  imgMobile2x,
  altText: "Pet photo",
};

const LoginPage = () => {
  return (
    <>
      <DocumentTitle>Login Page</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <div className={css.imgContainer}>
            <ResponsiveImage imageData={imageData} />
            <PetBlock
              emodzi="🐶"
              birthday="21.09.2020"
              descr="Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!"
              className={css.petBlock}
            >
              Rich
            </PetBlock>
          </div>
          <div className={css.formContainer}>
            <div className={css.form}>
              <PageTitle subtitle="Welcome! Please enter your credentials to login to the platform:">
                Log In
              </PageTitle>
              <LoginForm />
            </div>
            <p className={css.link}>
              Don&rsquo;t have an account?{" "}
              <Link to="/register" className={css.linkAccent}>
                Register
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
