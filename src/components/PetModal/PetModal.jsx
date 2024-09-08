import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import clsx from "clsx";
import {
  selectViewedPetById,
  selectIsFavorite,
  selectIsLoading,
  selectError,
} from "../../redux/favorites/selectors";
import { getViewedPetById } from "../../redux/favorites/operations";
import ImageElem from "../UI/ImageElem/ImageElem";
import Stars from "../../components/UI/Stars/Stars";
import KindList from "../KindList/KindList";
import Button from "../UI/Button/Button";
import css from "./PetModal.module.css";
import PetErrorModal from "../PetErrorModal/PetErrorModal";
import iconsPath from "../../assets/img/icons.svg";
import { errNotify } from "../../auxiliary/notification/notification";
import Loader from "../UI/Loader/Loader";

const kinds = ["name", "birthday", "sex", "species"];

const PetModal = ({ notice, handleContact, handleFavorite }) => {
  const { _id } = notice;
  const dispatch = useDispatch();

  const isFavorite = useSelector((state) => selectIsFavorite(state, _id));
  const viewedPet = useSelector((state) => selectViewedPetById(state, _id));
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    if (_id) {
      dispatch(getViewedPetById(_id))
        .unwrap()
        .catch(() => {
          errNotify("Error retrieving pet by ID");
        });
    }
  }, [dispatch, _id]);

  return (
    <React.Fragment>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <PetErrorModal notice={notice} onClose={handleContact} />
      ) : (
        viewedPet && (
          <form className={css.form}>
            <div className={css.content}>
              <ImageElem
                imgUrl={viewedPet.imgURL}
                altText="pet"
                detail={viewedPet.category}
                containerClass={css.imgWrapper}
              />

              <div className={css.titleWrapper}>
                <p className={css.title}>{viewedPet.title}</p>
                <Stars value={1} />
              </div>
              <div className={css.kindsWrapper}>
                <KindList kinds={kinds} notice={viewedPet} />
                <p className={css.comment}>{viewedPet.comment}</p>
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
                  as="a"
                  href={`mailto:${viewedPet.user.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  type="button"
                  size="sxsmall"
                  background="secondary"
                >
                  Contact
                </Button>
              </div>
            </div>
          </form>
        )
      )}
    </React.Fragment>
  );
};

export default PetModal;

// const size = ["large", "medium", "small", "sxsmall"];
// const background = ["primary", "secondary", "transparent", "cancel"];
// const uppercase = true;
