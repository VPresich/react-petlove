import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import UnauthorizedModal from "../../../components/UnauthorizedModal/UnauthorizedModal";
import {
  selectFavorites,
  selectIsFavorite,
} from "../../../redux/favorites/selectors";

import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import {
  addFavorite,
  removeFavorite,
} from "../../../redux/favorites/operations";

import {
  errNotify,
  successNotify,
} from "../../../auxiliary/notification/notification";

import iconsPath from "../../../assets/img/icons.svg";
import css from "./FavoriteButton.module.css";

const FavoriteButton = ({ id }) => {
  const dispatch = useDispatch();
  const [showFavoriteDiny, setShowFavoriteDiny] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isFavorite = useSelector((state) => selectIsFavorite(state, id));
  const favorites = useSelector(selectFavorites);

  // console.log("IsFavorite", "id", id, isFavorite);
  // console.log("Favorites", favorites);
  // const isFavorite = true;

  const handleToggleFavorite = () => {
    if (!isLoggedIn) {
      setShowFavoriteDiny(true);
      return;
    }
    if (isFavorite) {
      dispatch(removeFavorite(id))
        .unwrap()
        .then((data) => {
          console.log(data);
          successNotify("REMOVE_SUCC");
        })
        .catch(() => {
          errNotify("REMOVE_ERR");
        });
    } else {
      dispatch(addFavorite(id))
        .unwrap()
        .then((data) => {
          console.log(data);
          successNotify("ADDING_SUCC");
        })
        .catch(() => {
          errNotify("ADDING_ERROR");
        });
    }
  };

  const handleClose = () => {
    setShowFavoriteDiny(false);
  };

  return (
    <>
      <button className={css.btn} onClick={handleToggleFavorite}>
        <svg
          className={clsx(css.icon, isFavorite && css.love)}
          width="18"
          height="18"
          aria-label="heart icon"
        >
          <use href={`${iconsPath}#icon-heart`} />
        </svg>
      </button>
      {showFavoriteDiny && (
        <ModalWrapper onClose={handleClose}>
          <UnauthorizedModal onClose={handleClose} />
        </ModalWrapper>
      )}
    </>
  );
};

export default FavoriteButton;
