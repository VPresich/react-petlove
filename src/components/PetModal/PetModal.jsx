import React from "react";
import { useForm } from "react-hook-form";
import Image from "../UI/Image/Image";
import Stars from "../../components/UI/Stars/Stars";
import KindList from "../KindList/KindList";
import Button from "../UI/Button/Button";
import css from "./PetModal.module.css";

const kinds = ["name", "birthday", "sex", "species"];

const PetModal = ({ notice, handleContact, handleFavorite }) => {
  const { imgURL, category, title, comment } = notice;

  const { handleSubmit } = useForm();

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(handleFavorite)} className={css.form}>
        <div className={css.content}>
          <div className={css.imgWrapper}>
            <Image imgUrl={imgURL} category={category} />
          </div>

          <div className={css.titleWrapper}>
            <p className={css.title}>{title}</p>
            <Stars value={1} />
          </div>
          <div className={css.kindsWrapper}>
            <KindList kinds={kinds} notice={notice} />
            <p className={css.comment}>{comment}</p>
          </div>
          <div className={css.buttons}>
            <Button type="submit" size="sxsmall" iconId="icon-heart">
              Add to
            </Button>
            <Button
              onClick={handleContact}
              type="button"
              size="sxsmall"
              background="secondary"
            >
              Contact
            </Button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default PetModal;

// const size = ["large", "medium", "small", "sxsmall"];
// const background = ["primary", "secondary", "transparent", "cancel"];
// const uppercase = true;
