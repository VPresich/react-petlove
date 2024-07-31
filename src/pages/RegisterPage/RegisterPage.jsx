import { Link } from "react-router-dom";
import PageTitle from "../../components/UI/PageTitle/PageTitle";
import PetBlock from "../../components/PetBlock/PetBlock";
import DocumentTitle from "../../components/DocumentTitle";
import ResponsiveImage from "../../components/UI/ResponsiveImg/ResponsiveImg";
import RegisterForm from "../../components/Authentication/Forms/RegisterForm/RegisterForm";

import imgDesktop1x from "../../assets/img/register/cat-desktop@1x.png";
import imgDesktop2x from "../../assets/img/register/cat-desktop@2x.png";

import imgTablet1x from "../../assets/img/register/cat-tablet@1x.png";
import imgTablet2x from "../../assets/img/register/cat-tablet@2x.png";

import imgMobile1x from "../../assets/img/register/cat-mobile@1x.png";
import imgMobile2x from "../../assets/img/register/cat-mobile@2x.png";

import css from "./RegisterPage.module.css";

const imageData = {
  imgDesktop1x,
  imgDesktop2x,
  imgTablet1x,
  imgTablet2x,
  imgMobile1x,
  imgMobile2x,
  altText: "Pet photo",
};

const RegisterPage = () => {
  return (
    <>
      <DocumentTitle>Login Page</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <div className={css.imgContainer}>
            <ResponsiveImage imageData={imageData} />
            <PetBlock
              emodzi="🐈"
              birthday="18.10.2021"
              descr="Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys."
              className={css.petBlock}
            >
              Jack
            </PetBlock>
          </div>
          <div className={css.formContainer}>
            <div className={css.form}>
              <PageTitle subtitle="Thank you for your interest in our platform. ">
                Registration
              </PageTitle>
              <RegisterForm />
            </div>
            <p className={css.link}>
              Already have an account?{" "}
              <Link to="/login" className={css.linkAccent}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
