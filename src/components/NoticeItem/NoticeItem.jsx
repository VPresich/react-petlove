import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/favorites/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { selectIsFavorite } from "../../redux/favorites/selectors";
import NoticeImage from "../UI/NoticeImage/NoticeImage";
import Button from "../UI/Button/Button";
import Star from "../UI/Star/Star";
import KindList from "../KindList/KindList";
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";
import FavoriteButton from "../UI/FavoriteButton/FavoriteButton";
import PetModal from "../PetModal/PetModal";
import UnauthorizedModal from "../UnauthorizedModal/UnauthorizedModal";
import css from "./NoticeItem.module.css";

const kinds = ["name", "birthday", "sex", "species", "category"];

const NoticeItem = ({ notice }) => {
  const { _id, name, imgURL, popularity, comment } = notice;
  const dispatch = useDispatch();

  const isLogeddIn = useSelector(selectIsLoggedIn);
  const isFavorite = useSelector((state) => selectIsFavorite(state, _id));

  const [showPetModal, setShowPetModal] = useState(false);
  const [showUnauthModal, setShowUnauthModal] = useState(false);

  const handleClick = () => {
    isLogeddIn ? setShowPetModal(true) : setShowUnauthModal(true);
  };

  const handlePetModaleClose = () => {
    setShowPetModal(false);
  };

  const handleUnauthModalClose = () => {
    setShowUnauthModal(false);
  };

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(_id));
    } else {
      dispatch(addFavorite(_id));
    }
    handlePetModaleClose();
  };

  const handleSend = () => {
    handlePetModaleClose();
  };

  return (
    <div className={css.container}>
      <NoticeImage imgUrl={imgURL} altText={name} />
      <div className={css.infoWrapper}>
        <div className={css.nameWrapper}>
          <p>{name}</p>
          <div className={css.ratingWrapper}>
            <Star isFilled={true} />
            <span>{popularity}</span>
          </div>
        </div>
        <div className={css.kindsWrapper}>
          <KindList kinds={kinds} notice={notice} />
          <p className={css.comment}>{comment}</p>
        </div>
      </div>
      <div className={css.buttons}>
        <Button onClick={handleClick} width="231px">
          Read more
        </Button>
        <FavoriteButton id={_id} />
      </div>
      {showPetModal && (
        <ModalWrapper onClose={handlePetModaleClose}>
          <PetModal
            notice={notice}
            hadleContact={handleSend}
            handleFavorite={handleFavorite}
          />
        </ModalWrapper>
      )}
      {showUnauthModal && (
        <ModalWrapper onClose={handleUnauthModalClose}>
          <UnauthorizedModal onClose={handleUnauthModalClose} />
        </ModalWrapper>
      )}
    </div>
  );
};

export default NoticeItem;
