import { useState } from "react";
// import CardFeatures from "../CardFeatures/CardFeatures";
// import CardDetails from "../CardDetails/CardDetails";
// import FavoriteButton from "../UI/FavoriteButton/FavoriteButton";
// import KindList from "../KindList/KindList";
// import EllipsisText from "../UI/EllipsisText/EllipsisText";
// import Button from "../UI/Button/Button";
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";
import PetModal from "../PetModal/PetModal";

import Image from "../UI/Image/Image";
import css from "./PetCard.module.css";

const PetCard = ({ notice }) => {
  const [showModal, setShowModal] = useState(false);

  // const kinds = [
  //   { title: "Name", value: notice.name },
  //   { title: "Birthday", value: notice.birthday },
  //   { title: "Sex", value: notice.sex },
  //   { title: "Species", value: notice.species },
  // ];

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
      <Image imgUrl={notice.imgURL} category={notice.category} />

      <button className={css.readMore} onClick={handleClick}>
        Read more
      </button>

      {/* <div className={css.infoWrapper}>
        <div className={css.firstLine}>
          <div className={css.nameWrapper}>
            <span className={css.label}>Nanny</span>
            <p className={css.name}>{notice.name} </p>
          </div>
          <CardFeatures nanny={notice} />
          <div className={css.favoriteContainer}>
            <FavoriteButton id={notice._id} />
          </div>
        </div>

        <div className={css.mainInfo}>
          <KindList kinds={kinds} />

          <div className={css.descrWrapper}>
            <EllipsisText
              text={notice.about}
              maxLines={3}
              className={css.description}
            />
          </div>
        </div>
        {!showDetails && (
          <span className={css.readMore} onClick={handleShowDetails}>
            Read more
          </span>
        )}
        <div
          className={
            showDetails
              ? `${css.details} ${css.visible}`
              : `${css.details} ${css.hidden}`
          }
        >
          <CardDetails nanny={notice} />
        </div>

        <div
          className={
            showDetails
              ? `${css.details} ${css.visible}`
              : `${css.details} ${css.hidden}`
          }
        >
          <Button onClick={handleClick} btnAuxStyles={css.btnAuxStyles}>
            Make an appointment
          </Button>
        </div>
      </div> */}
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

export default PetCard;
