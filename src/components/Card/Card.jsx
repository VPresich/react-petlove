import { useState } from "react";
import CardFeatures from "../CardFeatures/CardFeatures";
import CardDetails from "../CardDetails/CardDetails";
import FavoriteButton from "../../components/UI/FavoriteButton/FavoriteButton";
import KindList from "../KindList/KindList";
import EllipsisText from "../../components/UI/EllipsisText/EllipsisText";
import Button from "../UI/Button/Button";
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";
import calculateAge from "../../auxiliary/calculateAge";
import MakeAppoitmentFormContent from "../MakeAppoitmentFormContent/MakeAppoitmentFormContent";
import Image from "../UI/Image/Image";
import css from "./Card.module.css";

export default function Card({ nanny }) {
  const [showModal, setShowModal] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const kinds = [
    { title: "Age: ", value: calculateAge(nanny.birthday), underline: true },
    { title: "Experience: ", value: nanny.experience },
    { title: "Kids Age: ", value: nanny.kids_age },
    {
      title: "Characters: ",
      value: nanny.characters.join(", "),
    },
    { title: "Education: ", value: nanny.education },
  ];

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleValues = (values) => {
    console.log(values);
    setShowModal(false);
    setShowDetails(false);
  };

  return (
    <div className={css.container}>
      <Image imgUrl={nanny.avatar_url} name="Nanny photo" />
      <div className={css.infoWrapper}>
        <div className={css.firstLine}>
          <div className={css.nameWrapper}>
            <span className={css.label}>Nanny</span>
            <p className={css.name}>{nanny.name} </p>
          </div>
          <CardFeatures nanny={nanny} />
          <div className={css.favoriteContainer}>
            <FavoriteButton id={nanny._id} />
          </div>
        </div>

        <div className={css.mainInfo}>
          <KindList kinds={kinds} />

          <div className={css.descrWrapper}>
            <EllipsisText
              text={nanny.about}
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
          <CardDetails nanny={nanny} />
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
      </div>
      {showModal && (
        <ModalWrapper onClose={handleClose}>
          <MakeAppoitmentFormContent
            nanny={nanny}
            handleValues={handleValues}
          />
        </ModalWrapper>
      )}
    </div>
  );
}
