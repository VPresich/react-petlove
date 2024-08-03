import { useState } from "react";
import NoticeImage from "../UI/NoticeImage/NoticeImage";
import Button from "../UI/Button/Button";
import Star from "../UI/Star/Star";
import KindList from "../KindList/KindList";
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";
import PetModal from "../PetModal/PetModal";

import css from "./NoticeItem.module.css";

const kinds = ["name", "birthday", "sex", "species", "category"];

const NoticeItem = ({ notice }) => {
  const { name, imgURL, popularity, comment } = notice;

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleFavorite = () => {
    handleClose();
  };

  const handleSend = () => {
    handleClose();
  };

  // const handleShowDetails = () => {
  //   setShowDetails(!showDetails);
  // };

  // const handleValues = (values) => {
  //   console.log(values);
  //   setShowModal(false);
  //   setShowDetails(false);
  // };

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

      <Button onClick={handleClick} width="231px">
        Read more
      </Button>
      {showModal && (
        <ModalWrapper onClose={handleClose}>
          <PetModal
            notice={notice}
            hadleContact={handleSend}
            handleFavorite={handleFavorite}
          />
        </ModalWrapper>
      )}
    </div>
  );
};

export default NoticeItem;
