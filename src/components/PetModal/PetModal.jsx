import React from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { selectIsFavorite } from "../../redux/favorites/selectors";
import Image from "../UI/Image/Image";
import Stars from "../../components/UI/Stars/Stars";
import KindList from "../KindList/KindList";
import Button from "../UI/Button/Button";
import css from "./PetModal.module.css";
import iconsPath from "../../assets/img/icons.svg";

const kinds = ["name", "birthday", "sex", "species"];

const PetModal = ({ notice, handleContact, handleFavorite }) => {
  const { imgURL, category, title, comment } = notice;

  const isFavorite = useSelector((state) =>
    selectIsFavorite(state, notice._id)
  );

  console.log("isFavorite", isFavorite);

  return (
    <React.Fragment>
      <form className={css.form}>
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
            <Button
              onClick={handleFavorite}
              type="button"
              size="sxsmall"
              icon={
                <svg
                  className={clsx(css.icon, isFavorite && css.love)}
                  aria-label="heart icon"
                >
                  <use href={`${iconsPath}#icon-heart`} />
                </svg>
              }
            >
              {isFavorite ? "Remove from" : "Add to"}
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
