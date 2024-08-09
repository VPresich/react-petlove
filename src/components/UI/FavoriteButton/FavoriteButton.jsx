import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import UnauthorizedModal from "../../../components/UnauthorizedModal/UnauthorizedModal";
import { selectIsFavorite } from "../../../redux/favorites/selectors";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import {
  addFavorite,
  removeFavorite,
} from "../../../redux/favorites/operations";

import iconsPath from "../../../assets/img/icons.svg";
import css from "./FavoriteButton.module.css";

const FavoriteButton = ({ id }) => {
  const location = useLocation();
  const isHeart = location.pathname === "/find";
  const dispatch = useDispatch();
  const [showFavoriteDiny, setShowFavoriteDiny] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isFavorite = useSelector((state) => selectIsFavorite(state, id));

  const handleToggleFavorite = () => {
    if (!isLoggedIn) {
      setShowFavoriteDiny(true);
      return;
    }
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  const handleClose = () => {
    setShowFavoriteDiny(false);
  };

  return (
    <>
      <button className={css.btn} onClick={handleToggleFavorite}>
        {isHeart ? (
          <svg
            className={clsx(css.icon, isFavorite && css.love)}
            aria-label="heart icon"
          >
            <use href={`${iconsPath}#icon-heart`} />
          </svg>
        ) : (
          <svg className={css.icon} aria-label="trash icon">
            <use href={`${iconsPath}#icon-trash`} />
          </svg>
        )}
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
