import React from "react";
import { useForm } from "react-hook-form";
import Image from "../UI/Image/Image";
import Stars from "../../components/UI/Stars/Stars";
import KindList from "../KindList/KindList";
import Button from "../UI/Button/Button";
import css from "./PetModal.module.css";

const kinds = ["name", "birthday", "sex", "species"];

const PetModal = ({ notice, hadleContact, handleFavorite }) => {
  const { imgURL, category, title, comment } = notice;

  const { handleSubmit } = useForm();

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(handleFavorite)} className={css.form}>
        <div className={css.content}>
          <Image imgUrl={imgURL} category={category} />
          <p className={css.title}>{title}</p>
          <Stars value={1} />
          <p className={css.comment}>{comment}</p>
          <KindList kinds={kinds} notice={notice} />
          <div className={css.buttons}>
            <Button type="submit">Add to</Button>
            <Button
              onClick={hadleContact}
              btnAuxStyles={css.cancelBtn}
              type="button"
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
