import React from "react";
import ImageElem from "../UI/ImageElem/ImageElem";
import Stars from "../UI/Stars/Stars";
import KindList from "../KindList/KindList";
import Button from "../UI/Button/Button";
import css from "./PetErrorModal.module.css";

const kinds = ["name", "birthday", "sex", "species"];

const PetErrorModal = ({ notice, onClose }) => {
  const { imgURL, title } = notice;
  return (
    <React.Fragment>
      <form className={css.form}>
        <div className={css.content}>
          <ImageElem
            imgUrl={imgURL}
            altText="pet"
            detail="error"
            containerClass={css.imgWrapper}
          />

          <div className={css.titleWrapper}>
            <p className={css.title}>{title} </p>
            <Stars value={0} />
          </div>
          <div className={css.kindsWrapper}>
            <KindList kinds={kinds} notice={notice} />
            <p className={css.comment}>
              This pet is no longer in the database!
            </p>
          </div>
          <div className={css.buttons}>
            <Button
              onClick={onClose}
              type="button"
              size="sxsmall"
              background="primary"
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default PetErrorModal;
